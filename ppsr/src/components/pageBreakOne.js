import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const BackgroundDiv = styled.div`
	background-color: yellow;
	min-height: 250px;
`;

const PageBreakOne = props => {
	return (
		<BackgroundDiv>
			<Container>First page break with INFO</Container>
		</BackgroundDiv>
	);
};

export default PageBreakOne;
