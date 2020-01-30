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

const GabelShop = props => {
	const { setSignIn } = props;
	return (
		<div>
			{/* Door Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage src={DoorPanel} alt="Gable Pool Cage with Emphasis on Door Panel"></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable Door Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Pet Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $30</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $60</span>
								<span>Florida Glass - $60</span>
								<span>NoSeemUms - $55</span>
								<span>Pet Screen - $75</span>
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
						alt="Gable Pool Cage with Emphasis on Bottom Panel"
					></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable Bottom Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
								<span>Pet Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $40</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $70</span>
								<span>Florida Glass - $70</span>
								<span>NoSeemUms - $65</span>
								<span>Pet Screen - $85</span>
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

			{/* Side Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage src={SidePanel} alt="Gable Pool Cage with Emphasis on Side Panel"></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable Side Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>Florida Glass</span>
								<span>NoSeemUms Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $50</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $80</span>
								<span>Florida Glass - $80</span>
								<span>NoSeemUms - $75</span>
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

			{/* Riser Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						src={RiserPanel}
						alt="Gable Pool Cage with Emphasis on Lower Riser Panel"
					></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable Low Riser Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>NoSeemUms Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $60</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $90</span>
								<span>NoSeemUms - $85</span>
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

			{/* Riser Panel 2  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						src={RiserPanel2}
						alt="Gable Pool Cage with Emphasis on Higher Riser Panel"
					></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable High Riser Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>NoSeemUms Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $75</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $105</span>
								<span>NoSeemUms - $100</span>
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

			{/* Roof Panel  */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						src={RoofPanel}
						alt="Gable Pool Cage with Emphasis on Low Roof Panel"
					></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable Low Roof Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>NoSeemUms Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $70</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $100</span>
								<span>NoSeemUms - $95</span>
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

			{/* Roof Panel 2 */}
			<Card style={{ padding: "10px 10px", margin: "5px 0" }}>
				<ItemContainer>
					<ItemImage
						src={RoofPanel2}
						alt="Gable Pool Cage with Emphasis on High Roof Panel"
					></ItemImage>
					<DescriptionPriceContainer>
						<ItemDescription>
							<ItemTitleh3>Gable High Roof Panel</ItemTitleh3>
							<StandardTextP>Standard 18x14 Screen</StandardTextP>
							<ItemAlsoAvailableDiv>
								<span style={{ fontWeight: "bold" }}>* Available:</span>
								<span>TuffScreen</span>
								<span>NoSeemUms Screen</span>
							</ItemAlsoAvailableDiv>
						</ItemDescription>
						<ItemPriceDiv showing={localStorage.getItem("ppsr_user")}>
							<ItemTitleh3>Price</ItemTitleh3>
							<div>Standard - $80</div>
							<AlsoAvailableItemPriceDiv>
								<span>TuffScreen - $110</span>
								<span>NoSeemUms - $105</span>
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

export default GabelShop;
