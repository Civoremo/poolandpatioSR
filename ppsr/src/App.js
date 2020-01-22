import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Navigation from "./components/navbar";
import ServicesPage from "./components/services";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import PageBreakOne from "./components/pageBreakOne";
import PageBreakTwo from "./components/pageBreakTwo";
import Header from "./components/header";
import Badges from "./components/badges";

const URL = `https://res.cloudinary.com/ppscreens/image/list/ppsr.json`;
// const URLAPI = "https://ppsr-api.herokuapp.com";
// const URLAPI = "http://localhost:4000";

class App extends Component {
	state = {
		collapsedID: "",
		imageArray: [],
		senderEmail: "",
		credentials: "",
		confirmCredentials: "",
		confirmationKey: "",
		senderConfirmEmail: "",
		senderFirstName: "",
		senderLastName: "",
		senderPhone: "",
		senderStreet: "",
		senderCity: "",
		senderState: "",
		senderZipcode: "",
		senderGateCode: "",
		senderServices: {
			complete: false,
			individual: false,
			window: false,
			lanai: false,
			entry: false,
			washing: false,
			gutter: false,
			misc: false,
		},
		senderMessage: "",
		error: {
			fName: "",
			lName: "",
			email: "",
			phone: "",
			message: "",
			street: "",
			city: "",
			state: "",
			zipcode: "",
			incomplete: "",
		},
		signupErrors: {
			fName: "",
			lName: "",
			email: "",
			confirmEmail: "",
			credentials: "",
			confirmCredentials: "",
			incomplete: "",
		},
		loginErrors: {
			email: "",
			credentials: "",
			incomplete: "",
			confirmationKey: "",
		},
		profileErrors: {
			email: "",
			fName: "",
			lName: "",
		},
		insufficientInfo: false,
		verified: false,
		isSelected: true,
		lgFinancing: false,
		lgShop: false,
		// loggedIn: false,
	};

	componentDidMount() {
		axios
			.get(URL)
			.then(res => {
				// console.log(res);
				this.setState({
					imageArray: res.data.resources,
				});
			})
			.catch(err => {
				console.log("ERROR --> " + err);
			});
	}

	toggleFinanceModal = event => {
		this.setState({
			lgFinancing: !this.state.lgFinancing,
		});
	};

	toggleShopModal = event => {
		this.setState({
			lgShop: !this.state.lgShop,
		});
	};

	toggleAccordion = collapsedID => () =>
		this.setState(prevState => ({
			collapsedID: prevState.collapsedID !== collapsedID ? collapsedID : "",
		}));

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(event.target.name + ` - ${event.target.value}`);
	};

	toggleSignInLinks = event => {
		this.setState({
			isSelected: !this.state.isSelected,
		});
	};

	clearSigninInputs = event => {
		this.setState({
			senderEmail: "",
			senderConfirmEmail: "",
			senderFirstName: "",
			senderLastName: "",
			credentials: "",
			confirmCredentials: "",
			confirmationKey: "",
			signupErrors: {
				fName: "",
				lName: "",
				email: "",
				confirmEmail: "",
				credentials: "",
				confirmCredentials: "",
				incomplete: "",
			},
			loginErrors: {
				email: "",
				credentials: "",
				incomplete: "",
				confirmationKey: "",
			},
			profileErrors: {
				email: "",
				fName: "",
				lName: "",
			},
		});
	};

	handleCheckboxChange = (event, name) => {
		console.log("Name " + event.target.name);
		console.log("Value " + event.target.checked);

		this.setState(prevState => {
			let tempServices = { ...prevState.senderServices };
			console.table("PREV " + prevState.senderServices[name]);

			if (name === "complete") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "individual") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "window") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "lanai") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "entry") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "washing") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "gutter") {
				tempServices[name] = !prevState.senderServices[name];
			} else if (name === "misc") {
				tempServices[name] = !prevState.senderServices[name];
			} else {
				console.log("lets figure this out");
			}

			return { senderServices: tempServices };
		});
	};

	clearInputs = event => {
		this.setState({
			senderEmail: "",
			senderConfirmEmail: "",
			credentials: "",
			confirmCredentials: "",
			confirmationKey: "",
			senderFirstName: "",
			senderLastName: "",
			senderPhone: "",
			senderStreet: "",
			senderCity: "",
			senderState: "",
			senderZipcode: "",
			senderGateCode: "",
			senderServices: {
				complete: false,
				individual: false,
				window: false,
				lanai: false,
				entry: false,
				washing: false,
				gutter: false,
				misc: false,
			},
			senderMessage: "",
			error: {
				name: "",
				email: "",
				phone: "",
				message: "",
				street: "",
				city: "",
				state: "",
				zipcode: "",
				incomplete: "",
			},
			signupErrors: {
				fName: "",
				lName: "",
				email: "",
				confirmEmail: "",
				credentials: "",
				confirmCredentials: "",
				incomplete: "",
			},
			loginErrors: {
				email: "",
				credentials: "",
				incomplete: "",
				confirmationKey: "",
			},
			profileErrors: {
				email: "",
				fName: "",
				lName: "",
			},
			insufficientInfo: false,
		});
	};

	setErrorMessages = errors => {
		this.setState({
			error: errors,
		});
	};

	setProfileErrorMessage = errors => {
		this.setState({
			profileErrors: errors,
		});
	};

	setProfileInfo = userInfo => {
		this.setState({
			senderFirstName: userInfo.firstName,
			senderLastName: userInfo.lastName,
			senderEmail: userInfo.email,
		});
	};

	setSignupErrorMessages = errors => {
		this.setState({
			signupErrors: errors,
		});
	};

	setLoginErrorMessages = errors => {
		this.setState({
			loginErrors: errors,
		});
	};

	toggleMissingInfoMessage = event => {
		this.setState({
			insufficientInfo: true,
		});
	};

	onVerify = recaptchaResponse => {
		let reResponse = `${document.querySelector("#g-recaptcha-response").value}`;
		console.log(reResponse);

		// axios({
		// 	method: "post",
		// 	mode: "no-cors",
		// 	url: "https://www.google.com/recaptcha/api/siteverify",
		// 	// headers: { "Content-Type": "application/json", Accept: "application/json" },
		// 	body: JSON.stringify({
		// 		secret: `${process.env.REACT_APP_CAPTCHASECRET}`,
		// 		response: `${document.querySelector("#g-recaptcha-response").value}`,
		// 	}),
		// })
		// 	.then(res => {
		// 		console.log("recaptcha success");
		// 		this.setState({
		// 			verified: true,
		// 		});
		// 	})
		// 	.catch(err => {
		// 		console.log("recaptcha failure");
		// 	});

		fetch("https://www.google.com/recaptcha/api/siteverify", {
			method: "POST",
			mode: "no-cors",
			// headers: {
			//   'Content-Type': 'application/x-www-form-urlencoded'
			// },
			// headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
			body: JSON.stringify({
				secret: `${process.env.REACT_APP_CAPTCHASECRET}`,
				response: `${document.querySelector("#g-recaptcha-response").value}`,
				// remoteip: 'localhost'
			}),
		})
			.then(res => {
				console.log("recaptcha res: " + JSON.stringify(res));
				this.setState({
					verified: true,
				});
			})
			.catch(err => {
				console.log("recaptcha error " + err);
			});
	};

	validateUpdateInfo = event => {
		console.log(this.state.senderFirstName);
		console.log(this.state.senderLastName);
		if (!this.state.senderFirstName || this.state.senderFirstName.length < 2) {
			this.setState({
				senderFirstName: JSON.parse(localStorage.getItem("ppsr_user")),
			});
		}

		if (!this.state.senderLastName || this.state.senderLastName.length < 2) {
			this.setState({
				senderLastName: JSON.parse(localStorage.getItem("lName")),
			});
		}
	};

	render() {
		// console.log(this.state.senderServices)
		return (
			<div>
				<Navigation
					imageArray={this.state.imageArray}
					handleInputChange={this.handleInputChange}
					toggleSignInLinks={this.toggleSignInLinks}
					// handleCheckboxChange={this.handleCheckboxChange}
					// setErrorMessages={this.setErrorMessages}
					clearSigninInputs={this.clearSigninInputs}
					clearInputs={this.clearInputs}
					// toggleMissingInfoMessage={this.toggleMissingInfoMessage}
					senderEmail={this.state.senderEmail}
					senderFirstName={this.state.senderFirstName}
					senderLastName={this.state.senderLastName}
					senderConfirmEmail={this.state.senderConfirmEmail}
					credentials={this.state.credentials}
					confirmCredentials={this.state.confirmCredentials}
					confirmationKey={this.state.confirmationKey}
					senderPhone={this.state.senderPhone}
					senderStreet={this.state.senderStreet}
					senderCity={this.state.senderCity}
					senderState={this.state.senderState}
					senderZipcode={this.state.senderZipcode}
					senderGateCode={this.state.senderGateCode}
					// senderServices={this.state.senderServices}
					// senderMessage={this.state.senderMessage}
					// senderError={this.state.error}
					// insufficientInfo={this.state.insufficientInfo}
					// verified={this.state.verified}
					// onVerify={this.onVerify}
					isSelected={this.state.isSelected}
					// loggedIn={this.state.loggedIn}
					lgFinancing={this.state.lgFinancing}
					lgShop={this.state.lgShop}
					toggleFinanceModal={this.toggleFinanceModal}
					toggleShopModal={this.toggleShopModal}
					signupErrors={this.state.signupErrors}
					setSignupErrorMessages={this.setSignupErrorMessages}
					loginErrors={this.state.loginErrors}
					setLoginErrorMessages={this.setLoginErrorMessages}
					setProfileInfo={this.setProfileInfo}
					validateUpdateInfo={this.validateUpdateInfo}
					profileErrors={this.state.profileErrors}
					setProfileErrorMessage={this.setProfileErrorMessage}
				/>
				{/* {console.log('APP: ', this.state.isSelected)} */}
				<div className="callToActionSpacer" />
				<Header />
				<Badges />
				<AboutUs />
				<PageBreakOne toggleFinanceModal={this.toggleFinanceModal} />
				<ServicesPage collapsedID={this.state.collapsedID} toggleAccordion={this.toggleAccordion} />
				<PageBreakTwo toggleShopModal={this.toggleShopModal} />
				<ContactUs
					handleInputChange={this.handleInputChange}
					handleCheckboxChange={this.handleCheckboxChange}
					setErrorMessages={this.setErrorMessages}
					clearInputs={this.clearInputs}
					toggleMissingInfoMessage={this.toggleMissingInfoMessage}
					senderEmail={this.state.senderEmail}
					senderFirstName={this.state.senderFirstName}
					senderLastName={this.state.senderLastName}
					senderPhone={this.state.senderPhone}
					senderStreet={this.state.senderStreet}
					senderCity={this.state.senderCity}
					senderState={this.state.senderState}
					senderZipcode={this.state.senderZipcode}
					senderGateCode={this.state.senderGateCode}
					senderServices={this.state.senderServices}
					senderMessage={this.state.senderMessage}
					senderError={this.state.error}
					insufficientInfo={this.state.insufficientInfo}
					verified={this.state.verified}
					onVerify={this.onVerify}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
