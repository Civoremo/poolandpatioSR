import React from 'react';
import axios from 'axios';
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

    const URL = 'https://ppsr-api.herokuapp.com';

    const { 
      handleInputChange, 
      toggleSignInLinks,
    //   handleCheckboxChange,
    //   setErrorMessages, 
    clearSigninInputs,
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
    isSelected,
    loggedIn
    } = props;


    const SignupLoginRequest = event => {
        // event.preventDefault();
        // console.log(senderFirstName + " " + senderLastName + " " + senderEmail + " " + credentials)
        if (isSelected) {
            axios({
                method: "post",
                url: `${URL}/users/register`,
                headers: {
                    
                },
                data: {
                    firstName: `${senderFirstName}`,
                    lastName: `${senderLastName}`,
                    email: `${senderEmail}`,
                    // senderConfirmEmail: senderConfirmEmail,
                    password: `${credentials}`
                    // confirmCredentials: confirmCredentials
                },
                responseType: 'json'
            })
            .then(response => {
                console.log('isSelected: ' + isSelected);
                // console.log('register response: ' + response.data);
                console.log('register response: ' + JSON.stringify(response.data));
                clearSigninInputs();
                toggleSignInLinks();
            })
            .catch(err => {
                console.log('isSelected: ' + isSelected);
                // console.log('register error: ' + JSON.stringify(err));
                console.log('register error: ' + JSON.stringify(err.response.data));
            })
        } else {
            console.log('confirmation: ' + confirmationKey)
            if(confirmationKey.length === 0) {
                axios({
                    method: 'post',
                    url: `${URL}/users/login`,
                    data: {
                        email: senderEmail,
                        password: credentials,
                        // confirmationKey: confirmationKey
                    },
                    responseType: 'json'
                })
                .then(response => {
                    console.log('isSelected: ' + isSelected);
                    console.log('login response: ' + JSON.stringify(response.data));
                    localStorage.setItem('ppsr', JSON.stringify(response.data.token))
                    localStorage.setItem('ppsr_user', JSON.stringify(response.data.user.firstName))
                    setSignIn(false);
                    loggedIn(true);
                    clearSigninInputs();
                })
                .catch(err => {
                    console.log('isSelected: ' + isSelected);
                    console.log('login error: ' + JSON.stringify(err.response));
                })
            } else {
                axios({
                    method: 'put',
                    url: `${URL}/users/confirmUser`,
                    data: {
                        email: senderEmail,
                        password: credentials,
                        activationKey: parseInt(confirmationKey)
                    }
                })
                .then(response => {
                    console.log('isSelected: ' + isSelected);
                    console.log('confirm response: ' + JSON.stringify(response.data))
                    axios({
                        method: 'post',
                        url: `${URL}/users/login`,
                        data: {
                            email: senderEmail,
                            password: credentials,
                            // confirmationKey: confirmationKey
                        },
                        responseType: 'json'
                    })
                    .then(response => {
                        console.log('isSelected: ' + isSelected);
                        console.log('login response: ' + JSON.stringify(response.data));
                        localStorage.setItem('ppsr', JSON.stringify(response.data.token))
                        localStorage.setItem('ppsr_user', JSON.stringify(response.data.user.firstName))
                        setSignIn(false);
                        loggedIn(true);
                        clearSigninInputs();
                    })
                    .catch(err => {
                        console.log('isSelected: ' + isSelected);
                        console.log('login error: ' + JSON.stringify(err.response.data));
                    })
                })
                .catch(err => {
                    console.log('isSelected: ' + isSelected);
                    console.log('confirm error: ' + JSON.stringify(err.response.data))
                })
            }
        }
    }
    
    return (
        <div>
            {/* {console.log('selected: ', isSelected)}
            {console.log('lgSignIn: ' + lgSignIn)}
            {console.log('setSignIn: ' + setSignIn)}
            {console.log('loggedIn: ' + loggedIn)} */}
            <Modal size='lg' show={lgSignIn} onHide={() => setSignIn(false)} centered >
                <Modal.Header closeButton>

                </Modal.Header>
                
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
                                credentials={credentials}
                                confirmationKey={confirmationKey}
                            />
                        </LoginDiv>
                    </SignInContainer>


                    <Button
                        type='button'
                        // name='submit'
                        onClick={() => SignupLoginRequest()}
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