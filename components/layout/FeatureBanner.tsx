import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

type FeatureBannerProps = {
	feature: {
		slug: {
			current: string;
		};
		collection: {
			slug: {
				current: string;
			};
		}[];
		_id: string;
		image05: {
			alt: string;
			asset: {
				_id: string;
				url: string;
			};
		};
		image04: {
			alt: string;
			asset: {
				_id: string;
				url: string;
			};
		};
		image03: {
			alt: string;
			asset: {
				_id: string;
				url: string;
			};
		};
		image02: {
			alt: string;
			asset: {
				_id: string;
				url: string;
			};
		};
		image01: {
			alt: string;
			asset: {
				_id: string;
				url: string;
			};
		};
		price: number;
		bannerTitle: string;
	};
};

export default function FeatureBanner({ feature }: FeatureBannerProps) {
	return (
		<section className="w-full">
			<div className="max-w-[96rem] w-full mx-auto text-white">
				<Link
					key={feature._id}
					href={`/${feature?.collection[0]?.slug?.current}/${
						feature?.slug?.current ?? ''
					}`}
				>
					<div className="grid grid-rows-2 grid-cols-2 md:grid-rows-3 md:grid-cols-3 grid-flow-col gap-2 h-[450px] md:h-[450px] lg:h-[600px] transition-all ease-in-out duration-300">
						<div className="relative row-span-2 md:row-span-3 overflow-hidden bg-stone-200">
							<Image
								src={urlFor(feature.image01).url()}
								alt={feature.image01.alt}
								width={1440}
								height={720}
								style={{
									objectFit: 'cover',
									//objectPosition: 'center 20px',
								}}
								className="w-full h-full scale-[130%] lg:scale-[130%] object-[center_50px]"
							/>
							<div className="absolute bottom-0 left-0 righ-0 py-2 px-4 text-mayazLight bg-black bg-blur-sm bg-opacity-30 text-xs">
								<h2 className="text-base w-full pb-1">{feature.bannerTitle}</h2>
								<div className="text-sm pb-2 text-yellow-300">
									<span>${feature.price}.00 USD</span>
								</div>
							</div>
						</div>
						<div className="md:row-span-2 overflow-hidden bg-stone-200">
							<Image
								src={urlFor(feature.image02).url()}
								alt={feature.image02.alt}
								width={1440}
								height={720}
								style={{
									objectFit: 'cover',
									//objectPosition: 'center 20px',
								}}
								className="w-full h-full object-[center_-20px] md:object-top lg:object-[center_-50px]"
							/>
						</div>
						<div className="overflow-hidden bg-stone-200">
							<Image
								src={urlFor(feature.image03).url()}
								alt={feature.image03.alt}
								width={1440}
								height={720}
								style={{
									objectFit: 'cover',
									//objectPosition: 'center 20px',
								}}
								className="w-full h-full object-center"
							/>
						</div>
						<div className="overflow-hidden hidden md:block bg-stone-200">
							<Image
								src={urlFor(feature.image04).url()}
								alt={feature.image04.alt}
								width={1440}
								height={720}
								style={{
									objectFit: 'cover',
									//objectPosition: 'center 20px',
								}}
								className="w-full h-full object-[center_-20px] md:object-center lg:object-[center_-285px]"
							/>
						</div>
						<div className="md:row-span-2 overflow-hidden hidden md:block bg-stone-200">
							<Image
								src={urlFor(feature.image05).url()}
								alt={feature.image05.alt}
								width={1440}
								height={720}
								style={{
									objectFit: 'cover',
									//objectPosition: 'center 20px',
								}}
								className="w-full h-full object-[center_-20px] md:object-center lg:object-[center_-75px]"
							/>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
}
