import React from "react";
import styled from "styled-components";

const InputField = styled.input`
	width: 100%;
	padding: 5px 5px;
`;

const Login = props => {
	const {
		handleInputChange,
		//   handleCheckboxChange,
		//   setErrorMessages,
		//   clearInputs,
		//   toggleMissingInfoMessage,
		senderEmail,
		// senderFirstName,
		// senderLastName,
		// senderConfirmEmail,
		credentials,
		// confirmCredentials,
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
		loginErrors,
		confirmedUser,
		registrationConfirmedMessage,
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
				// border: "1px solid red",
				// minHeight: "450px",
			}}
		>
			<div style={{ fontSize: "1.4rem", marginBottom: "30px" }}>{registrationConfirmedMessage}</div>
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
				{loginErrors.email}
			</div>
			<InputField
				type="password"
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
				{loginErrors.credentials}
			</div>
			<div style={{ display: confirmedUser ? "block" : "none" }}>
				<InputField
					type="text"
					name="confirmationKey"
					placeholder="Confirmation Key"
					// required="required"
					onChange={handleInputChange}
					value={confirmationKey}
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
					{loginErrors.confirmationKey}
				</div>
			</div>
		</div>
	);
};

export default Login;
