import Script from 'next/script';
import React from 'react';

export default function SetmoreButton() {
	return (
		<>
			<Script
				id="setmore_script"
				type="text/javascript"
				src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
			/>
			<a
				id="Setmore_button_iframe"
				href="https://niche.setmore.com"
				className="border border-white bg-white text-base font-medium px-10 py-3 rounded-lg"
			>
				Book Now
			</a>
			{/*<a
				style={{ float: 'none' }}
				id="Setmore_button_iframe"
				href="https://niche.setmore.com"
			>
				<img
					style={{ border: 'none' }}
					src="https://assets.setmore.com/setmore/images/2.0/Settings/book-now-black.svg"
					alt="Click here to book the appointment using setmore"
				/>
			</a>*/}
		</>
	);
}
