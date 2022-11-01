import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import Button from '../components/button';
import ImageMotion from '../components/imagemotion';
import Textmotion from '../components/textmotion';
import { useState, Suspense } from 'react';
import profile from '../public/ProfilePic.png';
import StarIcon from '../components/star';
type Props = {};
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

const infoText: Variants = {
	offscreen: {
		x: 1000,
	},
	onscreen: {
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.2,
			duration: 2,
		},
	},
};

const likeBtn: Variants = {
	offscreen: {
		x: 1000,
	},
	onscreen: {
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.2,
			duration: 4.5,
			delay: 1,
		},
	},
};

const buttonVariants: Variants = {
	rest: {
		transition: { duration: 0.7 },
	},
	hover: {
		scale: 1.2,
		y: -8,
	},
	press: { scale: 1.1 },
};

const labelTextVariants: Variants = {
	unliked: { x: 24 },
	liked: { x: -46 },
};

const successTextVariants: Variants = {
	unliked: { opacity: 0 },
	liked: { opacity: 1 },
};
const likedTransition: Transition = {
	duration: 0.25,
	delay: 0.3,
};

const currentCountVariants: Variants = {
	unliked: { opacity: 1, y: 0, transition: { duration: 0.25 } },
	liked: { opacity: 0, y: -40, transition: likedTransition },
};

const newCountVariants: Variants = {
	unliked: { opacity: 0, y: 40, transition: { duration: 0.25 } },
	liked: { opacity: 1, y: 0, transition: likedTransition },
};
function about({}: Props) {
	const iconFadeTransition: Transition = { duration: 0.2, delay: 0.3 };
	const [isHover, setIsHover] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true }}
			className='subMain overflow-hidden border-[#7B4AE2]/20 mb-24 border-b-2  pb-28  divide-solid flex flex-col justify-between items-center'>
			<ImageMotion
				width={230}
				variants={technologiesleft}
				src={profile}></ImageMotion>

			<motion.div className='self-center mt-16 w-fit overflow-hidden p-6'>
				<motion.div variants={infoImage} className='mb-10'>
					<Button width='w-40 ' text='🧐 About Me'></Button>
				</motion.div>

				<motion.h2
					variants={infoText}
					className='text-5xl font-bold name mb-12'>
					Vo Tuan Anh
				</motion.h2>
				<Textmotion
					duration={2.2}
					content='👋 With technological skills'></Textmotion>
				<Textmotion
					duration={2.4}
					content='🎓 Graduated from Duy Tan University.'></Textmotion>
				<Textmotion
					duration={2.6}
					content='👨‍💻 Working with JavaScript, ReactJS, NextJS and
							Typescript.'></Textmotion>
				<Textmotion
					duration={2.8}
					content='💡 Interests in Front-end development with React,
							NextJS.'></Textmotion>
				<Textmotion
					duration={3}
					content='🚀 Trying to be a little better than yesterday every
							day.'></Textmotion>
			</motion.div>
			<motion.div className='likeBtn mt-12' variants={likeBtn}>
				<motion.button
					initial={false}
					animate={[
						isLiked ? 'liked' : 'unliked',
						isHover ? 'hover' : 'rest',
					]}
					whileTap='press'
					variants={buttonVariants}
					onHoverStart={() => setIsHover(true)}
					onHoverEnd={() => setIsHover(false)}
					onClick={() => setIsLiked(!isLiked)}>
					<motion.div
						className='icon2'
						variants={{
							liked: {
								opacity: 0,
								transition: iconFadeTransition,
							},
							hover: isLiked
								? {
										opacity: 0,
										transition: iconFadeTransition,
								  }
								: { opacity: 1 },
						}}>
						<Suspense fallback={null}>
							<StarIcon
								pos={4}
								isHover={isHover}
								isLiked={isLiked}
							/>
						</Suspense>
					</motion.div>
					<div className='label'>
						<motion.span
							variants={labelTextVariants}
							className='default'>
							Star
							<motion.span
								variants={successTextVariants}
								className='success'>
								red
							</motion.span>
						</motion.span>
					</div>
					<div className='number'>
						<motion.span
							variants={currentCountVariants}
							className='current'>
							38
						</motion.span>
						<motion.span
							variants={newCountVariants}
							className='new'>
							39
						</motion.span>
					</div>
				</motion.button>
			</motion.div>
		</motion.div>
	);
}

export default about;
