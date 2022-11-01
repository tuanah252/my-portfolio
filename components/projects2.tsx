import React from 'react';
import { motion, Variants } from 'framer-motion';
import Textmotion from '../components/textmotion';
import Button from '../components/button';
import ProjectItem from '../components/projectItem2';
import devfinder from '../public/devfinder.png';
import advice from '../public/advice.png';
import shortlink from '../public/shortlink.png';

type Props = {};

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

function projects({}: Props) {
	return (
		<motion.div className='flex relative flex-col w-screen pl-6 pr-6 items-center justify-between'>
			<motion.div
				initial={{ x: 400 }}
				whileInView={{
					x: 0,
					transition: {
						type: 'spring',
						bounce: 0.2,
						duration: 1,
					},
				}}
				viewport={{ once: true, amount: 0.8 }}
				className='flex flex-col mt-10 self-left w-full'>
				<Button text='🔗 Projects' width='w-40 '></Button>
				<motion.h2 className='self-center text-5xl text-left font-bold name mb-6 ml-0'>
					My Projects
				</motion.h2>
				<Textmotion
					content='These are projects that i have made in my learning period. '
					duration={2}
				/>
				<motion.div className='outter overflow-hidden mt-24'>
					<motion.div
						className='inner justify-center flex gap-10 '
						drag='x'
						dragConstraints={{ right: 360, left: -360 }}>
						<ProjectItem
							link2='https://github-user-finder-ten.vercel.app/'
							link='https://github.com/tuanah252/github-user-finder'
							src={devfinder}
							name='Dev Finder'
							num={4}
							projects={{
								cn1: 'Typescript',
								cn2: 'NextJS',
								cn3: 'Axios',
								cn4: 'Bootstrap',
							}}
							info='In this project, i used NextJS framework to build this page, then I use Axios library to fetch API from github and use it to render to interface after received information input from user and finally I used BootStrap and SCSS to decorate'></ProjectItem>
						<ProjectItem
							link2='https://advice-generator-phi-bice.vercel.app/'
							link='https://github.com/tuanah252/advice-generator'
							src={advice}
							name='Advice Generator'
							num={4}
							projects={{
								cn1: 'Typescript',
								cn2: 'NextJS',
								cn3: 'Axios',
								cn4: 'Tailwind',
							}}
							info='I built this project with NextJS and used Axios to fetch API from database, then render it out to interface and fully decorated with Tailwindcss '></ProjectItem>
						<ProjectItem
							link2='https://short-link-github-io.vercel.app/'
							link='https://github.com/tuanah252/ShortLink.github.io'
							src={shortlink}
							name='Link Shortener'
							num={4}
							projects={{
								cn1: 'JavaScript',
								cn2: 'ReactJS',
								cn3: 'SCSS',
								cn4: 'Axios',
							}}
							info='This is project I built using ReactJS, and decorating with SCSS. Get API from shrtcode API to shorten input link '></ProjectItem>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default projects;
