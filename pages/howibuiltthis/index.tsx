import React from 'react';
import Navbar from '../../components/navBar';
import Head from 'next/head';
type Props = {};

export default function index({}: Props) {
	return (
		<div className='bg-[#090E16] flex justify-center '>
			<Head>
				<title>How I Build</title>
				<link rel='icon' href='/bsheeb.png' />
				<link
					rel='stylesheet'
					href='https://use.typekit.net/ese3zou.css'
				/>
			</Head>
			<main className='text-center  flex flex-col conter-center '>
				<Navbar info='How I Built This' home='Home' />

				<h1>Under Development</h1>
			</main>
		</div>
	);
}
