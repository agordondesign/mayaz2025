/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
//import { Divide } from 'lucide-react';
import PageBannerPromotion from './PageBannerPromotion';

type PageBannerProps = {
	collection: {
		bannerColor: { value: string; label: string };
		bannerColumns: boolean;
		bannerPosition: string;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		bannerAd: any;
		bannerSize: string;
		bannerTitle?: string;
		bannerText?: string;
		title: string;
		banner?: {
			alt: string;
			asset: {
				alt: string;
				url: string;
				path: string;
			};
		};
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		promoAd: any;
		sectionModule: {
			promoAd: {
				banner?: {
					alt: string;
					asset: {
						alt: string;
						url: string;
						path: string;
					};
				};
			};
		}[];
	};
};

export default function PageBanner({ collection }: PageBannerProps) {
	const pathname = usePathname();
	const mersi = pathname.includes('mersi');
	const herStory = pathname.includes('her-story');
	return (
		<div className="flex flex-col w-full gap-2">
			<section
				className="relative flex justify-start items-center gap-2 image-box w-full h-auto overflow-hidden"
				style={{
					backgroundColor:
						collection?.bannerColor?.value && collection?.bannerColor.value,
				}}
			>
				{!collection?.bannerColumns ? (
					<div className="flex flex-col lg:gap-4 justify-center items-center lg:justify-start lg:items-end w-full xl:h-[370px]">
						{!mersi ? (
							<div className="relative lg:absolute left-0 flex flex-col justify-center items-center lg:items-start space-y-2 z-10 w-full lg:w-3/7 h-full py-6 pl-10 pr-6 !bg-mayazBody lg:!bg-transparent">
								<h1 className="text-2xl lg:text-3xl uppercase tracking-[0.75em]">
									{collection?.bannerTitle}
								</h1>
								{collection?.bannerText && (
									<p className="tracking-[0.25em] lg:text-lg text-mayazDarker">
										{collection?.bannerText}
									</p>
								)}
							</div>
						) : (
							<div className="relative lg:absolute left-0 flex flex-col justify-center items-center lg:items-start space-y-2 z-10 w-full lg:w-3/7 h-full py-6 pl-10 pr-6 !bg-mayazBody lg:!bg-transparent">
								<Image
									src="/svg/Mersi.svg"
									alt="Mersi Nail Polish"
									width={891}
									height={313}
									style={{
										objectFit: 'contain',
									}}
									className="w-auto h-full max-h-[70px] md:max-h-[80px]"
								/>{' '}
								<span className="tracking-[0.15em] text-base md:text-lg">
									{collection?.bannerTitle}
								</span>
							</div>
						)}
						{collection?.banner && (
							<Image
								src={urlFor(collection?.banner).url()}
								alt={collection?.banner?.alt}
								width={1436}
								height={700}
								className={`relative object-cover object-right-top right-0 z-0
							${
								collection?.bannerPosition === 'object-top'
									? 'object-right-top'
									: 'object-center'
							}
							${collection?.bannerSize === 'full-width' ? 'w-full h-auto' : 'h-full w-auto'}`}
								style={{
									objectPosition:
										collection?.bannerPosition === 'object-top'
											? 'top'
											: 'center',
								}}
							/>
						)}
					</div>
				) : (
					<div className="flex justify-center items-start w-full h-full">
						{!herStory ? (
							<Link href="/her-story" passHref>
								<div className="absolute right-0 flex justify-center md:justify-end items-center z-10 w-full h-full md:pr-6 lg:pr-20 bg-transparent">
									<div className="border-none border-mayazDarker md:px-12 flex flex-col gap-2 md:gap-6 lg:gap-6 xl:gap-10 justify-center items-center">
										<h1 className="flex gap-2 justify-center items-center font-scriptFont font-thin text-7xl md:text-8xl lg:text-9xl text-mayazBody">
											<span className="font-brandFont text-2xl lg:text-3xl uppercase tracking-[1.5rem] text-mayazBody md:text-mayaz">
												Her
											</span>
											Story
										</h1>
										<span className="border-none border-white/30 py-4 text-sm text-white uppercase tracking-[0.25rem] -ml-[0.25rem]">
											Learn More
										</span>
									</div>
								</div>
								<div className="w-full h-full max-h-[441px] sm:max-h-[681px] md:max-h-[457px] lg:max-h-[575px] xl:max-h-[699px] overflow-hidden">
									{collection?.banner && (
										<Image
											src={urlFor(collection?.banner).url()}
											alt={collection?.banner?.alt}
											width={2000}
											height={700}
											className="object-cover object-left-top w-auto h-full aspect-square md:aspect-auto"
										/>
									)}
								</div>
							</Link>
						) : (
							<>
								<div className="absolute right-0 flex justify-center md:justify-end items-center z-10 w-full h-full md:pr-6 lg:pr-20">
									<div className="border-none border-mayazDarker md:px-12 flex flex-col gap-2 md:gap-6 lg:gap-6 xl:gap-10 justify-center items-center">
										<h1 className="flex gap-2 justify-center items-center font-scriptFont font-thin text-7xl md:text-8xl lg:text-9xl text-mayazBody md:text-mayazDarker">
											<span className="font-brandFont text-2xl lg:text-3xl uppercase tracking-[1.5rem] text-mayazBody md:text-mayazDarker">
												Her
											</span>
											Story
										</h1>
									</div>
								</div>
								<div className="w-full h-full bg-mayaz md:bg-transparent transition-all ease-in-out">
									{collection?.banner && (
										<Image
											src={urlFor(collection?.banner).url()}
											alt={collection?.banner?.alt}
											width={2000}
											height={700}
											className="object-cover object-left-top w-full h-auto md:w-auto md:h-full"
										/>
									)}
								</div>
							</>
						)}
					</div>
				)}
			</section>
			<section>
				{collection?.bannerAd && (
					<PageBannerPromotion page={collection?.bannerAd} />
				)}
			</section>
		</div>
	);
}
