import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

import pageBreakImageTwo from "./images/accordionImages/pool3.jpg";

const BackgroundTwoDiv = styled.div`
	background-color: green;
	min-height: 450px;
	background-image: url(${pageBreakImageTwo});
	background-size: cover;
	clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
	background-attachment: fixed;
	background-position: center;
`;

const PageBreakContentTwo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 450px;
`;

const PageBreakTwo = props => {
	return (
		<BackgroundTwoDiv>
			<Container>
				<PageBreakContentTwo>
					<div style={{ fontSize: "2rem", fontWeight: "bold", color: "#007bff" }}>
						Some Text can go here
					</div>
				</PageBreakContentTwo>
			</Container>
		</BackgroundTwoDiv>
	);
};

export default PageBreakTwo;
