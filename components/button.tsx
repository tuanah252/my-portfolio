import React from 'react';

type Props = {
	text: string;
	width: string;
};

export default function button({ text, width }: Props) {
	return (
		<div
			className={`bg-[#7B4AE2]/10 text-[#7B4AE2] rounded-2xl ${width} h-9 flex justify-center content-center mb-5`}>
			<p className='self-center'>{text}</p>
		</div>
	);
}
