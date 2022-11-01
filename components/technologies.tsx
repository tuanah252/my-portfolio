import React from 'react';
import { motion, Variants } from 'framer-motion';
import Imagesicon from '../components/imagesicon';
import Button from '../components/button';

type Props = {};
const infoImage: Variants = {
	offscreen: {
		scale: 0,
	},
	onscreen: {
		rotate: 360,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 260,
			damping: 20,
			duration: 1,
		},
	},
};
const technologiesRight: Variants = {
	offscreen: {
		x: 1200,
	},
	onscreen: {
		x: 0,
		transition: {
			bounce: 0.2,
			duration: 2,
		},
	},
};
const technologiesleft: Variants = {
	offscreen: {
		x: -1200,
	},
	onscreen: {
		x: 0,
		transition: {
			bounce: 0.2,
			duration: 2,
		},
	},
};
function technologies({}: Props) {
	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true }}
			className='skills overflow-hidden border-[#7B4AE2]/20 mb-24 border-b-2 border-t-2  w-full flex flex-col justify-center items-center'>
			<motion.div variants={infoImage}>
				<Button text='✨ Experience' width='w-40' />
			</motion.div>
			<motion.h2
				variants={technologiesRight}
				className='text-5xl mb-10 w-fit bold font-bold m-0'>
				Technologies
			</motion.h2>
			<motion.p
				variants={technologiesleft}
				className='mb-10 font-bold opacity-50 text-lg leading-6'>
				These are techs that i use to improve my skills daily
			</motion.p>
			<motion.div variants={technologiesRight}>
				<Imagesicon />
			</motion.div>
		</motion.div>
	);
}

export default technologies;
