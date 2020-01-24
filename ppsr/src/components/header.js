import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

import headerImage from "./images/accordionImages/pool.jpg";

const HeaderDiv = styled.div`
	/* width: 100vw; */
	height: 600px;
	/* border: 1px solid red; */
	background: url(${headerImage}) center center no-repeat;
	background-size: cover;

	@media (max-width: 991px) {
		height: 500px;
	}
`;

const HeaderContentDiv = styled.div`
	height: 600px;

	@media (max-width: 991px) {
		height: 500px;
	}
`;

const displayText = keyframes`
	0% {opacity: 0}
	20% {opacity: 1}
	80% {opacity: 1}
	100% {opacity: 0}
`;

const TextDiv = styled.h2`
	display: ${props => (props.showing === 0 ? "block" : "none")};
	margin: 10px 0;
	font-size: 2rem;
	font-weight: bold;
	color: #007bff;
	text-align: center;
	animation: ${displayText} 5s linear;
`;

const TextDiv2 = styled.h2`
	display: ${props => (props.showing === 1 ? "block" : "none")};
	margin: 10px 0;
	font-size: 2rem;
	font-weight: bold;
	color: #007bff;
	text-align: center;
	animation: ${displayText} 5s linear;
`;

const TextDiv3 = styled.h2`
	display: ${props => (props.showing === 2 ? "block" : "none")};
	margin: 10px 0;
	font-size: 2rem;
	font-weight: bold;
	color: #007bff;
	text-align: center;
	animation: ${displayText} 5s linear;
`;

const Header = props => {
	const [headerText, setHeaderText] = useState(0);
	const [order, setOrder] = useState(0);

	useEffect(() => {
		let id = setInterval(() => {
			let result = (order + 1) % 3;
			setOrder(result);
			console.log("result ", result);
			setHeaderText(result);
		}, 4700);
		return () => clearInterval(id);
	});

	return (
		<HeaderDiv>
			{console.log(headerText)}
			<Container>
				<HeaderContentDiv
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						// height: "600px",
						// height: "100%",
						// border: "1px solid red",
					}}
				>
					<TextDiv showing={headerText}>
						Are you tired of looking through worn or broken screens?
					</TextDiv>
					<TextDiv2 showing={headerText}>Are you tired of using candles or bug sprays?</TextDiv2>
					<TextDiv3 showing={headerText}>
						Is battling insects and debris driving you crazy?
					</TextDiv3>
					<Button variant="primary" size="lg" style={{ marginTop: "50px" }}>
						<Link to="services" smooth={true} offset={-30} duration={500}>
							Learn How We Can Help
						</Link>
					</Button>
				</HeaderContentDiv>
			</Container>
		</HeaderDiv>
	);
};

export default Header;
