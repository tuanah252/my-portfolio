import React from 'react';
import figma from '../public/Figma.svg';
import git from '../public/git.svg';
import github2 from '../public/Github2.svg';
import htmlcss from '../public/htmlcss.svg';
import javascript from '../public/Javascript.svg';
import insomnia from '../public/Insomnia.svg';
import react from '../public/React.svg';
import tailwindcss from '../public/Tailwindcss.svg';
import typescript from '../public/Typescript.svg';
import scss from '../public/Shape.svg';
import next from '../public/Nextjs.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function Imagesicon({}: Props) {
	return (
		<motion.div className='flex flex-row gap-10'>
			<Image src={react} alt='icon' />
			<Image src={javascript} alt='icon' />
			<Image src={typescript} alt='icon' />
			<Image src={tailwindcss} alt='icon' />
			<Image src={next} alt='icon' />
			<Image src={scss} alt='icon' />
			<Image src={htmlcss} alt='icon' />
			<Image src={figma} alt='icon' />
			<Image src={github2} alt='icon' />
			<Image src={git} alt='icon' />
			<Image src={insomnia} alt='icon' />
		</motion.div>
	);
}
