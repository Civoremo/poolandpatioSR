import React from 'react';
import * as emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const FormContainer = styled.div `
  display: flex;
  /* justify-content: center; */
  flex-direction: 'row';
  width: 100%;
  min-width: 450px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

const NameEmailInputContainer = styled.div `
  display: flex;
  width: 100%;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`

const MessageInputContainer = styled.div `
  /* margin-bottom: 20px; */
  padding: 10px 20px;
`

const FormSubmitButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`

const NameInputDiv = styled.div `
  margin-right: 30px;

  @media (max-width: 1199px) {
    margin-right: 0px;
  }
`

const NameInput = styled.input `
  width: 383px;

  @media (max-width: 1199px) {
    width: 100%;
  }
`

const EmailInputDiv = styled.div `

`

const EmailInput = styled.input `
  width: 383px;

  @media (max-width: 1199px) {
    width: 100%;
  }
`

const DisplayErrorDiv = styled.div `
  display: block;
  height: 30px;
`

const HideErrorDiv = styled.div `
  display: none;
  height: 30px;
`

const HoursOfOperationDiv = styled.div `
  display: flex;
  /* align-items: center; */

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
  }
`

const FormInputContainer = styled.form `
  width: 100%;
  border: 3px solid #1759AA;
  border-radius: 5px;
  padding: 40px 20px 20px 20px;

  @media (min-width: 1200px) {
    width: 800px;
  }
`

const LineSeperatorDiv = styled.div `
  width: 25px;
  border-right: 1px solid #A9A9A9;
  margin-right: 25px;
`

const InputField = styled.input `
  width: 100%;
  padding: 5px 5px;
`

const InputDiv = styled.div `
  min-width: 350px;

  @media (max-width: 1199px) {
    min-width: 250px
  }

  @media (max-width: 991px) {
    min-width: 100%;
  }
`

const InputFieldContainer = styled.div `
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CheckboxContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px; 
  /* border: 1px solid red; */
`

const CheckboxDiv = styled.div `
  width: 200px;
  margin-bottom: 5px;
  /* border: 1px solid green; */
`

const CheckboxInput = styled.input `
  margin-right: 5px;
`

const ContactForm = props => {
  const { 
    handleInputChange, 
    handleCheckboxChange,
    setErrorMessages, 
    clearInputs, 
    toggleMissingInfoMessage, 
    senderEmail, 
    senderFirstName, 
    senderLastName,
    senderPhone,
    senderStreet,
    senderCity,
    senderState,
    senderZipcode,
    senderGateCode,
    senderServices,
    senderMessage, 
    senderError, 
    insufficientInfo 
  } = props;

  const validateEmail = () => {
    let errors = {};
    let formIsValid = true;

    if (!senderFirstName || senderFirstName.length < 2) {
      errors.fName = 'Required!';
      formIsValid = false;
    }

    if (!senderLastName || senderLastName.length < 2) {
      errors.lName = 'Required!';
      formIsValid = false;
    }

    if (!senderEmail || senderEmail.length < 3) {
      errors.email = 'Not a valid email!';
      formIsValid = false;
    }

    if (!senderStreet) {
      errors.street = 'Required!';
      formIsValid = false;
    }

    if (!senderCity) {
      errors.city = 'Required!';
      formIsValid = false;
    }

    if (!senderState) {
      errors.state = 'Required!';
      formIsValid = false;
    }

    if (!senderZipcode) {
      errors.zipcode = 'Required!';
      formIsValid = false;
    }

    if(!senderPhone || senderPhone.length < 11 || senderPhone.length > 13) {
      errors.phone = 'Not a valid phone!';
      formIsValid = false;
    }

    if (!senderMessage || senderMessage.length < 10) {
      errors.message = 'Not enough info.';
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(senderEmail)) {
      errors.email = 'Not a valid email.';
      formIsValid = false;
    }

    setErrorMessages( errors );
    toggleMissingInfoMessage();

    return formIsValid;
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if (!validateEmail()) {
      // alert(senderError.name + senderError.email + senderError.message)
      return
    }

    let templateParams = {
      from_name: senderFirstName + senderLastName + ' ( ' + senderEmail + ' ) ',
      from_email: senderEmail,
      to_name: 'PPSR',
      subject: 'PPSR Contact Form',
      message_html: senderMessage
    }

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATE, templateParams, process.env.REACT_APP_EMAILJS_USER)
      .then(response => {
        console.log(response)
        alert("Message send successfully.")
        clearInputs();
      })
      .catch(error => {
        console.log(error)
        alert("Message failed, try again.")
      })
  }

  return (
    <div style={{padding: '40px 0'}}>
      <Container>

        <div style={{fontSize: '2rem', marginBottom: '15px'}}>
          <span style={{paddingLeft: '20px', fontFamily: 'Raleway'}}>Contact Us</span>
          <div style={{borderBottom: '2px solid #DFDFDF', width: '100%', marginBottom: '30px'}} />
        </div>
        <div style={{marginBottom: '50px'}}>
          <p>
            Fill out the form below to receive a free no obligation estimate on your project. Tell us what kind of work you need done. We will follow up via email or call you with any questions we might have to accurately quote your project.
          </p>
          <p>
            If we are unable to quote your project online, we will email or call you to schedule a convenient time to come out and give you an accurate quote.
          </p>
        </div>

        <FormContainer>
          {/* <FormInputContainer method='post' action='submmit'>
            <NameEmailInputContainer>
              <NameInputDiv>
                <NameInput
                  type='text'
                  name='senderFirstName'
                  placeholder='Name'
                  required='required'
                  onChange={handleInputChange}
                  value={senderFirstName}
                  error={senderError.name}
                  // style={{padding: '0 10px', height: '40px'}}
                >
                </NameInput>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.name}</div>
              </NameInputDiv>
              <EmailInputDiv>
                <EmailInput
                  type='text'
                  name='senderEmail'
                  placeholder='Email'
                  required='required'
                  onChange={handleInputChange}
                  value={senderEmail}
                  error={senderError.email}
                  // style={{padding: '0 10px', height: '40px'}}
                >
                </EmailInput>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.email}</div>
              </EmailInputDiv>
            </NameEmailInputContainer>
            <MessageInputContainer>
              <textarea
                type='text'
                name='senderMessage'
                placeholder='Message'
                required='required'
                onChange={handleInputChange}
                value={senderMessage}
                error={senderError.message}
                rows='6'
                style={{resize: 'none', padding: '5px 10px', width: '100%'}}
              >
              </textarea>
              <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.message}</div>
            </MessageInputContainer>
            <FormSubmitButtonContainer>
              <Button
                onClick={sendMessage}
                type='button'
                name='submit'
                required='required'
              >
                Submit
              </Button>
            </FormSubmitButtonContainer>
          </FormInputContainer> */}

          <FormInputContainer method='post' action='submit'>

            <div style={{fontWeight: 'bold'}}>Contact Info</div>

            <InputFieldContainer>
              <InputDiv>
                <InputField
                  type='text'
                  name='senderFirstName'
                  placeholder='First Name'
                  required='required'
                  onChange={handleInputChange}
                  value={senderFirstName}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.fName}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderLastName'
                  placeholder='Last Name'
                  required='required'
                  onChange={handleInputChange}
                  value={senderLastName}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.lName}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderEmail'
                  placeholder='Email'
                  required="required"
                  onChange={handleInputChange}
                  value={senderEmail}
                >              
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.email}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type="text"
                  name='senderPhone'
                  placeholder='Phone # (ex. 555-555-5555)'
                  required='required'
                  onChange={handleInputChange}
                  value={senderPhone}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.phone}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderStreet'
                  placeholder='Street'
                  required='required'
                  onChange={handleInputChange}
                  value={senderStreet}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.street}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderCity'
                  placeholder='City'
                  required='required'
                  onChange={handleInputChange}
                  value={senderCity}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.city}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderState'
                  placeholder='State'
                  required='required'
                  onChange={handleInputChange}
                  value={senderState}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.state}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderZipcode'
                  placeholder='Zip Code'
                  required='required'
                  onChange={handleInputChange}
                  value={senderZipcode}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.zipcode}</div>
              </InputDiv>

              <InputDiv>
                <InputField
                  type='text'
                  name='senderGateCode'
                  placeholder='Gate Code (if available)'
                  onChange={handleInputChange}
                  value={senderGateCode}
                >
                </InputField>
                <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}></div>
              </InputDiv>
            </InputFieldContainer>
            
            <div style={{fontWeight: 'bold'}}>Select Services</div>

            <CheckboxContainer>
              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='complete'
                  onChange={(event) => handleCheckboxChange(event, 'complete')}
                  value={senderServices.complete}
                >
                </CheckboxInput>
                <label>Complete Re-Screen</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='individual'
                  onChange={(event) => handleCheckboxChange(event, 'individual')}
                  value={senderServices.individual}
                >
                </CheckboxInput>
                <label>Individual Panels</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='window'
                  onChange={(event) => handleCheckboxChange(event, 'window')}
                  value={senderServices.window}
                >
                </CheckboxInput>
                <label>Window Screens</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='lanai'
                  onChange={(event) => handleCheckboxChange(event, 'lanai')}
                  value={senderServices.lanai}
                >
                </CheckboxInput>
                <label>New Screen Lanai Insert</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='entry'
                  onChange={(event) => handleCheckboxChange(event, 'entry')}
                  value={senderServices.entry}
                >
                </CheckboxInput>
                <label>Front Entry Way Insert</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='washing'
                  onChange={(event) => handleCheckboxChange(event, 'washing')}
                  value={senderServices.washing}
                >
                </CheckboxInput>
                <label>Pressure Washing</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='gutter'
                  onChange={(event) => handleCheckboxChange(event, 'gutter')}
                  value={senderServices.gutter}
                >
                </CheckboxInput>
                <label>Gutter Cleaning</label>
              </CheckboxDiv>

              <CheckboxDiv>
                <CheckboxInput
                  type='checkbox'
                  name='misc'
                  onChange={(event) => handleCheckboxChange(event, 'misc')}
                  value={senderServices.misc}
                >
                </CheckboxInput>
                <label>Misc. Repairs</label>
              </CheckboxDiv>
            </CheckboxContainer>

            <div style={{fontWeight: 'bold'}}>Message</div>

            <MessageInputContainer>
              <textarea
                type='text'
                name='senderMessage'
                placeholder='Please provide us with details about your project...'
                required='required'
                onChange={handleInputChange}
                value={senderMessage}
                error={senderError.message}
                rows='6'
                style={{resize: 'none', padding: '5px 10px', width: '100%'}}
              >
              </textarea>
              <div className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />} style={{color: 'red', height: '30px'}}>{senderError.message}</div>
            </MessageInputContainer>

            <FormSubmitButtonContainer>
              <Button
                onClick={sendMessage}
                type='button'
                name='submit'
                required='required'
              >
                Submit
              </Button>
            </FormSubmitButtonContainer>

          </FormInputContainer>

          <LineSeperatorDiv />

          <HoursOfOperationDiv>
            <div>
              <div style={{borderBottom: '1px solid #A9A9A9', marginBottom: '15px'}}>
                <span style={{fontWeight: 'bold'}}>
                  Business Hours
                </span>
              </div>
              <div style={{minWidth: '250px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Monday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Tuesday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Wednesday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Thursday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Friday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Saturday:</span>
                  <span>8:00am - 6:00pm</span>
                </div>
              </div>
            </div>
          </HoursOfOperationDiv>

        </FormContainer>

      </Container>
    </div>
  )
}

export default ContactForm;