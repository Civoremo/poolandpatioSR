import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const InputField = styled.input`
	width: 100%;
	padding: 5px 5px;
`;

const URL = "https://ppsr-api.herokuapp.com";
// const URL = "http://localhost:4000";

const ProfilePage = props => {
	const { lgProfile, setProfile, loggedIn } = props;

	const [enableEdit, setenableEdit] = useState(true);
	const [updateMessage, setUpdateMessage] = useState("");
	const [updateError, setUpdateError] = useState("");

	const {
		handleInputChange,
		clearInputs,
		senderEmail,
		senderFirstName,
		senderLastName,
		// credentials,
		// confirmCredentials,
		// senderPhone,
		// senderStreet,
		// senderCity,
		// senderState,
		// senderZipcode,
		// senderGateCode,
		setProfileInfo,
		// validateUpdateInfo,
		profileErrors,
		setProfileErrorMessage,
	} = props;

	const logoutHandler = event => {
		console.log(loggedIn);
		// loggedIn(false);
		setProfile(false);
		localStorage.clear();
	};

	const editHandler = event => {
		setenableEdit(!enableEdit);
		let userData = {
			firstName: JSON.parse(localStorage.getItem("ppsr_user")),
			lastName: JSON.parse(localStorage.getItem("lName")),
			email: JSON.parse(localStorage.getItem("email")),
		};

		setProfileInfo(userData);
	};

	const validateProfileInfo = event => {
		let errors = {};
		let formIsValid = true;

		setUpdateMessage("");
		setUpdateError("");

		if (!senderEmail || senderEmail.length < 2) {
			errors.email = "Not a valid email!";
			formIsValid = false;
		}

		if (!senderFirstName || senderFirstName.length < 2) {
			errors.fName = "Not enough characters!";
			formIsValid = false;
		}

		if (!senderLastName || senderLastName.length < 2) {
			errors.lName = "Not enough characters!";
			formIsValid = false;
		}

		let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (!pattern.test(senderEmail)) {
			errors.email = "Not a valid email.";
			// errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		setProfileErrorMessage(errors);
		// validateUpdateInfo();
		return formIsValid;
	};

	const updateProfileInfo = event => {
		// event.preventDefault();
		if (!validateProfileInfo()) {
			return;
		}

		// validateUpdateInfo();

		axios({
			method: "put",
			url: `${URL}/users/update`,
			headers: { authorization: JSON.parse(localStorage.getItem("ppsr")) },
			data: {
				firstName: senderFirstName,
				lastName: senderLastName,
				email: senderEmail,
			},
			responseType: "json",
		})
			.then(response => {
				localStorage.setItem("ppsr_user", JSON.stringify(senderFirstName));
				localStorage.setItem("lName", JSON.stringify(senderLastName));
				localStorage.setItem("email", JSON.stringify(senderEmail));
				clearInputs();
				setUpdateMessage(JSON.stringify(response.data.message));
				editHandler();
			})
			.catch(err => {
				console.log(JSON.stringify("Update failed: " + err));
				setUpdateError("Update failed.");
			});
	};

	return (
		<div>
			<Modal size="lg" show={lgProfile} onHide={() => setProfile(false)}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							height: "30px",
							fontSize: "1.1rem",
						}}
					>
						<a href="#profile-edit" style={{ marginRight: "25px" }} onClick={() => editHandler()}>
							<span style={{ display: enableEdit ? "none" : "block" }}>cancel</span>
							<span style={{ display: enableEdit ? "block" : "none" }}>edit</span>
						</a>
						<a href="#logout" onClick={() => logoutHandler()}>
							<span>logout</span>
						</a>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "20px 0",
						}}
					>
						<div style={{ fontSize: "1.2rem", marginBottom: "30px", color: "red" }}>
							{updateError}
						</div>

						<InputField
							type="text"
							name="senderFirstName"
							placeholder={JSON.parse(localStorage.getItem("ppsr_user"))}
							required="required"
							onChange={handleInputChange}
							value={senderFirstName}
							disabled={enableEdit}
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
							{profileErrors.fName}
						</div>
						<InputField
							type="text"
							name="senderLastName"
							placeholder={JSON.parse(localStorage.getItem("lName"))}
							required="required"
							onChange={handleInputChange}
							value={senderLastName}
							disabled={enableEdit}
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
							{profileErrors.lName}
						</div>

						<InputField
							type="text"
							name="senderEmail"
							placeholder={JSON.parse(localStorage.getItem("email"))}
							required="required"
							onChange={handleInputChange}
							value={senderEmail}
							disabled={enableEdit}
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
							{profileErrors.email}
						</div>

						{/* <InputField
            type="text"
            name='senderPhone'
            placeholder='Phone #'
            required='required'
            onChange={handleInputChange}
            value={senderPhone}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderStreet'
            placeholder='Street'
            required='required'
            onChange={handleInputChange}
            value={senderStreet}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderCity'
            placeholder='City'
            required='required'
            onChange={handleInputChange}
            value={senderCity}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderState'
            placeholder='State'
            required='required'
            onChange={handleInputChange}
            value={senderState}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderZipcode'
            placeholder='Zip Code'
            required='required'
            onChange={handleInputChange}
            value={senderZipcode}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='senderGateCode'
            placeholder='Gate Code'
            onChange={handleInputChange}
            value={senderGateCode}
            working={enableEdit}
          >
          </InputField>
          <InputField
            type='text'
            name='credentials'
            placeholder='Password'
            required="required"
            onChange={handleInputChange}
            value={credentials}
            working={enableEdit}
          >              
          </InputField>
          <InputField
            type='text'
            name='confirmCredentials'
            placeholder='Confirm Password'
            required="required"
            onChange={handleInputChange}
            value={confirmCredentials}
            working={enableEdit}
          >              
          </InputField> */}
						<Button
							type="button"
							disabled={enableEdit}
							style={{
								marginTop: "20px",
								marginBottom: "5px",
								width: "200px",
								height: "50px",
							}}
							onClick={() => updateProfileInfo()}
						>
							Save
						</Button>
						<div
							style={{
								// width: "100%",
								// display: "flex",
								// justifyContent: "center",
								// alignItems: "center",
								color: "green",
								height: "20px",
								fontSize: ".8rem",
								margin: "5px 0",
								// border: "1px solid red",
							}}
						>
							{updateMessage}
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ProfilePage;
