import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const HeaderDiv = styled.div`
	background-color: lightblue;
	min-height: 600px;
`;

const Header = props => {
	return (
		<HeaderDiv>
			<Container>image with action text goes here</Container>
		</HeaderDiv>
	);
};

export default Header;
