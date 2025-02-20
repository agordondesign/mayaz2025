'use client';

import Script from 'next/script';
//import * as gtag from '../gtag.js';
import React from 'react';

export default function GoogleAnalytics({
	GA_MEASUREMENT_ID,
}: {
	GA_MEASUREMENT_ID: string;
}) {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', "${GA_MEASUREMENT_ID}", {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	);
}
