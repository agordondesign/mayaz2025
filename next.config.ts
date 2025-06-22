import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/Ma%C3%BFaz_Collection.vcf',
				destination: '/',
				permanent: true,
			},
		];
	},
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
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'avatar.vercel.sh',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
