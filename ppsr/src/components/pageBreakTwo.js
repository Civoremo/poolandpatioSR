import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const BackgroundTwoDiv = styled.div`
	background-color: green;
	min-height: 250px;
`;

const PageBreakTwo = props => {
	return (
		<BackgroundTwoDiv>
			<Container>Second Page break with INFO</Container>
		</BackgroundTwoDiv>
	);
};

export default PageBreakTwo;
