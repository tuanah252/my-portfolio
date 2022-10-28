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
import ImageMotion from '../components/imagemotion';
import ProjectItem from '../components/projectItem';
import devfinder from '../public/devfinder.png';
import advice from '../public/advice.png';
import landing from '../public/landing.png';
import Imagesicon from '../components/imagesicon';

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
				delay: 1,
			},
		},
	};

	const jumpdown: Variants = {
		unseen: {
			y: -400,
		},
		seen: {
			y: 0,
			transition: {
				bounce: 0.4,
				duration: 1,
			},
		},
	};

	return (
		<div className='bg-[#090E16] flex justify-center  '>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://use.typekit.net/ese3zou.css'
				/>
			</Head>

			<main className='text-center  flex flex-col conter-center '>
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
							<h2 className='text-5xl font-bold name mb-6'>
								Vo Tuan Anh
							</h2>
							<p className='mb-6 opacity-50 font-bold text-lg leading-6 '>
								Front-end developer
							</p>
							<div className='flex flex-row gap-3 justify-center '>
								<Image
									src={github}
									alt='github-icon'
									className='cursor-pointer hover:opacity-50'
								/>
								<Image
									src={facebook}
									alt='github-icon'
									width={36}
									className='opacity-60 cursor-pointer hover:opacity-10'
								/>
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
							}}>
							<Image
								src={avatar}
								draggable='false'
								alt='avatar'
								width={516}
								height={516}
								className='self-center cursor-pointer'></Image>
						</motion.div>

						<div className='cv self-center flex flex-row cursor-pointer hover:opacity-50'>
							<p>Download CV </p>
							<Image src={down} alt='download'></Image>
						</div>
					</div>
				</motion.div>
				<div className='w-full runningTrack  '>
					<motion.div
						initial={{ x: 0, scale: 1 }}
						whileInView={{
							x: 990,
							transition: {
								duration: 10,
								velocity: 5,
								stiffness: 2,
							},
							transitionEnd: { scale: 0 },
						}}
						viewport={{ once: true }}>
						<Image
							unoptimized={true}
							src='https://i.gifer.com/2e05.gif'
							alt='cat'
							width={24}
							height={24}></Image>
					</motion.div>
				</div>
				<motion.div
					initial='offscreen'
					whileInView='onscreen'
					viewport={{ once: true }}
					className='subMain border-[#7B4AE2]/20 mb-24 pt-40 h-fit pb-40 border-t-2 border-b-2  divide-solid flex flex-row justify-between content-center'>
					<ImageMotion
						variants={infoImage}
						src={profile}></ImageMotion>
					<motion.div className='self-center'>
						<motion.div variants={infoImage}>
							<Button width='w-40 ' text='🧐 About Me'></Button>
						</motion.div>

						<motion.h2
							variants={infoText}
							className='text-5xl font-bold name mb-3'>
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

				<motion.div className='relative h-[500] flex flex-col justify-between'>
					<motion.div
						initial={{ x: -300 }}
						whileInView={{
							x: 0,
							transition: {
								type: 'spring',
								bounce: 0.2,
								duration: 1,
							},
						}}
						viewport={{ once: true, amount: 0.8 }}
						className='flex flex-col w-[129] mt-10 self-left  '>
						<Button text='🔗 Projects' width='w-40 '></Button>
						<motion.h2 className='text-5xl text-left font-bold name mb-6 ml-0'>
							My Projects
						</motion.h2>
						<Textmotion
							content='These are projects that i have made in my learning period. '
							duration={2}></Textmotion>
					</motion.div>

					<motion.div className='absolute overflow-hidden w-full'>
						<motion.div className='relative flex flex-col h-fit justify-end '>
							<motion.div
								initial='unseen'
								whileInView='seen'
								variants={jumpdown}
								viewport={{ once: true }}
								className='flex flex-row justify-center project-holder gap-3 z-10 '>
								<ProjectItem
									src={devfinder}
									name='Dev Finder'
									num={4}
									projects={{
										cn1: 'Typescript',
										cn2: 'NextJS',
										cn3: 'Axios',
										cn4: 'Bootstrap',
									}}
									info='this is the infomation about my pro this is the infomation about my prothis is the infomation about my prothis is the infomation about my prothis is the infomation about my prothis is the infomation about my pro '></ProjectItem>
								<ProjectItem
									src={advice}
									name='Advice Generator'
									num={4}
									projects={{
										cn1: 'Typescript',
										cn2: 'NextJS',
										cn3: 'Axios',
										cn4: 'Tailwind',
									}}
									info='this is the infomation about my pro this is the infomation about my prothis is the infomation about my prothis is the infomation about my prothis is the infomation about my prothis is the infomation about my pro'></ProjectItem>
								<ProjectItem
									src={landing}
									name='Info Landing Page'
									num={3}
									projects={{
										cn1: 'JavaScript',
										cn2: 'HTML',
										cn3: 'CSS',
									}}
									info='this is the infomation about my pro this is the infomation about my prothis is the infomation about my prothis is the infomation about my prothis is the infomation about my prothis is the infomation about my pro'></ProjectItem>
							</motion.div>
							<div className='w-full bg-white h-24 z-0 absolute rounded-xl'></div>
						</motion.div>
					</motion.div>
				</motion.div>
				<motion.div className='skills w-full flex flex-col mb-40 items-center'>
					<Button text='✨ Experience' width='w-40' />
					<motion.h2 className='text-5xl mb-24 w-fit bold font-bold m-0'>
						Technologies
					</motion.h2>
					<motion.p className='mb-10 font-bold opacity-50 text-lg leading-6'>
						These are techs that i use daily
					</motion.p>
					<Imagesicon />
				</motion.div>

				<motion.div className='mt-24 flex flex-col items-center'>
					<Button text='📬 Contact' width='w-32' />
					<motion.div className='text-5xl mb-24 w-fit bold font-bold m-0'>
						Let's talk!
					</motion.div>
				</motion.div>
			</main>
		</div>
	);
};

export default Home;
