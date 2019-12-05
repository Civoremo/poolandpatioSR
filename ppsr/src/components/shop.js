import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import DomeShop from "./domeShop";
import GabelShop from "./gabelShop";

const ShopPage = props => {
	const { lgShop, toggleShopModal, setSignIn } = props;

	const [domeCage, setDomeCage] = useState(true);
	const [gabelCage, setGabelCage] = useState(false);

	return (
		<div>
			<Modal size="lg" show={lgShop} onHide={() => toggleShopModal()}>
				<Modal.Header closeButton>
					<Modal.Title
						id="example-modal-sizes-title-sm"
						style={{ width: "100%", textAlign: "center" }}
					>
						Pricing
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div
						style={{
							margin: "0 0 20px 0",
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
						}}
					>
						<Button onClick={() => (setDomeCage(true), setGabelCage(false))}>Dome Cage</Button>
						<Button onClick={() => (setGabelCage(true), setDomeCage(false))}>Gabe Cage</Button>
					</div>
					<div style={{ display: domeCage ? "block" : "none" }}>
						<DomeShop setSignIn={setSignIn} />
					</div>
					<div style={{ display: gabelCage ? "block" : "none" }}>
						<GabelShop setSignIn={setSignIn} />
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ShopPage;
