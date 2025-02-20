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
				className="relative flex justify-start items-center gap-2 image-box w-full h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden"
				style={{
					backgroundColor:
						collection?.bannerColor?.value && collection?.bannerColor.value,
				}}
			>
				{!collection?.bannerColumns ? (
					<div className="flex flex-col gap-4 justify-center items-start w-full px-20">
						{collection?.banner && (
							<Image
								src={urlFor(collection?.banner).url()}
								alt={collection?.banner?.alt}
								width={2000}
								height={700}
								className={`absolute object-cover object-top right-0 z-0
							${collection?.bannerPosition === 'object-top' ? 'object-top' : 'object-center'}
							${collection?.bannerSize === 'full-width' ? 'w-full h-auto' : 'h-full w-auto'}`}
								style={{
									objectPosition:
										collection?.bannerPosition === 'object-top'
											? 'top'
											: 'center',
								}}
							/>
						)}
						{!mersi ? (
							<div className="space-y-4">
								<h1 className="text-3xl uppercase tracking-[0.75em]">
									{collection?.bannerTitle}
								</h1>
								{collection?.bannerText && (
									<p className="tracking-[0.25em] text-lg text-mayazDarker">
										{collection?.bannerText}
									</p>
								)}
							</div>
						) : (
							<div className="flex flex-col gap-4 z-10">
								<Image
									src="/svg/Mersi.svg"
									alt="Mersi Nail Polish"
									width={891}
									height={313}
									style={{
										objectFit: 'contain',
									}}
									className="w-auto h-full max-h-[100px]"
								/>{' '}
								<span className="tracking-[0.15em] text-lg">
									{collection?.bannerTitle}
								</span>
							</div>
						)}
					</div>
				) : (
					<div className="flex justify-center items-start w-full h-full">
						<div className="w-full h-full">
							{collection?.banner && (
								<Image
									src={urlFor(collection?.banner).url()}
									alt={collection?.banner?.alt}
									width={2000}
									height={700}
									className="object-cover object-left-top w-auto h-full"
								/>
							)}
						</div>
						<div className="absolute flex justify-center items-center w-[60%] gap-12 right-0 h-full">
							<h1 className="flex gap-8 justify-center items-center font-scriptFont font-thin text-9xl text-mayaz">
								<span className="font-brandFont text-3xl uppercase tracking-[1.5rem] text-mayazDarker">
									Her
								</span>
								Story
							</h1>
							{!herStory && (
								<Link
									href="/her-story"
									passHref
									className="border border-white/30 py-4 px-8 text-sm text-white uppercase tracking-[0.25rem]"
								>
									Learn More
								</Link>
							)}
						</div>
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
