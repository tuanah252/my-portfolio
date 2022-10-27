import React from 'react';
import logo from '../public/logo.svg';
import Image from 'next/image';

type props = {
	info: string;
	projects: string;
	skills: string;
	contact: string;
};

const Navbar: React.FC<props> = (props) => {
	return (
		<div className='nav w-full m-0 flex flex-row justify-between rounded-2xl h-16 bg-[#7B4AE2]/20 content-center self-center pr-6 pl-6'>
			<div className='self-center'>logo here</div>
			<div className='flex flex-row text-white/50  self-center font-normal text-lg h-16'>
				<p className='ml-4 h-fit self-center'>{props.info}</p>
				<p className='ml-4 h-fit self-center'>{props.projects}</p>
				<p className='ml-4 h-fit self-center'>{props.skills}</p>
				<p className='ml-4 h-fit self-center'>{props.contact}</p>
			</div>
		</div>
	);
};

export default Navbar;
