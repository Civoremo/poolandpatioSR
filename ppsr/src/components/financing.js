import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const Financing = props => {
	const { lgFinancing, setFinancing } = props;

	return (
		<Modal size="lg" show={lgFinancing} onHide={() => setFinancing(false)}>
			<Modal.Header closeButton>
				{/* <Modal.Title id="example-modal-sizes-title-sm">
					Pool & Patio Screen Repair Finance Options
				</Modal.Title> */}
			</Modal.Header>
			<Modal.Body>
				<div style={{ display: "flex", justifyContent: "space-between", padding: "20px 20px" }}>
					<div
						class="financing-module"
						style={{
							boxSizing: "border-box",
							margin: "0px",
							textAlign: "left",
							borderWidth: "5px",
							borderStyle: "solid",
							borderColor: "#509e2f",
							width: "330px",
							borderRadius: "10px",
							paddingTop: "4px",
						}}
					>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/headers/header_320.jpg?v=1.0.1011"
								alt="Financing Options from GreenSky"
								tabindex="0"
							/>
						</div>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/product_headers/sunroom_product_header_320.jpg?v=1.0.1011"
								width="320"
								height="100"
								alt="Finance Your Sun Room Project"
								tabindex="0"
							/>
						</div>
						<div>
							<a
								href="https://portal.greenskycredit.com/MerchantLoanApplication?apptype=short&merchant=81013020&dealerplan=2521&channel=External-Button-03"
								target="_blank"
								tabindex="0"
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
								tabindex="0"
							/>
						</div>
					</div>

					<div
						class="financing-module"
						style={{
							boxSizing: "border-box",
							margin: "0px",
							textAlign: "left",
							borderWidth: "5px",
							borderStyle: "solid",
							borderColor: "#509e2f",
							width: "330px",
							borderRadius: "10px",
							paddingTop: "4px",
						}}
					>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/headers/header_320.jpg?v=1.0.1011"
								alt="Financing Options from GreenSky"
								tabindex="0"
							/>
						</div>
						<div>
							<img
								src="https://www.greensky.com/merchantkit/images/finance_buttons/product_headers/windows_product_header_320.jpg?v=1.0.1011"
								width="320"
								height="100"
								alt="Finance Your Window Project"
								tabindex="0"
							/>
						</div>
						<div>
							<a
								href="https://portal.greenskycredit.com/MerchantLoanApplication?apptype=short&merchant=81013020&dealerplan=6096&channel=External-Button-03"
								target="_blank"
								tabindex="0"
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
								tabindex="0"
							/>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default Financing;
