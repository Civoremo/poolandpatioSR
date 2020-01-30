import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const BadgesDiv = styled.div`
	/* background-color: lightgreen; */
	/* min-height: 125px; */
`;

const Badges = props => {
	return (
		<BadgesDiv>
			<Container>
				<div
					style={{
						marginBottom: "20px",
						marginTop: "40px",
						display: "flex",
						// flexDirection: "column",
						justifyContent: "space-around",
						alignItems: "center",
						minHeight: "125px",
						// border: "1px solid red",
						flexWrap: "wrap",
					}}
				>
					<div
						style={{
							// border: "1px solid blue",
							minWidth: "20%",
							minHeight: "90px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "10px 0",
						}}
					>
						<a
							id="bbblink"
							className="ruhzbum"
							href="https://www.bbb.org/us/fl/orlando/profile/screen-repair/pool-and-patio-screen-repair-0733-90324909#bbbseal"
							title="Pool & Patio Screen Repair, Screen Repair, Orlando, FL"
							style={{
								display: "block",
								position: "relative",
								overflow: "hidden",
								width: "150px",
								height: "68px",
								margin: "0px",
								padding: "0px",
							}}
						>
							<img
								style={{ padding: "0px", border: "none" }}
								id="bbblinkimg"
								src="https://seal-centralflorida.bbb.org/logo/ruhzbum/pool-and-patio-screen-repair-90324909.png"
								width="300"
								height="68"
								alt="Pool & Patio Screen Repair, Screen Repair, Orlando, FL"
							/>
						</a>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							minWidth: "80%",
							margin: "10px 0",
							// border: "1px solid green",
						}}
					>
						<a
							href="https://www.homeadvisor.com/rated.PoolPatioScreenRepair.52286437.html"
							style={{ display: "block", margin: "0 auto" }}
						>
							<img
								alt="HomeAdvisor Screened Pro"
								style={{ display: "block", width: "90px" }}
								src="https://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c"
							/>
						</a>
						<a
							href="https://www.homeadvisor.com/c.Swimming-Pools.Orlando.FL.-12070.html#spid=52286437"
							style={{ display: "block", margin: "0 auto" }}
						>
							<img
								alt="HomeAdvisor Top Rated Service"
								style={{ display: "block", width: "75px" }}
								src="https://www.homeadvisor.com/images/sp-badges/toprated-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c"
							/>
						</a>
						<a
							href="https://www.homeadvisor.com/c.Swimming-Pools.Orlando.FL.-12070.html#spid=52286437"
							style={{ display: "block", margin: "0 auto" }}
						>
							<img
								alt="HomeAdvisor Elite Service Award - Pool & Patio Screen Repair"
								style={{ display: "block", width: "75px" }}
								src="https://www.homeadvisor.com/images/sp-badges/elite-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c"
							/>
						</a>
						<a
							href="https://www.homeadvisor.com/rated.PoolPatioScreenRepair.52286437.html"
							style={{ display: "block", margin: "0 auto" }}
						>
							<img
								alt="Screened & Approved HomeAdvisor Pro"
								style={{ display: "block", width: "75px" }}
								src="https://www.homeadvisor.com/images/sp-badges/3year-solid-border.png?sp=52286437&key=e44235517ac1e785d1c17c477b5bfd2c"
							/>
						</a>
					</div>
				</div>
			</Container>
		</BadgesDiv>
	);
};

export default Badges;
