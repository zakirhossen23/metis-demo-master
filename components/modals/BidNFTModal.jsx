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
}) {
	const [Amount, AmountInput] = UseFormInput({
		type: 'text',
		placeholder: 'Amount',
	});

	async function bidNFT() {
		const result = await contract[
			'safeTransferFrom(address,address,uint256)'
		](senderAddress, receiverAddress, tokenId);

		console.log(result);
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Bid NFT
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Form>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Bid Amount in ETH</Form.Label>
						{AmountInput}
					</Form.Group>
					<div className="d-grid">
						<Button variant="primary" onClick={bidNFT}>
							Bid NFT
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
