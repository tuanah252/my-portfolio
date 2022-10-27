import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navBar';
import github from '../public/github.svg';
import facebook from '../public/fb.png';
import avatar from '../public/AvatarAndIcons.png';
import profile from '../public/ProfilePic.png';
import down from '../public/ArrowLineDown.svg';
import { animate, motion, Variants, Transition } from 'framer-motion';
import { useEffect, useRef, useState, Suspense } from 'react';
import Button from '../components/button';
import Textmotion from '../components/textmotion';
import StarIcon from '../components/star';

const Home: NextPage = () => {
	const iconFadeTransition: Transition = { duration: 0.2, delay: 0.3 };

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

	const [isHover, setIsHover] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
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
				duration: 0.5,
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
			},
		},
	};

	return (
		<div className='bg-[#090E16] flex justify-center '>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Raleway'
				/>
			</Head>

			<main className='text-center h-screen flex flex-col conter-center '>
				<Navbar
					info='Info'
					projects='Projects'
					skills='Skills'
					contact='Contact'></Navbar>

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
							<h2 className='text-5xl font-extrabold name mb-6'>
								Võ Tuấn Anh
							</h2>
							<p className='mb-6 opacity-50 text-lg leading-6 '>
								Front-end developer
							</p>
							<div className='flex flex-row gap-3 justify-center'>
								<Image src={github} alt='github-icon' />
								<Image
									src={facebook}
									alt='github-icon'
									width={36}
									className='opacity-60'
								/>
							</div>
						</div>
						<motion.div
							drag={true}
							whileDrag={{ scale: 1.2 }}
							dragConstraints={{ left: 0, right: 300 }}
							dragElastic={0.2}
							dragSnapToOrigin={true}
							dragTransition={{
								bounceStiffness: 600,
								bounceDamping: 10,
							}}>
							<Image
								src={avatar}
								draggable='false'
								alt='avatar'
								width={516}
								height={516}
								className='self-center cursor-pointer'></Image>
						</motion.div>

						<div className='cv self-center flex flex-row '>
							<p>Download CV </p>
							<Image src={down} alt='download'></Image>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial='offscreen'
					whileInView='onscreen'
					viewport={{ once: true, amount: 0.8 }}
					className='subMain border-[#7B4AE2]/20 pt-40 pb-40 border-t-2 border-b-2  divide-solid flex flex-row justify-between content-center'>
					<motion.div variants={infoImage}>
						<Image src={profile} alt='profile' />
					</motion.div>
					<motion.div
						initial='offscreen'
						whileInView='onscreen'
						viewport={{ once: true, amount: 0.8 }}
						className='self-center'>
						<motion.div variants={infoImage}>
							<Button width='w-40 ' text='🧐 About Me'></Button>
						</motion.div>

						<motion.h2
							variants={infoText}
							className='text-5xl font-extrabold name mb-3'>
							Võ Tuấn Anh
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
						<motion.div
							className='likeBtn mt-24 '
							variants={likeBtn}>
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
									className='icon'
									variants={{
										liked: {
											opacity: 0,
											transition: iconFadeTransition,
										},
										hover: isLiked
											? {
													opacity: 0,
													transition:
														iconFadeTransition,
											  }
											: { opacity: 1 },
									}}>
									<Suspense fallback={null}>
										<StarIcon
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
				</motion.div>

				<motion.div></motion.div>
			</main>
		</div>
	);
};

export default Home;
