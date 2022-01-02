import React from 'react';

import Container from 'react-bootstrap/Container';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ user, children }: any) {
	return (
		<>
			<Header user={user} />
			<main className="mb-5">
				{children}
			</main>
		</>
	);
}
