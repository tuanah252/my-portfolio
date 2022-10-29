import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

export default function Document({}: Props) {
	return (
		<Html>
			<Head>
				<link
					rel='stylesheet'
					href='https://use.typekit.net/ese3zou.css'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
