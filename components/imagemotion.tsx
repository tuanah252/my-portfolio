import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
type Props = {
	src: any;
	variants: any;
	width: number;
};

const ImageMotion = ({ variants, src, width }: Props) => {
	return (
		<motion.div
			variants={variants}
			drag={true}
			dragConstraints={{ left: 0, right: 300 }}
			dragElastic={0.2}
			dragSnapToOrigin={true}
			dragTransition={{
				bounceStiffness: 600,
				bounceDamping: 10,
			}}>
			<Image width={width} src={src} draggable='false' alt='profile' />
		</motion.div>
	);
};

export default ImageMotion;
