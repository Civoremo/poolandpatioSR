import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import pageBreakImageOne from "./images/accordionImages/pool2.jpg";

const BackgroundDiv = styled.div`
	background-color: yellow;
	height: 450px;
	background-image: url(${pageBreakImageOne});
	background-size: cover;
	clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
	background-attachment: fixed;
	background-position: center;
	margin: 30px 0;
`;

const PageBreakContentOne = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 450px;
`;

const PageBreakOne = props => {
	return (
		<BackgroundDiv>
			<Container>
				<PageBreakContentOne>
					<div
						style={{ fontSize: "2rem", fontWeight: "bold", color: "white", marginBottom: "30px" }}
					>
						Finance Options Available
					</div>
					<Button>Learn about Financing</Button>
				</PageBreakContentOne>
			</Container>
		</BackgroundDiv>
	);
};

export default PageBreakOne;
