import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Technologies from '../components/technologies';
import Technologies2 from '../components/technologies2';
import Projects from '../components/projects';
import Projects2 from '../components/projects2';
import About from '../components/about';
import About2 from '../components/about2';
import RunningTrack from '../components/runningTrack';
import Main from '../components/main';
import Main2 from '../components/main2';
import { BrowserView, MobileView } from 'react-device-detect';
const Home: NextPage = () => {
	return (
		<>
			<BrowserView>
				<div className='bg-[#090E16] grid auto-rows-max justify-center md:w-screen'>
					<Head>
						<title>Blasheeb</title>
						<link rel='icon' href='/bsheeb.png' />
					</Head>

					<main className='text-center grid grid-rows-7 conter-center md:w-full '>
						<Navbar info='How I Built This' home='Home'></Navbar>

						<Main />

						<RunningTrack />

						<About />

						<Projects />

						<Technologies />

						<Contact width='email' />
					</main>
				</div>
				<Footer content='© Made by Blasheeb' margin='16'></Footer>
			</BrowserView>
			<MobileView>
				<div className='bg-[#090E16] grid auto-rows-max justify-center w-screen'>
					<Head>
						<title>Blasheeb</title>
						<link rel='icon' href='/bsheeb.png' />
					</Head>
					<main className='text-center grid w-full conter-center'>
						<Main2 />

						<RunningTrack margin='mt-20' />

						<About2 />

						<Projects2 />

						<Technologies2 />

						<Contact width='email2' />
					</main>
				</div>
				<Footer content='© Blasheeb' margin='4'></Footer>
			</MobileView>
		</>
	);
};

export default Home;
