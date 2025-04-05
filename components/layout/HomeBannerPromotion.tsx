'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { usePathname } from 'next/navigation';

type HomeBannerPromotionProps = {
	page: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		promoAd: any;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		promoAds: any;
		sectionModule: {
			promoAd: {
				banner?: {
					alt: string;
					asset: {
						alt: string;
						url: string;
						path: string;
					};
					colSpan: string;
				};
			}[];
		}[];
	};
};

export default function HomeBannerPromotion({
	page,
}: HomeBannerPromotionProps) {
	const isHome = usePathname() === '/';
	return (
		<>
			{isHome ? (
				<section className="grid grid-cols-4 grid-flow-row md:grid-flow-col gap-2 h-[450px]">
					<div className="row-span-1 md:row-span-2 col-span-4 md:col-span-2">
						{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
						{page.promoAds?.map((promoCarousel: any) => (
							<div
								key={promoCarousel._id}
								className="relative col-span-2 md:col-span-1 bg-mayaz/20 h-full lg:h-max-[200px] xl:h-max-[250px] transition-all ease-in-out duration-300"
							>
								<ClientSideRoute
									route={
										promoCarousel?.bannerLink?._type === 'product'
											? `/${
													promoCarousel?.bannerLink?.collection?.slug?.current
											  }/${promoCarousel?.bannerLink?.slug?.current ?? ''}`
											: `/${promoCarousel?.bannerLink?.slug?.current ?? ''}`
									}
								>
									<Image
										src={urlFor(promoCarousel.banner).url()}
										alt={promoCarousel.banner.alt}
										width={1200}
										height={800}
										className="object-cover w-full h-full object-top"
									/>
									<div className="absolute z-10 bottom-0 left-0 top-0 right-0 flex justify-start items-end h-full p-2 md:p-4">
										<span className="text-black bg-mayaz/50 backdrop-blur-md text-xs md:text-sm font-medium tracking-[0.2em] uppercase p-2 py-2 px-4">
											{promoCarousel.promoTitle}
										</span>
									</div>
								</ClientSideRoute>
							</div>
						))}
					</div>
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{page.promoAd?.map((promo: any) => (
						<div
							key={`banner-${promo?._id}`}
							className="relative col-span-2 md:col-span-1 bg-mayaz/20 h-auto md:h-full lg:h-max-[200px] xl:h-max-[250px] transition-all ease-in-out duration-300"
						>
							<ClientSideRoute
								route={
									promo?.bannerLink?._type === 'product'
										? `/${promo?.bannerLink?.collection?.slug?.current}/${
												promo?.bannerLink?.slug?.current ?? ''
										  }`
										: `/${promo?.bannerLink?.slug?.current ?? ''}`
								}
							>
								<Image
									src={urlFor(promo.banner).url()}
									alt={promo.banner.alt}
									width={1200}
									height={800}
									className="object-cover w-full h-full object-top"
								/>
								<div className="absolute z-10 bottom-0 left-0 top-0 right-0 flex justify-start items-end h-full p-2 md:p-4">
									<span className="text-black bg-mayaz/50 backdrop-blur-md text-xs md:text-sm font-medium tracking-[0.2em] uppercase p-2 py-2 px-4">
										{promo.promoTitle}
									</span>
								</div>
							</ClientSideRoute>
						</div>
					))}
				</section>
			) : (
				<section
					className={`grid ${
						page?.promoAd?.length === 1
							? 'grid-cols-1 lg:grid-cols-1'
							: page?.promoAd?.length === 2
							? 'grid-cols-2 lg:grid-cols-2'
							: page?.promoAd?.length === 3
							? 'grid-cols-3 lg:grid-cols-3'
							: page?.promoAd?.length === 4
							? 'grid-cols-2 lg:grid-cols-2'
							: page?.promoAd?.length === 5
							? 'grid-cols-3 lg:grid-cols-3'
							: page?.promoAd?.length === 6
							? 'grid-cols-3 lg:grid-cols-3'
							: ''
					} gap-2`}
				>
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{page.promoAd?.map((promo: any) => (
						<ClientSideRoute
							key={promo?._id}
							route={
								promo?.bannerLink?._type === 'product'
									? `/${promo?.bannerLink?.collection?.slug?.current}/${
											promo?.bannerLink?.slug?.current ?? ''
									  }`
									: `/${promo?.bannerLink?.slug?.current ?? ''}`
							}
						>
							<div
								className="relative bg-mayaz md:bg-mayaz/20 h-[60px] md:h-[150px] lg:h-[200px] xl:h-[250px] transition-all ease-in-out duration-300"
								style={{
									gridColumn: promo.colSpan,
								}}
							>
								<Image
									src={urlFor(promo.banner).url()}
									alt={promo.banner.alt}
									width={1200}
									height={800}
									className="object-cover w-full h-full object-top hidden md:block"
								/>
								<div className="absolute z-10 bottom-0 left-0 top-0 right-0 flex justify-start items-end h-full md:p-4">
									<span className="text-mayazBody md:text-black md:bg-mayaz/50 md:backdrop-blur-md text-xs md:text-sm font-medium tracking-[0.2em] uppercase p-2 md:py-2 md:px-4">
										{promo.promoTitle}
									</span>
								</div>
							</div>
						</ClientSideRoute>
					))}
				</section>
			)}
		</>
	);
}
