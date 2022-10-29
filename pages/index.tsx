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
import {
	useEffect,
	useRef,
	useState,
	Suspense,
	MouseEventHandler,
} from 'react';
import Button from '../components/button';
import Textmotion from '../components/textmotion';
import StarIcon from '../components/star';
import ImageMotion from '../components/imagemotion';
import ProjectItem from '../components/projectItem';
import devfinder from '../public/devfinder.png';
import advice from '../public/advice.png';
import landing from '../public/landing.png';
import Imagesicon from '../components/imagesicon';
import up from '../public/arrowUp.svg';
import copy from '../public/copy.svg';
import email from '../public/email.svg';
import { useRouter } from 'next/router';
import copied from '../public/copied.svg';

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
	const contactUp: Variants = {
		offscreen: {
			y: 1000,
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
			y: -1000,
		},
		onscreen: {
			y: 0,
			transition: {
				bounce: 0.2,
				duration: 2,
			},
		},
	};

	const [copier, setCopier] = useState(copy);
	const [mail, setMail] = useState('tuanah252@gmail.com');
	const scrollUp: MouseEventHandler<HTMLDivElement> | undefined = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className='bg-[#090E16] grid auto-rows-max justify-center md:w-screen'>
				<Head>
					<title>Blasheeb</title>
					<link rel='icon' href='/bsheeb.png' />
				</Head>

				<main className='text-center grid grid-rows-7 conter-center md:w-full '>
					<Navbar info='How I Built This' home='Home'></Navbar>

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
								<Button
									width='w-40'
									text='👋 Greetings!'></Button>
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
										<Image
											src={github}
											alt='github-icon'
											className='cursor-pointer hover:opacity-50'
										/>
									</a>
									<a
										target='_blank'
										href='https://www.facebook.com/votuan.anh.754365'
										rel='noopener noreferrer'>
										<Image
											src={facebook}
											alt='github-icon'
											width={36}
											className='opacity-60 cursor-pointer hover:opacity-10'
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
							<a
								href='/CV.txt'
								download={true}
								className='self-center'>
								<div className='cv flex flex-row cursor-pointer hover:opacity-50'>
									<p>Download CV </p>
									<Image src={down} alt='download'></Image>
								</div>
							</a>
						</div>
					</motion.div>
					<div className='w-full runningTrack mb-20 border-[#7B4AE2]/20 mb-24 border-b-2 '>
						<motion.div
							initial={{ x: -70, scale: 1 }}
							whileInView={{
								x: 1200,
								transition: {
									duration: 10,
									velocity: 5,
									stiffness: 2,
								},
								transitionEnd: { scale: 0 },
							}}
							className='flex flex-row cursor-pointer gap-10'
							viewport={{ once: true }}>
							<Image
								unoptimized={true}
								src='https://i.gifer.com/1FND.gif'
								alt='rabbit'
								width={24}
								height={24}></Image>
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
						className='subMain overflow-hidden border-[#7B4AE2]/20 mb-24 border-b-2   pb-40  divide-solid flex flex-row justify-between content-center'>
						<ImageMotion
							variants={infoImage}
							src={profile}></ImageMotion>
						<motion.div className='self-center'>
							<motion.div variants={infoImage}>
								<Button
									width='w-40 '
									text='🧐 About Me'></Button>
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

					<motion.div className='relative  h-[500] flex flex-col justify-between'>
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
									className='flex flex-row justify-center gap-10 project-holder gap-3 z-10 '>
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
										info='In this project, i used NextJS framework to build this page, then I use Axios library to call API from github and use it to render to interface after received information input from user and finally I used BootStrap to decorating'></ProjectItem>
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
					<motion.div
						initial='offscreen'
						whileInView='onscreen'
						viewport={{ once: true }}
						className='skills overflow-hidden w-full flex flex-col items-center'>
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
							These are techs that i use to improve my skills
							daily
						</motion.p>
						<motion.div variants={technologiesRight}>
							<Imagesicon />
						</motion.div>
					</motion.div>

					<motion.div
						initial='offscreen'
						whileInView='onscreen'
						viewport={{ once: true }}
						className='mt-24 flex flex-col items-center contact overflow-hidden'>
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
							className='flex h-10 email flex-row justify-center items-center '>
							<div className='flex flex-row justify-between items-center gap-2'>
								<Image src={email} alt='email' />
								<p className='text-start text-[#7B4AE2]/60 text-lg leading-6 font-bold'>
									E-mail :{' '}
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
							className='flex mb-24 flex-row mt-20 cursor-pointer'>
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
				</main>
			</div>
			<footer className='grid items-center grid-cols-3 h-12 bg-[#201A3F] w-full'>
				<p className='ml-16 opacity-60 credit'>© Made by Blasheeb</p>
				<div className='flex flex-row gap-3 justify-center  '>
					<a
						target='_blank'
						href='https://github.com/tuanah252'
						rel='noopener noreferrer'>
						<Image
							src={github}
							alt='github-icon'
							className='cursor-pointer hover:opacity-50'
						/>
					</a>
					<a
						target='_blank'
						href='https://www.facebook.com/votuan.anh.754365'
						rel='noopener noreferrer'>
						<Image
							src={facebook}
							alt='github-icon'
							width={36}
							className='opacity-60 cursor-pointer hover:opacity-10'
						/>
					</a>
				</div>
			</footer>
		</>
	);
};

export default Home;
