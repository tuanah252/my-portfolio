import React, { MouseEventHandler } from 'react';
import logo from '../public/logo.svg';
import Image from 'next/image';
import bs from '../public/bsheeb.png';
import Link from 'next/link';
type props = {
	info: string;
	home: string;
};

const Navbar: React.FC<props> = (props) => {
	return (
		<div className='nav w-full m-0 flex flex-row justify-between  rounded-2xl bg-[#7B4AE2]/20 content-center self-center pr-6 pl-3'>
			<div className=' relative h-12 w-12 self-center'>
				<Image
					className='self-center justify-center'
					src={bs}
					alt='logo'
					fill></Image>
			</div>

			<div className='flex flex-row text-white/50  self-center font-bold text-lg h-16'>
				<Link
					href='/#'
					className='cursor-pointer ml-4 h-fit self-center'>
					<p className=' h-fit self-center'>{props.home}</p>
				</Link>
				<Link
					href='/howibuiltthis'
					className='cursor-pointer ml-4 h-fit self-center'>
					<p className=' h-fit self-center'>{props.info}</p>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
