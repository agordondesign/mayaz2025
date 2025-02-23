/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from '@/components/providers/GoogleAnalytics';
import SnipCart from '@/components/providers/Snipcart';
import TickerBar from '@/components/layout/TickerBar';
import Footer from '@/components/layout/Footer';
//import BreakPoints from '@/components/layout/BreakPoints';
import Header from '@/components/layout/Header';
//import Modal from '@/components/ui/Modal';
import { getLandingPage } from '@/lib/api';
import SnipcartCustom from '@/components/ui/SnipcartCustom';
//import { Fragment } from 'react';

export const metadata: Metadata = {
	title: 'Maÿaz Collection - Beautiful Jilbāb Collection',
	description:
		'Elegant authentic Dubai and Indonesian jilbābs, khimārs, and overheads for the distinguished and honored Muslimah upon the Sunnah of our Messenger Muhammad ﷺ. Shop our online selection of beautiful jilbābs, khimārs, and overheads at https://mayazcollection.com.',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/favicon.png',
				href: '/favicon.png',
				type: 'image/png',
				rel: 'icon',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/favicon-ko.png',
				href: '/favicon-ko.png',
				type: 'image/png',
				rel: 'icon',
			},
		],
	},
	//Basic Fields
	generator: 'Next.js',
	applicationName: 'Maÿaz Collection - Beautiful Jilbāb Collection',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Islamic Clothing',
		'Islamic Fashion',
		'Abaya',
		'Hijab',
		'Jilbab',
		'Khimar',
		'Niqab',
		'Islamic Books',
	],
	creator: 'Andre Gordon',
	publisher: 'Mayaz Collection',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	//Alternates
	alternates: {
		canonical: 'https://mayazcollection.com',
		languages: { 'en-US': '/en-US' },
	},
	//Facebook / Open Graph
	openGraph: {
		type: 'website',
		url: 'https://mayazcollection.com',
		title: 'Maÿaz Collection - Beautiful Jilbāb Collection',
		images: [
			{
				url: '/ogimage.png',
				width: 1200,
				height: 630,
				alt: 'Maÿaz Collection - Beautiful Jilbāb Collection',
			},
		],
	},
	//Twitter
	twitter: {
		card: 'summary_large_image',
		title: 'Maÿaz Collection - Beautiful Jilbāb Collection',
		description:
			'Elegant authentic Dubai and Indonesian jilbābs, khimārs, and overheads for the distinguished and honored Muslimah upon the Sunnah of our Messenger Muhammad ﷺ. Shop our online selection of beautiful jilbābs, khimārs, and overheads at https://mayazcollection.com.',
		siteId: '1467726470533754880',
		creator: '@agordondesign',
		creatorId: '1467726470533754880',
		images: [
			{
				url: '/ogimage.png',
				width: 1200,
				height: 630,
				alt: 'Maÿaz Collection - Beautiful Jilbāb Collection',
			},
		],
	},
	//Category
	category: 'Islamic Clothing',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const landingPage = await getLandingPage();
	return (
		<html lang="en">
			<head>
				<GoogleAnalytics
					GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_MEASUREMENT_ID as string}
				/>
			</head>
			<body className="flex flex-col h-full min-h-screen w-full justify-start">
				{/*<BreakPoints /> responsive testing*/}
				<TickerBar ticker={landingPage.siteTicker} />
				<Header />
				<div className="px-2">
					<SnipcartCustom>{children}</SnipcartCustom>
					<Footer />
				</div>
				{/*
				{landingPage?.sectionModule?.map((modal: any) => (
					<Fragment key={modal?._id}>
						{modal?._type === 'modalContent' && <Modal content={modal} />}
					</Fragment>
				))}
					*/}
				<SnipCart />
			</body>
		</html>
	);
}
