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
  margin-bottom: 20px;
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

`

const InputDiv = styled.div `

`

const CheckboxDiv = styled.div `

`

const ContactForm = props => {
  const { 
    handleInputChange, 
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
      errors.name = 'Not enough info.';
      formIsValid = false;
    }

    if (!senderEmail || senderEmail.length < 3) {
      errors.email = 'Email required!';
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
            </InputDiv>

            <InputDiv>
              <InputField
                type="text"
                name='senderPhone'
                placeholder='Phone #'
                required='required'
                onChange={handleInputChange}
                value={senderPhone}
              >
              </InputField>
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
            </InputDiv>

            <InputDiv>
              <InputField
                type='text'
                name='senderGateCode'
                placeholder='Gate Code'
                onChange={handleInputChange}
                value={senderGateCode}
              >
              </InputField>
            </InputDiv>

            <CheckboxDiv>
              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_Complete'
                  value={senderServices.complete}
                >
                </InputField>
                <label>Complete Re-Screen</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_Individual'
                  value={senderServices.individual}
                >
                </InputField>
                <label>Individual Panels</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_Window'
                  value={senderServices.window}
                >
                </InputField>
                <label>Window Screens</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_NewLanai'
                  value={senderServices.newLanai}
                >
                </InputField>
                <label>New Screen Lanai Insert</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_NewEntry'
                  value={senderServices.newEntry}
                >
                </InputField>
                <label>Front Entry Way Insert</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_PressureWashing'
                  value={senderServices.pressureWashing}
                >
                </InputField>
                <label>Pressure Washing</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_GutterCleaning'
                  value={senderServices.gutterCleaning}
                >
                </InputField>
                <label>Gutter Cleaning</label>
              </div>

              <div>
                <InputField
                  type='checkbox'
                  name='senderServices_MiscRepairs'
                  value={senderServices.miscRepair}
                >
                </InputField>
                <label>Misc. Repairs</label>
              </div>
            </CheckboxDiv>

            <MessageInputContainer>
              <textarea
                type='text'
                name='senderMessage'
                placeholder='Please provide us with details about the project...'
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