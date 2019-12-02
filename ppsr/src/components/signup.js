import React from "react";
// import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const InputField = styled.input`
	width: 100%;
	padding: 5px 5px;
	margin: 5px 0;
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
			<InputField
				type="text"
				name="senderLastName"
				placeholder="Last Name"
				required="required"
				onChange={handleInputChange}
				value={senderLastName}
			></InputField>
			<InputField
				type="text"
				name="senderEmail"
				placeholder="Email"
				required="required"
				onChange={handleInputChange}
				value={senderEmail}
			></InputField>
			<InputField
				type="text"
				name="senderConfirmEmail"
				placeholder="Confirm Email"
				required="required"
				onChange={handleInputChange}
				value={senderConfirmEmail}
			></InputField>
			<InputField
				type="text"
				name="credentials"
				placeholder="Password"
				required="required"
				onChange={handleInputChange}
				value={credentials}
			></InputField>
			<InputField
				type="text"
				name="confirmCredentials"
				placeholder="Confirm Password"
				required="required"
				onChange={handleInputChange}
				value={confirmCredentials}
			></InputField>
		</div>
	);
};

export default SignUp;
