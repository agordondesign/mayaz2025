import React from 'react';
import Script from 'next/script';

export default function setmoreEmbed() {
	return (
		<div>
			<Script
				id="setmore_script"
				src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
				strategy="afterInteractive"
			/>
			<div className="iframe-container rounded-lg overflow-hidden shadow-lg">
				<iframe
					src="https://niche.setmore.com"
					width="100%"
					height="600px"
					allowFullScreen
					title="Example iframe content"
				/>
			</div>
		</div>
	);
}
