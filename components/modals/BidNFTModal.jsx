import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import UseFormInput from '../UseFormInput';

export default function BidNFTModal({
	show,
	onHide,
	contract,
	senderAddress,
	tokenId,
	eventId,
	type

}) {
	const [Amount, AmountInput] = UseFormInput({
		type: 'text',
		placeholder: 'Amount',
	});

	async function bidNFT() {
		const tokenUri = await contract.tokenURI(tokenId);
		var parsed = await JSON.parse(tokenUri);
		if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
			parsed['properties']['price']['description'] = Amount;
			parsed['properties']['higherbidadd']['description'] = senderAddress;

		}
		const result = await contract.createBid(tokenId, Amount, JSON.stringify(parsed), senderAddress, eventId);


		console.log(result);
		var getallbids = await contract.allbidstoken(1);
		console.log(getallbids);
		window.document.getElementsByClassName("btn-close")[0].click();
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				{(type == "Cryptopunk") ? (
					<Modal.Title id="contained-modal-title-vcenter">
						Bid Cryptopunk
					</Modal.Title>) : (
					<Modal.Title id="contained-modal-title-vcenter">
						Bid NFT
					</Modal.Title>
				)}
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Form>

					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Bid Amount in ETH</Form.Label>
						{AmountInput}
					</Form.Group>
					<div className="d-grid">

						{(type == "Cryptopunk") ? (
							<Button variant="primary" onClick={bidNFT}>
								Bid Cryptopunk
							</Button>) : (
							<Button variant="primary" onClick={bidNFT}>
								Bid NFT
							</Button>
						)}
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
