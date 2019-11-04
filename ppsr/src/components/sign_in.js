import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

import SignUp from './signup';
import Login from './login';

const SignUpInputForm = styled.form `
    // display: flex;
    // justify-items: space-between;
    // align-items: center;
`

const InputField = styled.input `
    width: 100%;
    padding: 5px 5px;
`

const SignupLoginDiv = styled.div `
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
    width: 200px;
`


const SelectionMenuDiv = styled.div `
    border: 2px solid red;
    display: ${props => props.items ? 'flex' : 'none'};
`

const SignIn = props => {
    const { lgSignIn, setSignIn } = props;
    

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
    //   onVerify,
    isSelected
    } = props;
    
    return (
        <div>
            {console.log('selected: ', isSelected)}
            <Modal size='lg' show={lgSignIn} onHide={() => setSignIn(false)} centered >
                
                <Modal.Body>
                    <SignUpInputForm method='post' action='submit'>

                    {/* <SignUp 
                        handleInputChange={handleInputChange}
                        senderEmail={senderEmail}
                        senderFirstName={senderFirstName}
                        senderLastName={senderLastName}
                        senderConfirmEmail={senderConfirmEmail}
                        credentials={credentials}
                        confirmCredentials={confirmCredentials}
                    />
                
                    <Login 
                        handleInputChange={handleInputChange}
                        senderEmail={senderEmail}
                        confirmationKey={confirmationKey}
                    /> */}
                    <SelectionMenuDiv items={isSelected}>
                        <p>this is something that will not show</p>
                    </SelectionMenuDiv>
                    <SignUp 
                        handleInputChange={handleInputChange}
                        senderEmail={senderEmail}
                        senderFirstName={senderFirstName}
                        senderLastName={senderLastName}
                        senderConfirmEmail={senderConfirmEmail}
                        credentials={credentials}
                        confirmCredentials={confirmCredentials}
                    />
                    <Login 
                        handleInputChange={handleInputChange}
                        senderEmail={senderEmail}
                        confirmationKey={confirmationKey}
                    />

                    <Button
                        type='button'
                        name='submit'
                    >
                        Send
                    </Button>

                    </SignUpInputForm>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SignIn;