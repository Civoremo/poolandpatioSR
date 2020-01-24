import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import BottomPanel from "./images/dome/Bottom_panel.jpg";
import DoorPanel from "./images/dome/Door_size_panels.jpg";
import RiserPanel from "./images/dome/Riser_Panel.jpg";
import RoofPanel from "./images/dome/Roof_panel.jpg";
import SidePanel from "./images/dome/Side_panel.jpg";

const ItemContainer = styled.div`
	/* border: 1px solid red; */
	width: 100%;
	height: 150px;
	display: flex;

	@media (max-width: 991px) {
		flex-direction: column;
		height: auto;
	}
`;

const ItemImage = styled.img`
	/* border: 1px solid blue; */
	width: 30%;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #163e98;

	@media (max-width: 991px) {
		width: 90%;
		height: 220px;
		margin: 0 auto;
	}
`;

const DescriptionPriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;
	/* border: 1px solid red; */

	@media (max-width: 991px) {
		width: 100%;
	}
`;

const ItemDescription = styled.div`
	/* border: 1px solid yellow; */
	width: 70%;
	// height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: 1px solid blue; */

	@media (max-width: 991px) {
		width: 50%;
	}
`;

const ItemTitleh3 = styled.h3`
	font-size: 1.1rem;
	border-bottom: 1px solid grey;

	@media (max-width: 991px) {
		font-size: 0.9rem;
		margin-top: 15px;
	}
`;

const StandardTextP = styled.p`
	font-size: 0.9rem;

	@media (max-width: 991px) {
		font-size: 0.7rem;
	}
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
	height: 150px;
	display: ${props => (props.showing !== null ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 0.9rem;
	/* padding-top: 30px; */

	@media (max-width: 991px) {
		font-size: 0.7rem;
		width: 50%;
	}
`;

const AlsoAvailableItemPriceDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* margin-top: 20px; */
	padding-top: 30px;
	font-size: 0.7rem;

	@media (max-width: 991px) {
		/* font-size: 0.55rem; */
	}
`;

const PriceLoginDiv = styled.div`
	/* border: 1px solid grey; */
	width: 30%;
	// height: 150px;
	display: ${props => (props.showing === null ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 991px) {
		font-size: 0.7rem;
		width: 50%;
	}
`;

const DomeShop = props => {
	const { setSignIn } = props;
	return (
		<div>
			{/* Door Panel */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage src={DoorPanel} alt="Dome Pool Cage with Emphasis On Door Panel"></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Dome Door Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>Also Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Solar Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price/s</ItemTitleh3>
							<div>Standard - $49.99</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $69.99</span>
								<span>Florida Glass - $69.99</span>
								<span>NoSeemUms - $59.99</span>
								<span>Solar Screen - $79.99</span>
							</AlsoAvailableItemPriceDiv>
						</ItemPriceDiv>
						<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
							<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
							<Button type="button" onClick={() => setSignIn(true)}>
								Log in
							</Button>
						</PriceLoginDiv>
					</DescriptionPriceContainer>
				</ItemContainer>
			</Card>

			{/* Bottom Panel */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						src={BottomPanel}
						alt="Dome Pool Cage with Emphasis on Bottom Panel"
					></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Dome Bottom Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>Also Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Solar Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price/s</ItemTitleh3>
							<div>Standard - $49.99</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $69.99</span>
								<span>Florida Glass - $69.99</span>
								<span>NoSeemUms - $59.99</span>
								<span>Solar Screen - $79.99</span>
							</AlsoAvailableItemPriceDiv>
						</ItemPriceDiv>
						<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
							<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
							<Button type="button" onClick={() => setSignIn(true)}>
								Log in
							</Button>
						</PriceLoginDiv>
					</DescriptionPriceContainer>
				</ItemContainer>
			</Card>

			{/* Side Panel */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage src={SidePanel} alt="Dome Pool Cage with Emphasis on Side Panel"></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Dome Side Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>Also Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Solar Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price/s</ItemTitleh3>
							<div>Standard - $49.99</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $69.99</span>
								<span>Florida Glass - $69.99</span>
								<span>NoSeemUms - $59.99</span>
								<span>Solar Screen - $79.99</span>
							</AlsoAvailableItemPriceDiv>
						</ItemPriceDiv>
						<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
							<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
							<Button type="button" onClick={() => setSignIn(true)}>
								Log in
							</Button>
						</PriceLoginDiv>
					</DescriptionPriceContainer>
				</ItemContainer>
			</Card>

			{/* Riser Panel */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage src={RiserPanel} alt="Dome Pool Cage with Emphasis on Riser Panel"></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Dome Riser Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>Also Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Solar Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price/s</ItemTitleh3>
							<div>Standard - $49.99</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $69.99</span>
								<span>Florida Glass - $69.99</span>
								<span>NoSeemUms - $59.99</span>
								<span>Solar Screen - $79.99</span>
							</AlsoAvailableItemPriceDiv>
						</ItemPriceDiv>
						<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
							<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
							<Button type="button" onClick={() => setSignIn(true)}>
								Log in
							</Button>
						</PriceLoginDiv>
					</DescriptionPriceContainer>
				</ItemContainer>
			</Card>

			{/* Roof Panel */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage src={RoofPanel} alt="Dome Pool Cage with Emphasis on Roof Panel"></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Dome Roof Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>Also Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Solar Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price/s</ItemTitleh3>
							<div>Standard - $49.99</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $69.99</span>
								<span>Florida Glass - $69.99</span>
								<span>NoSeemUms - $59.99</span>
								<span>Solar Screen - $79.99</span>
							</AlsoAvailableItemPriceDiv>
						</ItemPriceDiv>
						<PriceLoginDiv showing={localStorage.getItem("ppsr_user")}>
							<div style={{ marginBottom: "10px", fontSize: ".8rem" }}>Login to view price</div>
							<Button type="button" onClick={() => setSignIn(true)}>
								Log in
							</Button>
						</PriceLoginDiv>
					</DescriptionPriceContainer>
				</ItemContainer>
			</Card>
		</div>
	);
};

export default DomeShop;
