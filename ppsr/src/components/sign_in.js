import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

import SignUp from "./signup";
import Login from "./login";

const SignUpInputForm = styled.form`
	/* display: flex;
	justify-items: space-between;
	align-items: center; */
`;

const SignUpDiv = styled.div`
	position: relative;
	z-index: ${props => (props.showing ? "10" : "1")};
	display: ${props => (props.showing ? "flex" : "none")};
	width: 100%;
`;

const LoginDiv = styled.div`
	position: relative;
	z-index: ${props => (!props.showing ? "10" : "1")};
	display: ${props => (!props.showing ? "flex" : "none")};
`;

const LinkDivContainer = styled.div`
	display: flex;
	padding-left: 30px;
	justify-content: center;
`;

const LinkSignUpDiv = styled.div`
	height: ${props => (props.showing ? "43px" : "40px")};
	background-color: ${props => (props.showing ? "#fff" : "silver")};
	border-left: ${props => (props.showing ? "2px" : "1px")} solid grey;
	border-top: 1px solid grey;
	border-right: 1px solid grey;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	margin-right: 15px;
	min-width: 100px;
	display: flex;
	justify-content: center;
	padding-top: 10px;
	z-index: ${props => (props.showing ? "20" : "1")};
	border-bottom: ${props => (props.showing ? "0" : "2px")} solid grey;
	margin-top: ${props => (props.showing ? "0" : "3px")};
`;

const LinkLoginDiv = styled.div`
	height: ${props => (props.showing ? "43px" : "40px")};
	background-color: ${props => (props.showing ? "#fff" : "silver")};
	border-left: ${props => (props.showing ? "2px" : "1px")} solid grey;
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
	z-index: ${props => (props.showing ? "20" : "1")};
	border-bottom: ${props => (props.showing ? "0" : "2px")} solid grey;
	margin-top: ${props => (props.showing ? "0" : "3px")};
`;

const LinkStyle = styled.span`
	color: ${props => (props.showing ? "blue" : "grey")};
`;

const SignInContainer = styled.div`
	border-top: 1px solid silver;
	background-color: #fff;
	min-height: 280px;
	display: flex;
	align-items: center;
	position: relative;
	padding: 0 30px;
	z-index: 10;
	top: -1px;
`;

const SignIn = props => {
	const { lgSignIn, setSignIn } = props;
	const [signinDataRequesting, setSigninDataRequesting] = useState(false);

	const URL = "https://ppsr-api.herokuapp.com";

	const {
		handleInputChange,
		toggleSignInLinks,
		//   handleCheckboxChange,
		//   setErrorMessages,
		clearSigninInputs,
		clearInputs,
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
		loggedIn,
		signupErrors,
		setSignupErrorMessages,
	} = props;

	const validateSignupInfo = () => {
		let errors = {};
		let formIsValid = true;

		if (!senderFirstName || senderFirstName.length < 2) {
			errors.fName = "Required!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (!senderLastName || senderLastName.length < 2) {
			errors.lName = "Required!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (!senderEmail || senderEmail.length < 3) {
			errors.email = "Not a valid email!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (!senderConfirmEmail || senderConfirmEmail < 3) {
			errors.confirmEmail = "Not a valid email!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (senderEmail !== senderConfirmEmail) {
			errors.confirmEmail = "Does not match email!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (!credentials || credentials.length < 8) {
			errors.credentials = "Must be at least 8 characters!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (!confirmCredentials || confirmCredentials.length < 8) {
			errors.confirmCredentials = "Must be at least 8 characters!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		if (credentials !== confirmCredentials) {
			errors.confirmCredentials = "Does not match password!";
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (!pattern.test(senderEmail)) {
			errors.email = "Not a valid email!";
			let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
			errors.incomplete = "Incomplete, check input fields and try again!";
			formIsValid = false;
		}

		setSignupErrorMessages(errors);
	};

	const SignupLoginRequest = event => {
		// event.preventDefault();
		// console.log(senderFirstName + " " + senderLastName + " " + senderEmail + " " + credentials)

		if (!validateSignupInfo()) {
			return;
		}

		setSigninDataRequesting(true);

		if (isSelected) {
			axios({
				method: "post",
				// mode: "no-cors",
				url: `${URL}/users/register`,
				headers: {},
				data: {
					firstName: `${senderFirstName}`,
					lastName: `${senderLastName}`,
					email: `${senderEmail}`,
					// senderConfirmEmail: senderConfirmEmail,
					password: `${credentials}`,
					// confirmCredentials: confirmCredentials
				},
				responseType: "json",
			})
				.then(response => {
					console.log("isSelected: " + isSelected);
					// console.log('register response: ' + response.data);
					console.log("register response: " + JSON.stringify(response.data));
					setSigninDataRequesting(false);
					// clearSigninInputs();
					clearInputs();
					toggleSignInLinks();
				})
				.catch(err => {
					console.log("isSelected: " + isSelected);
					// console.log('register error: ' + JSON.stringify(err));
					console.log("register error: " + JSON.stringify(err.response.data));
					setSigninDataRequesting(false);
				});
		} else {
			console.log("confirmation: " + confirmationKey);
			if (confirmationKey.length === 0) {
				axios({
					method: "post",
					// mode: "no-cors",
					url: `${URL}/users/login`,
					data: {
						email: senderEmail,
						password: credentials,
						// confirmationKey: confirmationKey
					},
					responseType: "json",
				})
					.then(response => {
						console.log("isSelected: " + isSelected);
						console.log("login response: " + JSON.stringify(response.data));
						localStorage.setItem("ppsr", JSON.stringify(response.data.token));
						localStorage.setItem("ppsr_user", JSON.stringify(response.data.user.firstName));
						setSigninDataRequesting(false);
						setSignIn(false);
						loggedIn(true);
						// clearSigninInputs();
						clearInputs();
					})
					.catch(err => {
						console.log("isSelected: " + isSelected);
						console.log("login error: " + JSON.stringify(err.response));
						setSigninDataRequesting(false);
					});
			} else {
				axios({
					method: "put",
					// mode: "no-cors",
					url: `${URL}/users/confirmUser`,
					data: {
						email: senderEmail,
						password: credentials,
						activationKey: parseInt(confirmationKey),
					},
				})
					.then(response => {
						console.log("isSelected: " + isSelected);
						console.log("confirm response: " + JSON.stringify(response.data));
						axios({
							method: "post",
							url: `${URL}/users/login`,
							data: {
								email: senderEmail,
								password: credentials,
								// confirmationKey: confirmationKey
							},
							responseType: "json",
						})
							.then(response => {
								console.log("isSelected: " + isSelected);
								console.log("login response: " + JSON.stringify(response.data));
								localStorage.setItem("ppsr", JSON.stringify(response.data.token));
								localStorage.setItem("ppsr_user", JSON.stringify(response.data.user.firstName));
								setSigninDataRequesting(false);
								setSignIn(false);
								loggedIn(true);
								// clearSigninInputs();
								clearInputs();
							})
							.catch(err => {
								console.log("isSelected: " + isSelected);
								console.log("login error: " + JSON.stringify(err.response.data));
								setSigninDataRequesting(false);
							});
					})
					.catch(err => {
						console.log("isSelected: " + isSelected);
						console.log("confirm error: " + JSON.stringify(err.response.data));
						setSigninDataRequesting(false);
					});
			}
		}
	};

	return (
		<div>
			{/* {console.log('selected: ', isSelected)}
            {console.log('lgSignIn: ' + lgSignIn)}
            {console.log('setSignIn: ' + setSignIn)}
            {console.log('loggedIn: ' + loggedIn)} */}
			<Modal size="lg" show={lgSignIn} onHide={() => setSignIn(false)} centered>
				<Modal.Header closeButton></Modal.Header>

				<Modal.Body>
					<SignUpInputForm method="post" action="submit">
						<LinkDivContainer>
							<LinkSignUpDiv showing={isSelected}>
								<a href="#show" onClick={() => (!isSelected ? toggleSignInLinks() : "")}>
									<LinkStyle showing={isSelected}>Sign Up</LinkStyle>
								</a>
							</LinkSignUpDiv>
							<LinkLoginDiv showing={!isSelected}>
								<a href="#hide" onClick={() => (isSelected ? toggleSignInLinks() : "")}>
									<LinkStyle showing={!isSelected}>Log in</LinkStyle>
								</a>
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
									signupErrors={signupErrors}
								/>
							</SignUpDiv>
							<LoginDiv showing={isSelected}>
								<Login
									handleInputChange={handleInputChange}
									senderEmail={senderEmail}
									credentials={credentials}
									confirmationKey={confirmationKey}
									signupErrors={signupErrors}
								/>
							</LoginDiv>
						</SignInContainer>

						<div style={{ textAlign: "center" }}>
							<div style={{ display: signinDataRequesting ? "none" : "block" }}>
								<Button
									type="button"
									// name='submit'
									onClick={() => SignupLoginRequest()}
									style={{
										// marginTop: "10px",
										marginBottom: "5px",
										width: "200px",
										height: "50px",
									}}
								>
									<span style={{ display: isSelected ? "block" : "none" }}>Register</span>
									<span style={{ display: isSelected ? "none" : "block" }}>Login</span>
								</Button>
							</div>
							<div style={{ display: signinDataRequesting ? "block" : "none" }}>
								<Button
									disabled
									style={{
										marginTop: "20px",
										marginBottom: "5px",
										width: "200px",
										height: "50px",
									}}
								>
									<Spinner as="span" animation="border" role="status" />
									<span className="sr-only">Loading...</span>
								</Button>
							</div>
							<div
								style={{ color: "red", height: "20px", fontSize: ".8rem", marginBottom: "25px" }}
							>
								{signupErrors.incomplete}
							</div>
						</div>
					</SignUpInputForm>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default SignIn;
