import React from "react";
import Container from "react-bootstrap/Container";
// import styled from 'styled-components';

const AboutUs = () => {
	return (
		<section id="about" style={{ padding: "40px 0" }}>
			<Container>
				<div style={{ fontSize: "2rem", marginBottom: "15px" }}>
					<h2 style={{ paddingLeft: "20px", fontFamily: "Raleway" }}>About Us</h2>
					<div style={{ borderBottom: "2px solid #DFDFDF", width: "100%" }} />
				</div>
				<div>
					<p
						style={{
							fontSize: "1.6rem",
							letterSpacing: "2px",
							marginBottom: "35px",
							padding: "0 20px",
							fontFamily: "Roboto",
							width: "100%",
							textAlign: "center",
						}}
					>
						<span style={{ color: "#1759AA", fontWeight: "bold" }}>
							We put you first above all and hope that your experience will prompt you to stay with
							us for any future needs.
						</span>
					</p>
				</div>
			</Container>

			<Container>
				<div style={{ fontFamily: "Roboto, sans-serif" }}>
					<p>
						Pool & Patio Screen Repair is a local family business with many years of experience
						serving Orlando and surrounding area. Our company was founded on the most important
						principles: being honest with the customer, educating the customer & giving them the
						most for their money. We achieve this by providing a quality install while installing a
						quality product. We have learned the trade from our father at an early age and went on
						to form the current company. Our company has grown, but the install process hasn't
						changed. As always, we only use top rated products with skilled professionals that
						maintain the values of the operation for the beginning to the end, under the active
						involvement of owner.
					</p>
					<p>
						We take great pride in providing quality work at competitive prices. We show up on time
						every time and provide quality service. With a longstanding tradition of care and
						accuracy, our customers report that working with our company was the best decision they
						could have made for their re-screening services.
					</p>
				</div>
			</Container>
		</section>
	);
};

export default AboutUs;
