import React from 'react';
import { motion, Variants } from 'framer-motion';
type Props = {
	duration: number;
	content: string;
};

function textmotion({ duration, content }: Props) {
	const infoText: Variants = {
		offscreen: {
			x: 1000,
		},
		onscreen: {
			x: 0,
			transition: {
				type: 'spring',
				bounce: 0.2,
				duration: duration,
				delay: 1,
			},
		},
	};

	return (
		<motion.p
			variants={infoText}
			className='text-start mb-3 opacity-50 text-lg leading-6 '>
			{content}
		</motion.p>
	);
}

export default textmotion;
