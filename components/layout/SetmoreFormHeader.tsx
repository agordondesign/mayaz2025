import React from 'react';
import Image from 'next/image';
import SetmoreEmbed from '../ui/setmoreEmbed';
import Link from 'next/link';

export default function SetmoreFormHeader() {
	const features = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<title>Appearance</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
					/>
				</svg>
			),
			title: 'Appearance',
			desc: 'High-density hair creates naturally fuller microlocs, while low-density hair may appear thinner and require additional styling to achieve desired fullness.',
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<title>Loc size</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					/>
				</svg>
			),
			title: 'Loc size',
			desc: 'To achieve a balanced look, stylists may need to adjust the size of the microlocs based on hair density, creating smaller locs for low-density hair to maximize volume.',
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<title>Maintenance</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
					/>
				</svg>
			),
			title: 'Maintenance',
			desc: 'Individuals with high-density hair may need more frequent tightening sessions due to faster loc growth and potential frizz.',
		},
	];

	return (
		<section className="relative py-14 px-16 lg:px-24 bg-black -z-20 max-h-[600px] mb-4">
			<div className="w-full mx-auto text-gray-600 hidden">
				<div className="mt-12 text-white">
					<p>Key points about hair density and microlocs:</p>
					<ul className="mt-4 grid gap-x-12 divide-white/30 divide-y [&>.feature-1]:pl-0 sm:grid-cols-1 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
						{features.map((item, idx) => (
							<li
								key={item.title}
								className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
							>
								<div className="w-12 h-12 bg-white/30 text-mayazNiche rounded-full flex items-center justify-center">
									{item.icon}
								</div>
								<h4 className="text-lg font-semibold">{item.title}</h4>
								<p>{item.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 w-full">
				<div className="flex flex-col gap-4 w-full md:w-2/3">
					<div className="hidden">
						<Image
							src="/svg/micro-locs-studio.svg"
							alt="Niche Micro Locs Studio"
							width={200}
							height={100}
							style={{
								objectFit: 'contain',
							}}
							className="w-full max-w-[800px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto z-10 mb-16"
						/>
					</div>
					<h2 className="text-white font-semibold text-6xl">
						Neat, full, and endlessly versatile
					</h2>
					<p className="text-3xl font-medium sm:text-xl text-white max-w-2xl">
						Microlocs offer luxurious styling tailored to your hair&apos;s
						unique density. Whether thick or fine, achieve the look you love.
						Book now to start your microlocs journey.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 mt-4 font-medium">
						<Link
							href="/niche/"
							type="button"
							className="flex items-center bg-mayazNiche text-white text-base font-medium px-10 py-3 rounded-full"
						>
							Book Now
						</Link>
						<Link
							href="/niche/"
							type="button"
							className="flex items-center bg-transparent border-2 border-white text-white text-base font-medium px-10 py-3 rounded-full"
						>
							Shop Products
						</Link>
					</div>
				</div>
				<div className="w-full md:w-1/3 z-10">
					<SetmoreEmbed />
				</div>
			</div>
			<Image
				src="/svg/texture.svg"
				alt="texture"
				width={2000}
				height={700}
				className="absolute object-cover object-center left-1 top-0 w-full h-full opacity-20 -z-10"
			/>
			<Image
				src="/temp/nicheClients/IMG_7073-squashed.jpg"
				alt="Professional services"
				width={774}
				height={516}
				className="absolute inset-0 object-cover w-full h-full opacity-40 -z-10"
			/>
		</section>
	);
}
