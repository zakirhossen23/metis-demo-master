import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Home" />
				<link rel="icon" href="/logo.svg" />
			</Head>

			<Row>
				<Col>
					<div className="text-center">
						<h1>Donate</h1>
					</div>
				</Col>
			</Row>

			<Row xs={1} md={2}>
				<Col className="mt-3">
					<Link href="/projects/erc-721">
						<a>
							<Card>
								<Card.Body>
									<Card.Title>NFT</Card.Title>
								</Card.Body>
							</Card>
						</a>
					</Link>
				</Col>
				<Col className="mt-3">
					<Link href="/projects/Cryptopunks">
						<a>
							<Card>
								<Card.Body>
									<Card.Title>Cryptopunks</Card.Title>

								</Card.Body>
							</Card>
						</a>
					</Link>
				</Col>
			</Row>
		</>
	);
}
