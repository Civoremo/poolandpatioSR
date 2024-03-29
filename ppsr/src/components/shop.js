import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import DomeShop from './domeShop';
import GabelShop from './gabelShop';

const CageSelectionSpan = styled.span`
	color: #3569e1;
	font-weight: bold;
	position: relative;
	width: 100px;
	height: 30px;
`;

const CageNameSpan = styled.span`
	position: absolute;

	:hover {
		font-size: 1.1rem;
		cursor: pointer;
		color: #3569e1;
	}
`;

const ShopPage = (props) => {
	const { lgShop, toggleShopModal, setSignIn } = props;

	const [ domeCage, setDomeCage ] = useState(true);
	const [ gabelCage, setGabelCage ] = useState(false);
	const [ cageData, setCageData ] = useState(null);

	useEffect(() => {
		axios({
			method: 'get',
			// mode: 'no-cors',
			url: `${process.env.REACT_APP_API_URL}/cages/all`,
			headers: {},
			data: {},
			responseType: 'json'
		})
			.then((result) => {
				// console.log('Cage Data:', result.data);
				setCageData(result.data);
			})
			.catch((err) => {
				console.log('Error loading cage data');
			});
	}, []);

	return (
		<div>
			<Modal size='lg' show={lgShop} onHide={() => toggleShopModal()} scrollable='true'>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-sm' style={{ width: '100%', textAlign: 'center' }}>
						Pricing
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div
						style={{
							margin: '0 0 20px 0',
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center'
						}}
					>
						<CageSelectionSpan
							onClick={() => {
								setDomeCage(true);
								setGabelCage(false);
							}}
						>
							<CageNameSpan>Dome Cage</CageNameSpan>
						</CageSelectionSpan>
						<CageSelectionSpan
							onClick={() => {
								setGabelCage(true);
								setDomeCage(false);
							}}
						>
							<CageNameSpan>Gable Cage</CageNameSpan>
						</CageSelectionSpan>
					</div>
					<div style={{ display: domeCage ? 'block' : 'none' }}>
						<DomeShop setSignIn={setSignIn} cageData={cageData} />
					</div>
					<div style={{ display: gabelCage ? 'block' : 'none' }}>
						<GabelShop setSignIn={setSignIn} cageData={cageData} />
					</div>
					<div style={{ textAlign: 'center', fontSize: '0.7rem' }}>
						Prices displayed are per panel and for one story enclosures only! Call for pricing on taller
						enclosures. Prices subject to change without notice.
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ShopPage;
