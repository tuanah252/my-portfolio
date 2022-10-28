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
		<motion.div className='flex flex-row gap-10'>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={react}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={javascript}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={typescript}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={tailwindcss}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={next}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={scss}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={htmlcss}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={figma}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={github2}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={git}
					alt='icon'
				/>
			</motion.div>
			<motion.div>
				<Image
					draggable={false}
					className='cursor-pointer hover:opacity-50'
					src={insomnia}
					alt='icon'
				/>
			</motion.div>
		</motion.div>
	);
}
