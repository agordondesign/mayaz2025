import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'mayaz2025-pi.vercel.app',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
