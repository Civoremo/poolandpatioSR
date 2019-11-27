import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

// import logoImg from './images/logo/logo_lg_alt.png';
import logoImgWhite from "./images/logo/logo_lg_alt_white.png";
import Gallery from "./gallery";
import SignIn from "./sign_in";
import Profile from "./profile";
import ShopPage from "./shop";
import Financing from "./financing";

/*
  colors

  blue1: #163e98
  blue2: #12317a

*/

const NavLinkColor = styled.span`
	color: #eeeeee;
	font-weight: bold;
	font-size: 0.8rem;
	letter-spacing: 2px;

	font-family: "Raleway", sans-serif;

	:hover {
		color: #c8c8c8;
		text-decoration: underline;
	}
`;

const ActionDiv = styled.div`
	background-color: #163e98;
	color: whitesmoke;
	position: absolute;
	top: 4.3rem;
	width: 100%;
`;

const PhoneNumberA = styled.a`
	font-size: 1.6rem;
	color: #fff;

	@media (min-width: 992px) {
		display: block;
	}

	@media (max-width: 991px) {
		display: none;
	}

	:hover {
		text-decoration: underline;
		color: #fff;
	}
`;
const ActionTextSpan = styled.span`
	font-size: 1rem;
	color: #fff;

	font-family: "Roboto", sans-serif;

	@media (max-width: 991px) {
		display: none;
	}

	@media (min-width: 992px) {
		display: block;
	}
`;

const LoginNavLinkDiv = styled.div`
	display: ${props => (props.showing === null ? "block" : "none")};
`;

const ProfileNavLinkDiv = styled.div`
	display: ${props => (props.showing !== null ? "block" : "none")};
`;

const LinkBorder = styled.div`
	border-left: 1px solid #fff;
	padding-left: 10px;

	@media (max-width: 991px) {
		border: none;
		padding-left: 0;
	}
`;

const Navigationbar = props => {
	const { imageArray } = props;
	const [lgGallery, setGallery] = useState(false);
	const [lgSignIn, setSignIn] = useState(false);
	const [loggedIn] = useState(false);
	const [lgProfile, setProfile] = useState(false);
	const [lgShop, setShop] = useState(false);
	const [lgFinancing, setFinancing] = useState(false);

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
		senderPhone,
		senderStreet,
		senderCity,
		senderState,
		senderZipcode,
		senderGateCode,
		//   senderServices,
		//   senderMessage,
		//   senderError,
		//   insufficientInfo,
		//   verified,
		//   onVerify,
		isSelected,
		// loggedIn
	} = props;

	return (
		<div>
			<Navbar fixed="top" expand="lg" style={{ backgroundColor: "#1759aa" }}>
				<Container>
					<Navbar.Brand href="#home">
						<img
							src={logoImgWhite}
							alt={"PPSR"}
							style={{ maxWidth: "120px", height: "auto", marginRight: "30px" }}
						/>
					</Navbar.Brand>
					{/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
            <ActionTextSpan style={{ marginRight: '10px'}}>Call </ActionTextSpan>
            <PhoneNumberA href='tel:4078008116'>407-800-8116</PhoneNumberA>
            <ActionTextSpan style={{ marginLeft: '10px'}}> for a Free Estimate!</ActionTextSpan>
          </div> */}
					<Navbar.Toggle className="hamburger-custom" aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav className="navbar-custom">
							<Nav.Link href="#about">
								<NavLinkColor>About</NavLinkColor>
							</Nav.Link>
							<Nav.Link href="#services">
								<NavLinkColor>Services</NavLinkColor>
							</Nav.Link>
							<Nav.Link href="#financing">
								<NavLinkColor onClick={() => setFinancing(true)}>Financing</NavLinkColor>
							</Nav.Link>
							<Nav.Link href="#gallery">
								<NavLinkColor onClick={() => setGallery(true)}>Gallery</NavLinkColor>
							</Nav.Link>
							<Nav.Link href="#contact">
								<NavLinkColor>Contact</NavLinkColor>
							</Nav.Link>
							<Nav.Link href="#shop">
								<NavLinkColor onClick={() => setShop(true)}>SHOP</NavLinkColor>
							</Nav.Link>
							<Nav.Link href="#signin">
								{console.log("logged: " + loggedIn)}
								<LoginNavLinkDiv showing={localStorage.getItem("ppsr_user")}>
									<NavLinkColor onClick={() => setSignIn(true)}>
										<LinkBorder>Login</LinkBorder>
									</NavLinkColor>
								</LoginNavLinkDiv>
								<ProfileNavLinkDiv showing={localStorage.getItem("ppsr_user")}>
									<NavLinkColor onClick={() => setProfile(true)}>
										<LinkBorder>
											Hi, {JSON.parse(`${localStorage.getItem("ppsr_user")}`)}
										</LinkBorder>
									</NavLinkColor>
								</ProfileNavLinkDiv>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<ActionDiv className="callToAction">
				<Container>
					<div
						style={{
							maxWidth: "100%",
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							height: "3rem",
						}}
					>
						<span style={{ fontSize: "1.4rem" }}>
							{" "}
							Call{" "}
							<a href="tel:4078008116" style={{ color: "#fff" }}>
								407-800-8116
							</a>{" "}
							for a Free Estimate
						</span>
					</div>
				</Container>
			</ActionDiv>

			<Financing lgFinancing={lgFinancing} setFinancing={setFinancing} />

			<Gallery imageArray={imageArray} lgGallery={lgGallery} setGallery={setGallery} />

			<ShopPage lgShop={lgShop} setShop={setShop} />

			<SignIn
				lgSignIn={lgSignIn}
				setSignIn={setSignIn}
				loggedIn={loggedIn}
				handleInputChange={handleInputChange}
				toggleSignInLinks={toggleSignInLinks}
				clearSigninInputs={clearSigninInputs}
				clearInputs={clearInputs}
				senderEmail={senderEmail}
				senderFirstName={senderFirstName}
				senderLastName={senderLastName}
				senderConfirmEmail={senderConfirmEmail}
				credentials={credentials}
				confirmCredentials={confirmCredentials}
				confirmationKey={confirmationKey}
				isSelected={isSelected}
			/>

			<Profile
				lgProfile={lgProfile}
				setProfile={setProfile}
				loggedIn={loggedIn}
				handleInputChange={handleInputChange}
				senderEmail={senderEmail}
				senderFirstName={senderFirstName}
				senderLastName={senderLastName}
				credentials={credentials}
				confirmCredentials={confirmCredentials}
				senderPhone={senderPhone}
				senderStreet={senderStreet}
				senderCity={senderCity}
				senderState={senderState}
				senderZipcode={senderZipcode}
				senderGateCode={senderGateCode}
			/>
		</div>
	);
};

export default Navigationbar;
