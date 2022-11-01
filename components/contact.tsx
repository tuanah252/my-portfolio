import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import email from '../public/email.svg';
import Button from '../components/button';
import copied from '../public/copied.svg';
import copy from '../public/copy.svg';
import up from '../public/arrowUp.svg';

type Props = {
	width?: string;
};

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
const contactUp: Variants = {
	offscreen: {
		y: 100,
	},
	onscreen: {
		y: 0,
		transition: {
			bounce: 0.2,
			duration: 2,
		},
	},
};
const contactDown: Variants = {
	offscreen: {
		y: -100,
	},
	onscreen: {
		y: 0,
		transition: {
			bounce: 0.2,
			duration: 2,
		},
	},
};
const scrollUp: MouseEventHandler<HTMLDivElement> | undefined = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

function contact({ width }: Props) {
	const [copier, setCopier] = useState(copy);
	const [mail, setMail] = useState('tuanah252@gmail.com');
	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true }}
			className='mt-2 mb-36 flex flex-col items-center contact overflow-hidden'>
			<motion.div variants={infoImage}>
				<Button text='📬 Contact' width='w-32' />
			</motion.div>
			<motion.div
				variants={contactDown}
				className='text-5xl mb-20 w-fit bold font-bold m-0'>
				Contact Info
			</motion.div>
			<motion.div
				variants={contactUp}
				className={`flex h-10 ${width} flex-row justify-center items-center `}>
				<div className='flex flex-row justify-between items-center gap-2'>
					<Image src={email} alt='email' />
					<p className='text-start text-[#7B4AE2]/60 text-lg leading-6 font-bold'>
						E-mail :
					</p>
				</div>
				<div className='flex flex-row justify-between items-center gap-2 '>
					<p className='text-start  opacity-50 text-lg leading-6 font-bold self-center'>
						{mail}
					</p>
					<Image
						onClick={() => {
							navigator.clipboard.writeText(mail);
							setCopier(copied);
						}}
						src={copier}
						className='cursor-pointer'
						alt='copy'
						width={32}
						height={32}
					/>
				</div>
			</motion.div>

			<motion.div
				initial='offscreen'
				whileInView='onscreen'
				viewport={{ once: true }}
				onClick={scrollUp}
				className='flex mb-24 flex-row mt-32 cursor-pointer'>
				<motion.div
					variants={contactUp}
					className='flex flex-row cursor-pointer'>
					<p className='text-start text-[#7B4AE2] opacity-50 text-lg leading-6 font-bold self-center'>
						Move to Top
					</p>
					<Image src={up} alt='uparrow' />
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default contact;
