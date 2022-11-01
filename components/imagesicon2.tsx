import React from 'react';
import figma from '../public/Figma.svg';
import git from '../public/git.svg';
import github2 from '../public/Github2.svg';
import htmlcss from '../public/htmlcss.svg';
import javascript from '../public/Javascript.svg';
import insomnia from '../public/Insomnia.svg';
import react from '../public/React.svg';
import tailwindcss from '../public/TailwindCSS.svg';
import typescript from '../public/TypeScript.svg';
import scss from '../public/Shape.svg';
import next from '../public/Nextjs.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function Imagesicon({}: Props) {
	const icon = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
		},
	};

	return (
		<motion.div className='outter overflow-hidden mt-24'>
			<motion.div
				className='inner justify-center flex gap-10 '
				drag='x'
				dragConstraints={{ right: 360, left: -360 }}>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={react}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={javascript}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={typescript}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={tailwindcss}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={next}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={scss}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={htmlcss}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={figma}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={github2}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={git}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
				<motion.div className='min-w-fit'>
					<Image
						draggable={false}
						className='cursor-pointer hover:opacity-50'
						src={insomnia}
						alt='icon'
						width={64}
						height={64}
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
