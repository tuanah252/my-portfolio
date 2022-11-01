import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { SiGithub } from 'react-icons/si';
import { IoRocketOutline } from 'react-icons/io5';

type Props = {
	src: any;
	name: string;
	num: number;
	projects: {
		cn1: string;
		cn2: string;
		cn3: string;
		cn4?: string;
	};
	info: string;

	link: string;
	link2: string;
};

function isthree(
	num: number,
	cn1: string,
	cn2: string,
	cn3: string,
	cn4?: string
) {
	if (num === 3) {
		return (
			<>
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6  '>
					{cn1}
				</p>
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6 '>
					{cn2}
				</p>
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6 '>
					{cn3}
				</p>
			</>
		);
	} else {
		return (
			<>
				<p className='mb-3 font-bold type opacity-50 text-lg leading-6 '>
					{cn1}
				</p>
				<p className='mb-3 font-bold type opacity-50 text-lg leading-6 '>
					{cn2}
				</p>
				<p className='mb-3 font-bold type opacity-50 text-lg leading-6 '>
					{cn3}
				</p>
				<p className='mb-3 font-bold type opacity-50 text-lg leading-6 '>
					{cn4}
				</p>
			</>
		);
	}
}

export default function projectItem({
	src,
	name,
	num,
	projects,
	info,
	link,
	link2,
}: Props) {
	return (
		<motion.div className='flex drop-shadow-2xl flex-col content-center pt-6 project2 bg-[#090e16] justify-between rounded-3xl z-20'>
			<Image
				draggable='false'
				src={src}
				alt='project'
				width={280}
				height={143}
				className='rounded-2xl self-center '
			/>
			<div className='p-3 '>
				<h2 className='font-extrabold text-3xl mb-6'>{name}</h2>
				<div className='flex flex-row justify-center gap-3'>
					{isthree(
						num,
						projects.cn1,
						projects.cn2,
						projects.cn3,
						projects.cn4
					)}
				</div>
				<p className='text-start opacity-50 text-lg leading-6 mb-6'>
					{info}
				</p>
			</div>
			<div className='p-3'>
				<div className='w-full flex flex-row items-center justify-center gap-6'>
					<a target='_blank' href={link} rel='noopener noreferrer'>
						<SiGithub
							size={36}
							className='cursor-pointer opacity-40 hover:opacity-80'
						/>
					</a>
					<a target='_blank' href={link2} rel='noopener noreferrer'>
						<IoRocketOutline
							color='white'
							size={38}
							className='cursor-pointer opacity-40 hover:opacity-80'
						/>
					</a>
				</div>
			</div>
		</motion.div>
	);
}
