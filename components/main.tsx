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
			<div className='flex justify-between content-center middle '>
				<div className='self-center flex-start'>
					<Button width='w-40' text='👋 Greetings!'></Button>
					<h2 className='text-5xl font-bold name mb-6'>
						Vo Tuan Anh
					</h2>
					<p className='mb-6 opacity-50 font-bold text-lg leading-6 '>
						Front-end developer
					</p>
					<div className='flex flex-row gap-3 justify-center '>
						<a
							target='_blank'
							href='https://github.com/tuanah252'
							rel='noopener noreferrer'>
							<SiGithub
								size={36}
								className='cursor-pointer opacity-40 hover:opacity-80'
							/>
						</a>
						<a
							target='_blank'
							href='https://www.facebook.com/votuan.anh.754365'
							rel='noopener noreferrer'>
							<SiFacebook
								size={36}
								className='cursor-pointer opacity-40 hover:opacity-80'
							/>
						</a>
					</div>
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
					className='z-50'>
					<Image
						src={avatar}
						draggable='false'
						alt='avatar'
						width={516}
						height={516}
						className='self-center z-10 cursor-pointer'></Image>
				</motion.div>
				<Image
					unoptimized={true}
					className='absolute z-0 catty'
					src='https://i.gifer.com/YMga.gif'
					alt='cat'
					width={200}
					height={200}></Image>
				<a href='/CV.txt' download={true} className='self-center'>
					<div className='cv flex flex-row cursor-pointer hover:opacity-50'>
						<p>Download CV </p>
						<Image src={down} alt='download'></Image>
					</div>
				</a>
			</div>
		</motion.div>
	);
}

export default main;
