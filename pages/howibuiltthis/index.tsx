import React from 'react';
import Navbar from '../../components/navBar';
import Head from 'next/head';
import Image from 'next/image';
type Props = {};

export default function index({}: Props) {
	return (
		<div className='bg-[#090E16] flex justify-center '>
			<Head>
				<title>How I Build</title>
				<link rel='icon' href='/bsheeb.png' />
			</Head>
			<main className='text-center  flex flex-col justify-center items-center conter-center '>
				<Navbar info='How I Built This' home='Home' />

				<h1>Không nói cho cay</h1>
				<Image
					unoptimized={true}
					className=' z-0 '
					src='https://i.gifer.com/3vIU.gif'
					alt='cat'
					width={200}
					height={200}></Image>
			</main>
		</div>
	);
}
