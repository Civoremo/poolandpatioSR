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

const ContactForm = props => {
  const { handleInputChange, setErrorMessages, clearInputs, toggleMissingInfoMessage, senderEmail, senderName, senderMessage, senderError, insufficientInfo } = props;

  const validateEmail = () => {
    let errors = {};
    let formIsValid = true;

    if (!senderName || senderName.length < 3) {
      errors.name = 'Minimum length of 3 characters.';
      formIsValid = false;
    }

    if (!senderEmail || senderEmail.length < 3) {
      errors.email = 'Email required!';
      formIsValid = false;
    }

    if (!senderMessage || senderMessage.length < 10) {
      errors.message = 'Minimum length of 10 characters.';
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
      from_name: senderName + ' ( ' + senderEmail + ' ) ',
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

        <FormContainer>
          <FormInputContainer method='post' action='submmit'>
            <NameEmailInputContainer>
              <NameInputDiv>
                <NameInput
                  type='text'
                  name='senderName'
                  placeholder='Name'
                  required='required'
                  onChange={handleInputChange}
                  value={senderName}
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