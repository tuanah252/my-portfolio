import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import github from '../public/github.svg';
import vercel2 from '../public/vercel2.png';
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
	variants?: any;
	link: string;
	link2: string;
	pos: number;
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
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6 '>
					{cn1}
				</p>
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6 '>
					{cn2}
				</p>
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6 '>
					{cn3}
				</p>
				<p className='mb-3 font-bold  opacity-50 text-lg leading-6 '>
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
	variants,
	link,
	link2,
	pos,
}: Props) {
	const [position, setPosition] = useState(540);
	const onRelease = () => {
		setPosition(pos);
	};
	const onHoverEnd = () => {
		setPosition(540);
	};

	const cardUp: Variants = {
		offscreen: {
			y: 620,
		},
		onscreen: {
			y: position,
			transition: {
				type: 'spring',
				bounce: 0.2,
				duration: 1,
			},
		},
		whiletap: {
			y: 620,
			transition: {
				bounce: 0.2,
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			initial='offscreen'
			whileHover='onscreen'
			drag='y'
			dragConstraints={{ top: 50 }}
			whileTap='whiletap'
			onTap={onRelease}
			onHoverEnd={onHoverEnd}
			variants={cardUp}
			className='flex flex-col content-center project bg-[#201A3F] rounded-t-3xl'>
			<Image
				draggable='false'
				src={src}
				alt='project'
				width={440}
				height={400}
				className='rounded-t-3xl'
			/>
			<div className='p-3'>
				<h2 className='font-extrabold text-3xl'>{name}</h2>
				<div className='flex flex-row justify-center gap-3'>
					{isthree(
						num,
						projects.cn1,
						projects.cn2,
						projects.cn3,
						projects.cn4
					)}
				</div>
				<p className='text-start mb-3 opacity-50 text-lg leading-6 mb-6'>
					{info}
				</p>
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
