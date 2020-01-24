import React from "react";
import Modal from "react-bootstrap/Modal";
// import styled from "styled-components";

import FinanceHeaderImage from "./images/finance/HI_finance.png";
import { Button } from "react-bootstrap";

const Financing = props => {
	const { lgFinancing, toggleFinanceModal } = props;

	return (
		<Modal size="lg" show={lgFinancing} onHide={() => toggleFinanceModal()} scrollable="true">
			<Modal.Header closeButton>
				<Modal.Title
					id="example-modal-sizes-title-sm"
					style={{ textAlign: "center", width: "100%" }}
				>
					Home Improvement Financing
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<img
						style={{ width: "100%", height: "auto", marginBottom: "30px" }}
						src={FinanceHeaderImage}
						alt="Home Improvement Financing"
					/>
					<p style={{ padding: "0 5%" }}>
						Our top priority is to make sure your home improvement project with us is smooth and
						painless. That’s why we’ve partnered with{" "}
						<a
							href="https://financemyproject.com/"
							target="_blank"
							tabIndex="0"
							rel="noopener noreferrer"
						>
							FinanceMyProject
						</a>{" "}
						to make sure getting an unsecured home improvement loan for your project is quick and
						easy. <br></br>At FinanceMyProject.com you can apply in 60 seconds, and compare your
						pre-approved unsecured home improvement loan offers, without it affecting your credit
						score. Regardless of the type of project around the home, FinanceMyProject can help you
						get the funds you need to make your desired repairs or upgrades. See some of their
						awesome benefits below:
					</p>
				</div>
				<div style={{ padding: "0 5%" }}>
					<ul>
						<li>Borrow up to $50,000</li>
						<li>Compare pre-qualified unsecured loan offers in seconds</li>
						<li>Checking rates won’t affect your credit score</li>
						<li>Flexible loan terms</li>
						<li>Quick application process</li>
						<li>Paperless process</li>
						<li>No home equity requirements</li>
						<li>Joint applications accepted</li>
						<li>Can have funds as soon as one business day</li>
					</ul>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						marginTop: "50px",
						marginBottom: "40px",
					}}
				>
					<p>Apply now and compare your home improvement loan options now!</p>
					<a
						href="https://financemyproject.com/home-improvement-loans/"
						target="_blank"
						tabIndex="0"
						rel="noopener noreferrer"
					>
						<Button style={{ width: "120px" }}>Apply</Button>
					</a>
				</div>
				{/* <div style={{ textAlign: "center" }}>
					At GreenSky, our focus is simple. We want to help you finance your next home improvement
					project. Whether you as the customer wants to pay using a deferred interest plan or have a
					fixed monthly budget, the GreenSky programs offer flexible consumer financing options to
					meet various needs.
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap",
						padding: "20px 20px",
					}}
				>
					<div
						className="financing-module"
						style={{
							boxSizing: "border-box",
							margin: "10px",
							textAlign: "left",
							borderWidth: "5px",
							borderStyle: "solid",
							borderColor: "#509e2f",
							width: "330px",
							borderRadius: "10px",
							paddingTop: "4px",
						}}
					>
						<div style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>
							Option #1
						</div>
						<div style={{ textAlign: "center", marginBottom: "10px" }}>Reference #11111</div>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/headers/header_320.jpg?v=1.0.1011"
								alt="Financing Options from GreenSky"
								tabIndex="0"
							/>
						</div>
						<div>
						</div>
						<div>
							<a
								href="https://portal.greenskycredit.com/MerchantLoanApplication?apptype=short&merchant=81013020&dealerplan=2521&channel=External-Button-03"
								target="_blank"
								tabIndex="0"
								rel="noopener noreferrer"
							>
								<img
									src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/2521_320x100.jpg?v=1.0.1011"
									width="320"
									height="100"
									alt="2521 - 12 Months No Interest, No Payments - (84 Principal Pmts)"
								/>
							</a>
						</div>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/footers/footer_320.jpg?v=1.0.1011"
								width="320"
								height="73"
								alt="Financing for GreenSky&#169; credit programs is provided by federally insured, federal and state chartered financial institutions without regard to race, color, religion, national origin, gender or familial status. NMLS #1416362; CT SLC-1416362; NJMT #1501607 C22"
								tabIndex="0"
							/>
						</div>
					</div>

					<div
						className="financing-module"
						style={{
							boxSizing: "border-box",
							margin: "10px",
							textAlign: "left",
							borderWidth: "5px",
							borderStyle: "solid",
							borderColor: "#509e2f",
							width: "330px",
							borderRadius: "10px",
							paddingTop: "4px",
						}}
					>
						<div style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>
							Option #2
						</div>
						<div style={{ textAlign: "center", marginBottom: "10px" }}>Reference #11111</div>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/headers/header_320.jpg?v=1.0.1011"
								alt="Financing Options from GreenSky"
								tabIndex="0"
							/>
						</div>
						<div>
						</div>
						<div>
							<a
								href="https://portal.greenskycredit.com/MerchantLoanApplication?apptype=short&merchant=81013020&dealerplan=6096&channel=External-Button-03"
								target="_blank"
								tabIndex="0"
								rel="noopener noreferrer"
							>
								<img
									src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/6096_320x100.jpg?v=1.0.1011"
									width="320"
									height="100"
									alt="6096 - Equal Payments, 0% for 96 Months"
								/>
							</a>
						</div>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/footers/footer_320.jpg?v=1.0.1011"
								width="320"
								height="73"
								alt="Financing for GreenSky&#169; credit programs is provided by federally insured, federal and state chartered financial institutions without regard to race, color, religion, national origin, gender or familial status. NMLS #1416362; CT SLC-1416362; NJMT #1501607 C22"
								tabIndex="0"
							/>
						</div>
					</div>
				</div> */}
			</Modal.Body>
		</Modal>
	);
};

export default Financing;
