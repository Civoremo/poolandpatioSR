import React from "react";
// import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const InputField = styled.input`
	width: 100%;
	padding: 5px 5px;
	/* margin: 5px 0; */
`;

const SignUp = props => {
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
		// confirmationKey,
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
		signupErrors,
	} = props;

	return (
		<div
			style={{
				padding: "20px 10px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				// minHeight: "450px",
			}}
		>
			<InputField
				type="text"
				name="senderFirstName"
				placeholder="First Name"
				required="required"
				onChange={handleInputChange}
				value={senderFirstName}
			></InputField>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					color: "red",
					height: "20px",
					fontSize: ".8rem",
					margin: "5px 0",
				}}
			>
				{signupErrors.fName}
			</div>
			<InputField
				type="text"
				name="senderLastName"
				placeholder="Last Name"
				required="required"
				onChange={handleInputChange}
				value={senderLastName}
			></InputField>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					color: "red",
					height: "20px",
					fontSize: ".8rem",
					margin: "5px 0",
				}}
			>
				{signupErrors.lName}
			</div>
			<InputField
				type="text"
				name="senderEmail"
				placeholder="Email"
				required="required"
				onChange={handleInputChange}
				value={senderEmail}
			></InputField>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					color: "red",
					height: "20px",
					fontSize: ".8rem",
					margin: "5px 0",
				}}
			>
				{signupErrors.email}
			</div>
			<InputField
				type="text"
				name="senderConfirmEmail"
				placeholder="Confirm Email"
				required="required"
				onChange={handleInputChange}
				value={senderConfirmEmail}
			></InputField>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					color: "red",
					height: "20px",
					fontSize: ".8rem",
					margin: "5px 0",
				}}
			>
				{signupErrors.confirmEmail}
			</div>
			<InputField
				type="text"
				name="credentials"
				placeholder="Password"
				required="required"
				onChange={handleInputChange}
				value={credentials}
			></InputField>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					color: "red",
					height: "20px",
					fontSize: ".8rem",
					margin: "5px 0",
				}}
			>
				{signupErrors.credentials}
			</div>
			<InputField
				type="text"
				name="confirmCredentials"
				placeholder="Confirm Password"
				required="required"
				onChange={handleInputChange}
				value={confirmCredentials}
			></InputField>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					color: "red",
					height: "20px",
					fontSize: ".8rem",
					margin: "5px 0",
				}}
			>
				{signupErrors.confirmCredentials}
			</div>
		</div>
	);
};

export default SignUp;
