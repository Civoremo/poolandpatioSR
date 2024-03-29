import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import Reaptcha from 'reaptcha';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const FormContainer = styled.div`
	display: flex;
	/* justify-content: center; */
	flex-direction: 'row';
	width: 100%;
	/* min-width: 450px; */

	@media (max-width: 767px) {
		display: flex;
		flex-direction: column;
	}
`;

const MessageInputContainer = styled.div`
	/* margin-bottom: 20px; */
	padding: 10px 20px;
`;

const FormSubmitButtonContainer = styled.div`
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	align-items: center;
	width: 100%;
	/* margin-bottom: 10px; */
`;

const DisplayErrorDiv = styled.div`
	display: block;
	height: 20px;
	font-size: .8rem;
`;

const HideErrorDiv = styled.div`
	display: none;
	height: 20px;
`;

const ShowButtonSubmit = styled.div`display: block;`;

const LoadingButton = styled.div`display: block;`;

const HoursOfOperationDiv = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: column;

	@media (max-width: 767px) {
		/* flex-direction: row; */
		justify-content: center;
		margin-top: 30px;
	}
`;

const FormInputContainer = styled.form`
	width: 100%;
	border: 2px solid #1759aa;
	border-radius: 5px;
	padding: 40px 20px 10px 20px;

	@media (min-width: 1200px) {
		width: 800px;
	}
`;

const LineSeperatorDiv = styled.div`
	width: 25px;
	/* border-right: 1px solid #A9A9A9; */
	margin-right: 25px;
`;

const InputField = styled.input`
	width: 100%;
	padding: 5px 5px;
`;

const InputDiv = styled.div`
	min-width: 300px;

	@media (max-width: 1199px) {
		/* min-width: 250px; */
		min-width: 100%;
	}

	@media (max-width: 991px) {
		min-width: 100%;
	}
`;

const InputFieldContainer = styled.div`
	padding: 10px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const CheckboxContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px 20px;
	/* border: 1px solid red; */
`;

const CheckboxDiv = styled.div`
	width: 200px;
	margin-bottom: 5px;
	/* border: 1px solid green; */
`;

const CheckboxInput = styled.input`margin-right: 5px;`;

const ContactForm = (props) => {
	const [ dataRequesting, setDataRequesting ] = useState(false);
	const [ sendMessageResponse, setSendMessageResponse ] = useState('');
	const {
		handleInputChange,
		handleCheckboxChange,
		setErrorMessages,
		clearInputs,
		toggleMissingInfoMessage,
		senderEmail,
		senderFirstName,
		senderLastName,
		senderPhone,
		senderStreet,
		senderCity,
		senderState,
		senderZipcode,
		senderGateCode,
		senderServices,
		senderMessage,
		senderError,
		insufficientInfo,
		verified,
		onVerify,
		prefContact
	} = props;

	const validateEmail = () => {
		let errors = {};
		let formIsValid = true;

		if (!senderFirstName || senderFirstName.length < 2) {
			errors.fName = 'Required!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderLastName || senderLastName.length < 2) {
			errors.lName = 'Required!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderEmail || senderEmail.length < 3) {
			errors.email = 'Not a valid email!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderStreet) {
			errors.street = 'Required!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderCity) {
			errors.city = 'Required!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderState) {
			errors.state = 'Required!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderZipcode) {
			errors.zipcode = 'Required!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (!senderPhone || senderPhone.length < 10) {
			errors.phone = 'Not a valid phone!';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		if (prefContact.phone === false && prefContact.email === false) {
			errors.preferredContact = 'Missing contact method/s.';
			formIsValid = false;
		}

		if (!senderMessage || senderMessage.length < 10) {
			errors.message = 'Not enough info.';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (!pattern.test(senderEmail)) {
			errors.email = 'Not a valid email.';
			errors.incomplete = 'Incomplete, check input fields and try again!';
			formIsValid = false;
		}

		setErrorMessages(errors);
		toggleMissingInfoMessage();

		return formIsValid;
	};

	const sendMessage = (event) => {
		event.preventDefault();

		if (!validateEmail()) {
			// alert(senderError.name + senderError.email + senderError.message)
			// get_action()
			return;
		}

		// console.log('click button: ' + dataRequesting);
		setDataRequesting(true);
		// console.log('before send: ' + dataRequesting);

		let templateParams = {
			from_name: senderFirstName + ' ' + senderLastName + ' ( ' + senderEmail + ' ) ',
			from_email: senderEmail,
			to_name: 'PPSR',
			subject: 'PPSR Contact Form',
			message_html: {
				customer: `Customer: ${senderFirstName} ${senderLastName}`,
				phone: `${prefContact.phone}\tPhone: ${senderPhone}`,
				email: `${prefContact.email}\tEmail: ${senderEmail}`,

				address: `Address:`,
				street: `${senderStreet}`,
				cityStateZip: `${senderCity}, ${senderState}, ${senderZipcode}`,

				gateCode: `Gate Code: ${senderGateCode}`,

				services: `Services:`,
				complete: `Complete Re-Screen: ${senderServices.complete}`,
				individual: `Individual Panels: ${senderServices.individual}`,
				window: `Window Screens: ${senderServices.window}`,
				lanai: `New Lanai Insert: ${senderServices.lanai}`,
				entry: `New Entry Way Insert: ${senderServices.entry}`,
				washing: `Pressure Washing: ${senderServices.washing}`,
				gutter: `Gutter Cleaning: ${senderServices.gutter}`,
				misc: `Misc. Repairs: ${senderServices.misc}`,

				message: `Message:`,
				details: `${senderMessage}`
			}
		};

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICEID,
				process.env.REACT_APP_EMAILJS_TEMPLATE,
				templateParams,
				process.env.REACT_APP_EMAILJS_USER
			)
			.then((response) => {
				// console.log(response);
				setDataRequesting(false);
				setSendMessageResponse('Successful');
				// console.log('after send: ' + dataRequesting);
				// alert("Message send successfully.")
				clearInputs();
			})
			.catch((error) => {
				// console.log(error);
				setDataRequesting(false);
				setSendMessageResponse('Failed, try again');
				// console.log('after send: ' + dataRequesting);
				// alert("Message failed, try again.")
			});
	};

	return (
		<div className='contact' style={{ padding: '40px 0' }}>
			{/* {console.log('data req ' + dataRequesting)} */}
			<Container>
				<div style={{ fontSize: '2rem', marginBottom: '15px' }}>
					<h2 style={{ paddingLeft: '20px', fontFamily: 'Raleway' }}>Contact Us</h2>
					<div style={{ borderBottom: '2px solid #DFDFDF', width: '100%', marginBottom: '30px' }} />
				</div>
				<div style={{ marginBottom: '50px' }}>
					<p>
						Fill out the form below to receive a free no obligation estimate on your project. Tell us what
						kind of work you need done. We will follow up via email or call you with any questions we might
						have to accurately quote your project.
					</p>
					<p>
						If we are unable to quote your project online, we will email or call you to schedule a
						convenient time to come out and give you an accurate quote.
					</p>
				</div>

				<FormContainer>
					<FormInputContainer method='post' action='submit'>
						<h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Contact Info</h3>

						<InputFieldContainer>
							<InputDiv>
								<InputField
									type='text'
									name='senderFirstName'
									placeholder='First Name'
									required='required'
									onChange={handleInputChange}
									value={senderFirstName}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.fName}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderLastName'
									placeholder='Last Name'
									required='required'
									onChange={handleInputChange}
									value={senderLastName}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.lName}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderEmail'
									placeholder='Email'
									required='required'
									onChange={handleInputChange}
									value={senderEmail}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.email}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderPhone'
									placeholder='Phone #'
									required='required'
									onChange={handleInputChange}
									value={senderPhone}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.phone}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderStreet'
									placeholder='Street'
									required='required'
									onChange={handleInputChange}
									value={senderStreet}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.street}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderCity'
									placeholder='City'
									required='required'
									onChange={handleInputChange}
									value={senderCity}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.city}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderState'
									placeholder='State'
									required='required'
									onChange={handleInputChange}
									value={senderState}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.state}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderZipcode'
									placeholder='Zip Code'
									required='required'
									onChange={handleInputChange}
									value={senderZipcode}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								>
									{senderError.zipcode}
								</div>
							</InputDiv>

							<InputDiv>
								<InputField
									type='text'
									name='senderGateCode'
									placeholder='Gate Code'
									onChange={handleInputChange}
									value={senderGateCode}
								/>
								<div
									className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
									style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
								/>
							</InputDiv>
						</InputFieldContainer>

						<h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Preferred Contact</h3>

						<CheckboxContainer>
							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='phone'
									onChange={(event) => handleCheckboxChange(event, 'phone')}
									value={prefContact.phone}
								/>
								<label>Phone</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='email'
									onChange={(event) => handleCheckboxChange(event, 'email')}
									value={prefContact.email}
								/>
								<label>Email</label>
							</CheckboxDiv>
							{/* {console.log('PREF CONTACT ' + prefContact.phone + '  ' + prefContact.email)} */}
							<div
								className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
								style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
							>
								{senderError.preferredContact}
							</div>
						</CheckboxContainer>

						<h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Select Services</h3>

						<CheckboxContainer>
							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='complete'
									onChange={(event) => handleCheckboxChange(event, 'complete')}
									value={senderServices.complete}
								/>
								<label>Complete Re-Screen</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='individual'
									onChange={(event) => handleCheckboxChange(event, 'individual')}
									value={senderServices.individual}
								/>
								<label>Individual Panels</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='window'
									onChange={(event) => handleCheckboxChange(event, 'window')}
									value={senderServices.window}
								/>
								<label>Window Screens</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='lanai'
									onChange={(event) => handleCheckboxChange(event, 'lanai')}
									value={senderServices.lanai}
								/>
								<label>New Screen Lanai Insert</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='entry'
									onChange={(event) => handleCheckboxChange(event, 'entry')}
									value={senderServices.entry}
								/>
								<label>Front Entry Way Insert</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='washing'
									onChange={(event) => handleCheckboxChange(event, 'washing')}
									value={senderServices.washing}
								/>
								<label>Pressure Washing</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='gutter'
									onChange={(event) => handleCheckboxChange(event, 'gutter')}
									value={senderServices.gutter}
								/>
								<label>Gutter Cleaning</label>
							</CheckboxDiv>

							<CheckboxDiv>
								<CheckboxInput
									type='checkbox'
									name='misc'
									onChange={(event) => handleCheckboxChange(event, 'misc')}
									value={senderServices.misc}
								/>
								<label>Misc. Repairs</label>
							</CheckboxDiv>
						</CheckboxContainer>

						<h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Message</h3>

						<MessageInputContainer>
							<textarea
								type='text'
								name='senderMessage'
								placeholder='Please provide us with details about your project...'
								required='required'
								onChange={handleInputChange}
								value={senderMessage}
								error={senderError.message}
								rows='6'
								style={{ resize: 'none', padding: '5px 10px', width: '100%' }}
							/>
							<div
								className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
								style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
							>
								{senderError.message}
							</div>
						</MessageInputContainer>

						<FormSubmitButtonContainer>
							{/* <div className="g-recaptcha" style={{marginBottom: '10px'}} data-sitekey={process.env.REACT_APP_RECAPTCHA}></div> */}

							<Reaptcha sitekey={process.env.REACT_APP_RECAPTCHA} onVerify={onVerify} />

							<ShowButtonSubmit style={{ display: dataRequesting ? 'none' : 'block' }}>
								<Button
									onClick={sendMessage}
									// onClick={() => setDataRequesting(true)}
									type='button'
									name='submit'
									// required='required'
									disabled={!verified}
									style={{ marginTop: '30px', marginBottom: '10px', width: '200px', height: '50px' }}
								>
									Submit
								</Button>
							</ShowButtonSubmit>
							<LoadingButton style={{ display: dataRequesting ? 'block' : 'none' }}>
								<Button
									disabled
									style={{ marginTop: '30px', marginBottom: '10px', width: '200px', height: '50px' }}
								>
									<Spinner
										as='span'
										animation='border'
										role='status'
										// aria-hide='true'
									/>
									<span className='sr-only'>Loading...</span>
								</Button>
							</LoadingButton>
							<div
								style={{
									color: sendMessageResponse === 'Successful' ? 'green' : 'red',
									fontWeight: 'bold'
								}}
							>
								{sendMessageResponse}
							</div>
							<div
								className={insufficientInfo ? <DisplayErrorDiv /> : <HideErrorDiv />}
								style={{ color: 'red', height: '20px', fontSize: '.8rem' }}
							>
								{senderError.incomplete}
							</div>
						</FormSubmitButtonContainer>
					</FormInputContainer>

					{/* <form action="?" method="POST">
              <div id="html_element"></div>
              <br />
              <input type="submit" value="Submit">
                </input>
            </form>

            <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                async defer>
            </script>

            <form action="?" method="POST">
              <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA}></div>
              <br/>
              <input type="submit" value="Submit" />
            </form> */}

					<LineSeperatorDiv />

					<HoursOfOperationDiv>
						<div style={{ marginBottom: '20px' }}>
							<div style={{ borderBottom: '1px solid #A9A9A9', marginBottom: '15px' }}>
								<h2 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Business Hours</h2>
							</div>
							<div style={{ minWidth: '250px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Sunday:</span>
									<span>Closed</span>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Monday:</span>
									<span>8:00am - 6:00pm</span>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Tuesday:</span>
									<span>8:00am - 6:00pm</span>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Wednesday:</span>
									<span>8:00am - 6:00pm</span>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Thursday:</span>
									<span>8:00am - 6:00pm</span>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Friday:</span>
									<span>8:00am - 6:00pm</span>
								</div>
								<div style={{ display: 'flex', justifyContent: 'space-between' }}>
									<span>Saturday:</span>
									<span>Closed</span>
								</div>
							</div>
							<div style={{ marginBottom: '10px', textAlign: 'center' }}>
								<span style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
									<a href='tel:4078008116'>407-800-8116</a>
								</span>
							</div>
						</div>

						{/* BBB Seal */}
						{/* <div style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <a id="bbblink" className="ruhzbum" href="https://www.bbb.org/us/fl/orlando/profile/screen-repair/pool-and-patio-screen-repair-0733-90324909#bbbseal" title="Pool & Patio Screen Repair, Screen Repair, Orlando, FL" style={{display: 'block', position: 'relative', overflow: "hidden", width: '150px', height: '68px', margin: '0px', padding: '0px'}}><img style={{padding: '0px', border: 'none'}} id="bbblinkimg" src="https://seal-centralflorida.bbb.org/logo/ruhzbum/pool-and-patio-screen-repair-90324909.png" width="300" height="68" alt="Pool & Patio Screen Repair, Screen Repair, Orlando, FL" /></a> */}
						{/* <script type="text/javascript">var bbbprotocol = ( ("https:" == document.location.protocol) ? "https://" : "http://" ); (function(){var s=document.createElement('script');s.src=bbbprotocol + 'seal-centralflorida.bbb.org' + unescape('%2Flogo%2Fpool-and-patio-screen-repair-90324909.js');s.type='text/javascript';s.async=true;var st=document.getElementsByTagName('script');st=st[st.length-1];var pt=st.parentNode;pt.insertBefore(s,pt.nextSibling);})();</script> */}
						{/* <div style={{display: 'flex', marginTop: '20px'}}>
                <a href="http://www.homeadvisor.com/rated.PoolPatioScreenRepair.52286437.html" style={{display: 'block', margin: '0 auto'}}><img alt="HomeAdvisor Screened Pro" style={{display: 'block', width: '90px'}} src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c" /></a>
                <a href="http://www.homeadvisor.com/c.Swimming-Pools.Orlando.FL.-12070.html#spid=52286437" style={{display: 'block', margin: '0 auto'}}><img alt="HomeAdvisor Top Rated Service" style={{display: 'block', width: '75px'}} src="http://www.homeadvisor.com/images/sp-badges/toprated-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c" /></a>
                <a href="http://www.homeadvisor.com/c.Swimming-Pools.Orlando.FL.-12070.html#spid=52286437" style={{display: 'block', margin: '0 auto'}}><img alt="HomeAdvisor Elite Service Award - Pool & Patio Screen Repair" style={{display: 'block', width: '75px'}} src="http://www.homeadvisor.com/images/sp-badges/elite-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c" /></a>
                <a href="http://www.homeadvisor.com/rated.PoolPatioScreenRepair.52286437.html" style={{display: 'block', margin: '0 auto'}}><img alt="Screened & Approved HomeAdvisor Pro" style={{display: 'block', width: '75px'}} src="http://www.homeadvisor.com/images/sp-badges/3year-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c" /></a>
              </div>
            </div> */}

						{/* Home Advisor Badges  */}

						{/* Home Advisor Reviews  */}
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<div
								style={{
									background: '#f1f2f2',
									border: '1px solid #ccc',
									borderRadius: '3px',
									padding: '20px 15px 10px',
									margin: '0 auto',
									width: '300px',
									height: '780px',
									boxSizing: 'border-box'
								}}
							>
								<img
									alt='Review Pros'
									src='//cdn2.homeadvisor.com/images/consumer/home/ha-logo-title.png'
									width='259'
								/>

								<h4
									style={{
										background: '#3d4549',
										color: '#fff',
										margin: '15px -16px',
										padding: '6px 0 4px',
										textAlign: 'center',
										fontFamily: ' helvetica, arial, san-serif'
									}}
								>
									RATINGS & REVIEWS
								</h4>

								<iframe
									src='https://www.homeadvisor.com/ratings/embed/iframe/52286437/?orientation=vertical&reviewSort=highest'
									title='Home Advisor Reviews'
									style={{ width: '100%', height: '607px', background: 'transparent' }}
									frameBorder='0'
									scrolling='no'
								/>

								<a
									href='http://www.homeadvisor.com/rated.PoolPatioScreenRepair.52286437.html'
									style={{
										color: '#5486a3',
										fontSize: '11px',
										fontFamily: 'helvetica, arial, san-serif',
										textAalign: 'center',
										textDecoration: 'none'
									}}
								>
									See More Reviews on HomeAdvisor
								</a>
							</div>
						</div>
					</HoursOfOperationDiv>
				</FormContainer>
			</Container>
		</div>
	);
};

export default ContactForm;
