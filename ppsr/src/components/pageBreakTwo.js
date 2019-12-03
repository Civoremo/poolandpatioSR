import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
	margin: 30px 0;
`;

const PageBreakContentTwo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 450px;
`;

const PageBreakTwo = props => {
	const { toggleShopModal } = props;
	return (
		<BackgroundTwoDiv>
			<Container>
				<PageBreakContentTwo>
					<div
						style={{ fontSize: "2rem", fontWeight: "bold", color: "#007bff", marginBottom: "30px" }}
					>
						Browse our SHOP for pricing details
					</div>
					<Button onClick={() => toggleShopModal()}>Learn about Pricing</Button>
				</PageBreakContentTwo>
			</Container>
		</BackgroundTwoDiv>
	);
};

export default PageBreakTwo;
