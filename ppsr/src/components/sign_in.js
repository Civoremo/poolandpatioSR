import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import SignUp from './signup';
import Login from './login';

const SignUpInputForm = styled.form `
    // display: flex;
    // justify-items: space-between;
    // align-items: center;
`

const SignUpDiv = styled.div `
    position: relative;
    z-index: ${props => props.showing ? '10' : '1'};
    display: ${props => props.showing ? 'flex' : 'none'};
`

const LoginDiv = styled.div `
    position: relative;
    z-index: ${props => !props.showing ? '10' : '1'};
    display: ${props => !props.showing ? 'flex' : 'none'};
`

const LinkDivContainer = styled.div `
    display: flex;
    padding-left: 30px;
    justify-content: center;
`

const LinkSignUpDiv = styled.div `
    height: ${props => props.showing ? '43px' : '40px'};
    background-color: ${props => props.showing ? '#fff' : 'silver'};
    border-left: ${props => props.showing ? '2px' : '1px'} solid grey;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-right: 15px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    z-index: ${props => props.showing ? '20' : '1'};
    border-bottom: ${props => props.showing ? '0' : '2px'} solid grey;
    margin-top: ${props => props.showing ? '0' : '3px'};
`

const LinkLoginDiv = styled.div `
    height:  ${props => props.showing ? '43px' : '40px'};
    background-color: ${props => props.showing ? '#fff' : 'silver'};
    border-left: ${props => props.showing ? '2px' : '1px'} solid grey;
    // border-left: 2px solid grey;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-right: 15px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    z-index: ${props => props.showing ? '20' : '1'};
    border-bottom: ${props => props.showing ? '0' : '2px'} solid grey;
    margin-top: ${props => props.showing ? '0' : '3px'};
`

const LinkStyle = styled.span `
    color: ${props => props.showing ? 'blue' : 'grey'};
`

const SignInContainer = styled.div `
    border-top: 1px solid silver;
    background-color: #fff;
    min-height: 280px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 30px;
    z-index: 10;
    top: -1px;
`

const SignIn = props => {
    const { lgSignIn, setSignIn } = props;
    

    const { 
      handleInputChange, 
      toggleSignInLinks,
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

                    <LinkDivContainer>
                        <LinkSignUpDiv showing={isSelected}>
                            <a href='#show' onClick={() => !isSelected ? toggleSignInLinks() : ''}><LinkStyle showing={isSelected}>Sign Up</LinkStyle></a>
                        </LinkSignUpDiv>
                        <LinkLoginDiv showing={!isSelected}>
                            <a href='#hide' onClick={() => isSelected ? toggleSignInLinks() : ''}><LinkStyle showing={!isSelected}>Log in</LinkStyle></a>
                        </LinkLoginDiv>
                    </LinkDivContainer>

                    <SignInContainer showing={isSelected}>
                        <SignUpDiv showing={isSelected}>
                            <SignUp 
                                handleInputChange={handleInputChange}
                                senderEmail={senderEmail}
                                senderFirstName={senderFirstName}
                                senderLastName={senderLastName}
                                senderConfirmEmail={senderConfirmEmail}
                                credentials={credentials}
                                confirmCredentials={confirmCredentials}
                            />
                        </SignUpDiv>
                        <LoginDiv showing={isSelected}>
                            <Login 
                                handleInputChange={handleInputChange}
                                senderEmail={senderEmail}
                                confirmationKey={confirmationKey}
                            />
                        </LoginDiv>
                    </SignInContainer>


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