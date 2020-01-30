import React from "react";
import Container from "react-bootstrap/Container";
// import { FacebookShareButton, FacebookIcon } from "react-share";
import styled from "styled-components";

import CreditCards from "./images/allMajorCreditCards.png";

const FooterContainer = styled.div`
	background-color: #112f73;
	min-height: 100px;
	color: #fff;
	padding: 15px 0;
`;

const Footer = props => {
	const currentYear = new Date();

	return (
		<FooterContainer>
			<Container>
				<div>
					<div style={{ textAlign: "center" }}>
						Call{" "}
						<a
							href="tel:4078008116"
							style={{
								color: "#fff",
								textDecoration: "none",
								cursor: "pointer",
							}}
						>
							407-800-8116
						</a>{" "}
						for a no obligation quote.
					</div>
					{/* <div style={{ textAlign: "center" }}>For a no obligation quote.</div> */}
				</div>
				<div
					style={{
						display: "flex",
						// flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100px",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							// width: "50%",
							// float: "left",
						}}
					>
						<div>
							<img src={CreditCards} alt="all major credit cards" />
						</div>
					</div>
				</div>
				<div>
					<div style={{ fontSize: ".9rem", textAlign: "center" }}>
						All rights reserved Pool & Patio Screen Repair, Inc.
					</div>
					<div style={{ fontSize: ".8rem", textAlign: "center" }}>
						Copyright © 2012-{currentYear.getFullYear()}.
					</div>
				</div>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
