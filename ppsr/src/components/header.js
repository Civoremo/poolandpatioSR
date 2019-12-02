import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Link, animmateScroll as scroll } from "react-scroll";

import headerImage from "./images/accordionImages/pool.jpg";

const HeaderDiv = styled.div`
	width: 100vw;
	height: 600px;
	/* border: 1px solid red; */
	background: url(${headerImage}) center center no-repeat;
	background-size: cover;

	@media (max-width: 991px) {
		height: 500px;
	}
`;

const TextDiv = styled.div`
	margin: 10px 0;
	font-size: 2rem;
	font-weight: bold;
	color: #007bff;
	text-align: center;
`;

const Header = props => {
	return (
		<HeaderDiv>
			<Container>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						height: "600px",
					}}
				>
					<TextDiv>Are you tired of looking through worn or broken screens?</TextDiv>
					{/* <TextDiv>Are you tired of using candles or bug sprays?</TextDiv>
					<TextDiv>
						Is battling insects and debris from tears in your pool or patio screen enclosure driving
						you crazy?
					</TextDiv> */}
					<Button variant="primary" size="lg" style={{ marginTop: "50px" }}>
						<Link to="services" smooth={true} offset={-30} duration={500}>
							Learn how we can help
						</Link>
					</Button>
				</div>
			</Container>
		</HeaderDiv>
	);
};

export default Header;
