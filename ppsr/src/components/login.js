import React from 'react';
import styled from 'styled-components';

const InputField = styled.input `
    width: 100%;
    padding: 5px 5px;
`

const Login = props => {

    const { 
        handleInputChange, 
      //   handleCheckboxChange,
      //   setErrorMessages, 
      //   clearInputs, 
      //   toggleMissingInfoMessage, 
        senderEmail, 
        senderFirstName, 
        senderLastName,
        senderConfirmEmail,
        credentials,
        confirmCredentials,
        confirmationKey,
      //   senderPhone,
      //   senderStreet,
      //   senderCity,
      //   senderState,
      //   senderZipcode,
      //   senderGateCode,
      //   senderServices,
      //   senderMessage, 
      //   senderError, 
      //   insufficientInfo,
      //   verified,
      //   onVerify
    } = props;

    return (
        <div>
            <InputField
                type='text'
                name='senderEmail'
                placeholder='Email'
                required="required"
                onChange={handleInputChange}
                value={senderEmail}
            >              
            </InputField>
            <InputField
                type='text'
                name='credentials'
                placeholder='Password'
                required="required"
                onChange={handleInputChange}
                value={credentials}
            >   
            </InputField>
            <InputField
                type='text'
                name='confirmationKey'
                placeholder='Confirmation Key'
                // required="required"
                onChange={handleInputChange}
                value={confirmationKey}
            >              
            </InputField>
        </div>
    )
}

export default Login;