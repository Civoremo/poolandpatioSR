import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const ItemContainer = styled.div`
	border: 1px solid red;
	width: 100%;
	height: 150px;
	display: flex;
`;

const ItemImage = styled.div`
	border: 1px solid blue;
	width: 30%;
	// height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: yellow;
`;

const ItemDescription = styled.div`
	border: 1px solid yellow;
	width: 40%;
	// height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ItemPriceDiv = styled.div`
	border: 1px solid green;
	width: 30%;
	// height: 150px;
	display: ${props => (props.showing !== null ? "flex" : "none")};
	justify-content: center;
	align-items: center;
`;

const PriceLoginDiv = styled.div`
	border: 1px solid grey;
	width: 30%;
	// height: 150px;
	display: ${props => (props.showing === null ? "flex" : "none")};
	justify-content: center;
	align-items: center;
`;

const ShopPage = props => {
	const { lgShop, toggleShopModal } = props;

	return (
		<div>
			<Modal size="lg" show={lgShop} onHide={() => toggleShopModal()}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<ItemContainer>
						<ItemImage>image</ItemImage>
						<ItemDescription>Top Panel Repair</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
						<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
							<Button type="button">Log in</Button>
						</PriceLoginDiv>
					</ItemContainer>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ShopPage;
