/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
//import { Divide } from 'lucide-react';
import PageBannerPromotion from './PageBannerPromotion';
import SetmoreButton from '../ui/SetmoreButton';

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
		bannerMobile?: {
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
	const niche = pathname.includes('niche');
	//const locStudio = pathname.includes('niche-micro-loc-studio');
	return (
		<div className="flex flex-col w-full gap-2">
			<section
				className="relative flex justify-start items-center gap-2 image-box w-full h-auto overflow-hidden"
				style={{
					backgroundColor:
						collection?.bannerColor?.value && collection?.bannerColor.value,
				}}
			>
				{!collection?.bannerColumns && !niche ? (
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
									className="w-auto h-full max-h-[62px] lg:max-h-[70px]"
								/>{' '}
								<span className="tracking-[0.15em] text-sm lg:text-base">
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
							${
								collection?.bannerSize === 'full-width'
									? 'w-full h-auto'
									: 'w-full h-auto min-h-[250px] md:h-full md:w-auto'
							}`}
								style={{
									objectPosition:
										collection?.bannerPosition === 'object-top'
											? 'top'
											: 'center',
								}}
							/>
						)}
					</div>
				) : !collection?.bannerColumns && niche ? (
					<div className="flex flex-col w-full gap-2 bg-mayazBody">
						<div className="flex justify-center items-start w-full h-full image-box">
							<div className="relative">
								<div className="md:absolute right-0 flex justify-center md:justify-end items-center z-10 w-full h-full md:pr-6 lg:pr-20 bg-transparent">
									<div className="relative left-0 flex flex-col justify-center items-center md:items-start space-y-2 z-10 w-full md:w-3/7 h-full py-6 pl-10 pr-6 !bg-mayazBody md:!bg-transparent">
										<Image
											src="/svg/NICHE-MicroLocsLogoBLK.svg"
											alt="Niche"
											width={891}
											height={313}
											style={{
												objectFit: 'contain',
											}}
											className="w-auto h-full max-h-[82px] md:max-h-[102px] lg:max-h-[112px] xl:max-h-[132px] transition-all ease-in-out"
										/>{' '}
										<span className="tracking-[0.15em] text-sm lg:text-base hidden">
											{collection?.bannerTitle}
										</span>
									</div>
								</div>
								<div className="w-full h-[250px] md:h-full md:max-h-[425px] lg:max-h-[575px] xl:max-h-[699px] overflow-hidden">
									{collection?.banner && (
										<>
											<Image
												src={urlFor(collection?.banner).url()}
												alt={collection?.banner?.alt}
												width={2000}
												height={700}
												className={`${
													collection?.bannerMobile ? 'hidden md:block' : 'block'
												} relative object-cover object-center md:object-left-top w-full h-auto md:w-auto md:h-full aspect-square md:aspect-auto`}
											/>
											{collection?.bannerMobile && (
												<Image
													src={urlFor(collection?.bannerMobile).url()}
													alt={collection?.banner?.alt}
													width={2000}
													height={700}
													className="md:hidden relative object-cover object-center right-0 z-0 w-auto h-full"
												/>
											)}
										</>
									)}
								</div>
							</div>
						</div>
						<div className="relative border w-auto h-auto bg-black hidden">
							<div className="relative flex justify-center items-center z-10 w-full min-h-full">
								<div className="relative flex flex-col items-center justify-center gap-8 p-20 bg-transparent w-full overflow-hidden">
									<Image
										src="/svg/micro-locs-studio.svg"
										alt="Niche Micro Locs Studio"
										width={200}
										height={100}
										style={{
											objectFit: 'contain',
										}}
										className="w-full max-w-[800px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto z-10"
									/>
									<div className="z-10">
										<p className="text-sm lg:text-xl text-white">
											Micro Loc installation, reties, maintenance, and more!
										</p>
									</div>
									<div className="flex gap-8 justify-center items-center z-10">
										<SetmoreButton />

										<Link
											href="/niche-micro-loc-studio"
											type="button"
											className="border border-white text-white text-base font-medium px-10 py-3 rounded-lg"
										>
											Learn More
										</Link>
									</div>
									<Image
										src="/svg/texture.svg"
										alt="texture"
										width={2000}
										height={700}
										className={`${
											collection?.bannerMobile ? 'hidden md:block' : 'block'
										} absolute object-cover object-center left-1 top-0 w-full h-full opacity-60`}
									/>
								</div>
							</div>
						</div>
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
								<div className="w-full h-full max-h-[441px] sm:max-h-[681px] md:max-h-[425px] lg:max-h-[575px] xl:max-h-[699px] overflow-hidden">
									{collection?.banner && (
										<Image
											src={urlFor(collection?.banner).url()}
											alt={collection?.banner?.alt}
											width={2000}
											height={700}
											className="object-cover object-left-top w-full h-auto lg:w-auto lg:h-full aspect-square md:aspect-auto"
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
