import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContactForm = props => {
  const { handleInputChange, setErrorMessages, clearInputs, senderEmail, senderName, senderMessage, senderError } = props;

  function validateEmail () {
    let errors = {};
    let formIsValid = true;

    if (!senderName || senderName.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    if (!senderEmail || senderEmail.length < 3) {
      errors.email = 'Email required!';
      formIsValid = false;
    }

    if (!senderMessage || senderMessage.length < 10) {
      errors.message = 'Minimum of 10 symbols';
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(senderEmail)) {
      errors.email = 'This is not a valid email!';
      formIsValid = false;
    }

    setErrorMessages( errors);

    return formIsValid;
  }

  function sendMessage (event) {
    event.preventDefault();

    if (!this.validateEmail()) {
      alert(senderError)
      return
    }

    let templateParams = {
      from_name: senderName + ' ( ' + senderEmail + ' ) ',
      to_name: 'PPSR',
      subject: 'PPSR Contact Form',
      message_html: senderMessage
    }

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATE, templateParams, process.env.REACT_APP_EMAILJS_USER)
      .then(response => {
        alert("Message send successfully.")
        clearInputs();
      })
      .catch(error => {
        alert("Message failed, try again.")
      })
  }

  return (
    <div>
      contact form
    </div>
  )
}

export default ContactForm;