import React from 'react';
import Image from 'next/image';
import github from '../public/github.svg';
import facebook from '../public/fb.png';
type Props = { content: string; margin: string };

const footer = ({ content, margin }: Props) => {
	return (
		<footer className='grid items-center grid-cols-3 h-12 bg-[#201A3F] w-full'>
			<p className={`ml-${margin} opacity-60 credit`}>{content}</p>
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
	);
};

export default footer;
