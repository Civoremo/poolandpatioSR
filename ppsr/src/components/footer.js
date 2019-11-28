import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const FooterContainer = styled.div`
	background-color: #112f73;
	min-height: 100px;
`;

const Footer = props => {
	return (
		<FooterContainer>
			<Container>
				<div>
					<div>our footer</div>
				</div>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
