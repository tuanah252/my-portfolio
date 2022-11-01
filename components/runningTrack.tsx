import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
type Props = {
	margin?: string;
};

function runningTrack({ margin }: Props) {
	return (
		<div
			className={`w-full overflow-hidden runningTrack mb-20 border-[#7B4AE2]/20 mb-24 ${margin} border-b-2 `}>
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
	);
}

export default runningTrack;
