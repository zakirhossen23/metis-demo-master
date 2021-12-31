import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import UseFormInput from '../UseFormInput';

export default function CreateNFTModal({
	show,
	onHide,
	contract,
	senderAddress,
	type,
}) {
	console.log(type);
	const [name, nameInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter name',
	});
	const [description, descriptionInput] = UseFormInput({
		as: 'textarea',
		placeholder: 'Enter description',
	});
	const [url, urlInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter image url',
	});
	const [price, priceInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter Price',
	});
	const [NFTaddress, NFTaddressInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter NFT address',
	});
	const [Cryptopunkaddress, CryptopunkaddressInput] = UseFormInput({
		type: 'text',
		placeholder: 'Enter Cryptopunk address',
	});
	async function createNFT() {
		var Metistype = "NFT";
		var tokenAddress = NFTaddress;
		if ("Cryptopunk" == type) {
			Metistype = "Cryptopunk";
			tokenAddress = Cryptopunkaddress;
		}
		const createdObject = {
			title: 'Asset Metadata',
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: name,
				},
				description: {
					type: 'string',
					description: description,
				},
				image: {
					type: 'string',
					description: url,
				},
				price: {
					type: 'string',
					description: price
				},
				typeimg: {
					type: 'string',
					description: Metistype
				},
				nftaddress: {
					type: 'string',
					description: tokenAddress
				},
				higherbidadd: {
					type: 'string',
					description: ""
				}
			},
			bids: []
		};

		const result = await contract.claimToken(
			senderAddress,
			JSON.stringify(createdObject)
		);

		console.log(result);
		window.document.getElementsByClassName("btn-close")[0].click();
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				{(type == "Cryptopunk") ? (
					<Modal.Title id="contained-modal-title-vcenter">
						Create Cryptopunk
					</Modal.Title>)
					: (
						<Modal.Title id="contained-modal-title-vcenter">
							Create NFT
						</Modal.Title>)}
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Form>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Name</Form.Label>
						{nameInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupName">
						<Form.Label>Opening price in ETH</Form.Label>
						{priceInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupDescription">
						<Form.Label>Description</Form.Label>
						{descriptionInput}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupImageUrl">
						<Form.Label>Image URL</Form.Label>
						{urlInput}
					</Form.Group>
					{(type == "Cryptopunk") ? (
						<Form.Group className="mb-3" controlId="formGroupImageUrl">
							<Form.Label>Cryptopunk address</Form.Label>
							{CryptopunkaddressInput}
						</Form.Group>
					) : (
						<Form.Group className="mb-3" controlId="formGroupImageUrl">
							<Form.Label>NFT address</Form.Label>
							{NFTaddressInput}
						</Form.Group>
					)

					}

					<div className="d-grid">
						{(type == "Cryptopunk") ? (
							<Button variant="primary" onClick={createNFT}>
								Create Cryptopunk
							</Button>)
							: (
								<Button variant="primary" onClick={createNFT}>
									Create NFT
								</Button>
							)}


					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

/*
{
	"title": "Asset Metadata",
	"type": "object",
	"properties": {
		"name": {
			"type": "string",
			"description": "Identifies the asset to which this NFT represents"
		},
		"description": {
			"type": "string",
			"description": "Describes the asset to which this NFT represents"
		},
		"image": {
			"type": "string",
			"description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
		}
	}
}
*/
