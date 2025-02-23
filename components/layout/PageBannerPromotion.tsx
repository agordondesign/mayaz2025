/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react';
import ClientSideRoute from '../common/ClientSideRoute';

type PageBannerPromotionProps = {
	page: {
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
					colSpan: string;
				};
			}[];
		}[];
	};
};

export default function PageBannerPromotion({
	page,
}: PageBannerPromotionProps) {
	return (
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
	);
}
