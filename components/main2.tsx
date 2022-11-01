import React from 'react';
import Image from 'next/image';
import avatar from '../public/AvatarAndIcons.png';
import down from '../public/ArrowLineDown.svg';
import Button from '../components/button';
import { SiGithub, SiFacebook } from 'react-icons/si';
import { motion } from 'framer-motion';
type Props = {};

function main({}: Props) {
	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ rotate: 360, scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
				duration: 2,
			}}>
			<div className='flex flex-col items-center'>
				<div className='flex flex-row gap-3 mb-16 mt-10 justify-center '>
					<a
						target='_blank'
						href='https://github.com/tuanah252'
						rel='noopener noreferrer'>
						<SiGithub
							size={32}
							className='cursor-pointer opacity-40 hover:opacity-80'
						/>
					</a>
					<a
						target='_blank'
						href='https://www.facebook.com/votuan.anh.754365'
						rel='noopener noreferrer'>
						<SiFacebook
							size={32}
							className='cursor-pointer opacity-40 hover:opacity-80'
						/>
					</a>
				</div>
				<motion.div
					drag={true}
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.2 },
					}}
					dragConstraints={{ left: 0, right: 300 }}
					dragElastic={0.2}
					dragSnapToOrigin={true}
					dragTransition={{
						bounceStiffness: 600,
						bounceDamping: 10,
					}}
					className='z-50 mb-24'>
					<Image
						src={avatar}
						draggable='false'
						alt='avatar'
						width={285}
						height={308}
						className='self-center z-10 cursor-pointer'
					/>
				</motion.div>
				<div className='flex flex-col'>
					<Button width='w-40' text='👋 Greetings!' />
					<h2 className='text-5xl font-bold name mb-6'>
						Vo Tuan Anh
					</h2>
					<p className='mb-12 opacity-50 font-bold text-lg leading-6 '>
						Front-end developer
					</p>
					<a href='/CV.txt' download={true} className='self-center'>
						<div className='cv flex flex-row cursor-pointer hover:opacity-50'>
							<p>Download CV </p>
							<Image src={down} alt='download'></Image>
						</div>
					</a>
				</div>
			</div>
		</motion.div>
	);
}

export default main;
