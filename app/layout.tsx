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
	title: 'Create Next App',
	description: 'Generated by create next app',
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
