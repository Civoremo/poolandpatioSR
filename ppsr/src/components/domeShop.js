import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const ItemContainer = styled.div`
	/* border: 1px solid red; */
	width: 100%;
	height: 150px;
	display: flex;
`;

const ItemImage = styled.div`
	/* border: 1px solid blue; */
	width: 30%;
	// height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #163e98;
`;

const ItemDescription = styled.div`
	/* border: 1px solid yellow; */
	width: 40%;
	// height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ItemPriceDiv = styled.div`
	/* border: 1px solid green; */
	width: 30%;
	// height: 150px;
	display: ${props => (props.showing !== null ? "flex" : "none")};
	justify-content: center;
	align-items: center;
`;

const PriceLoginDiv = styled.div`
	/* border: 1px solid grey; */
	width: 30%;
	// height: 150px;
	display: ${props => (props.showing === null ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const DomeShop = props => {
	const { setSignIn } = props;
	return (
		<div>
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage>image</ItemImage>
					<ItemDescription>Top Panel Repair</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>
		</div>
	);
};

export default DomeShop;
