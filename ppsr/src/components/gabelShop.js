import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import BottomPanel from "./images/gabel/BottomPanel.jpg";
import DoorPanel from "./images/gabel/DoorPanels.jpg";
import RiserPanel from "./images/gabel/RiserPanel.jpg";
import RiserPanel2 from "./images/gabel/RiserPanel2.jpg";
import RoofPanel from "./images/gabel/RoofPanel.jpg";
import RoofPanel2 from "./images/gabel/RoofPanel2.jpg";
import SidePanel from "./images/gabel/SidePanel.jpg";

const ItemContainer = styled.div`
	/* border: 1px solid red; */
	width: 100%;
	height: 150px;
	display: flex;
`;

const ItemImage = styled.div`
	/* border: 1px solid blue; */
	width: 30%;
	/* height: 150px; */
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: green;
`;

const ItemDescription = styled.div`
	/* border: 1px solid yellow; */
	width: 40%;
	// height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ItemTitleh3 = styled.h3`
	font-size: 1.1rem;
	border-bottom: 1px solid grey;
`;

const ItemAlsoAvailableDiv = styled.div`
	font-size: 0.7rem;
	padding: 0 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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

const GabelShop = props => {
	const { setSignIn } = props;
	return (
		<div>
			{/* Door Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${DoorPanel}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel Door Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>

			{/* Bottom Panel */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${BottomPanel}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel Bottom Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>

			{/* Side Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${SidePanel}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel Side Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>

			{/* Riser Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${RiserPanel}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel Low Riser Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>

			{/* Riser Panel 2  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${RiserPanel2}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel High Riser Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>

			{/* Roof Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${RoofPanel}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel Low Roof Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
					<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>$ 79.95</ItemPriceDiv>
					<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
						<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
						<Button type="button" onClick={() => setSignIn(true)}>
							Log in
						</Button>
					</PriceLoginDiv>
				</ItemContainer>
			</Card>

			{/* Roof Panel 2 */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						style={{
							background: `url(${RoofPanel2}) center center no-repeat`,
							backgroundSize: "cover",
						}}
					></ItemImage>
					<ItemDescription>
						<ItemTitleh3>Gabel High Roof Panel</ItemTitleh3>
						<p style={{ fontSize: ".9rem" }}>Standard 18x14 Screen</p>
						<ItemAlsoAvailableDiv>
							<span style={{ fontWeight: "bold" }}>* Available:</span>
							<span>TuffScreen</span>
							<span>Florida Glass</span>
							<span>NoSeemUms Screen</span>
							<span>Solar Screen</span>
						</ItemAlsoAvailableDiv>
					</ItemDescription>
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

export default GabelShop;
