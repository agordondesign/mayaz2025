/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import React from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { HiArrowLongRight } from 'react-icons/hi2';
//import Link from 'next/link';

type NewReleaseProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	arrival: any;
};

export default function SingleFeatureBanner({ arrival }: NewReleaseProps) {
	const newestArrival = arrival?.newestArrival?.newestArrival;
	//const newestArrivalColor = arrival?.newestArrival?.newestArrivalColor?.value;
	//const newArrivalColor = arrival?.newArrival?.newArrivalColor?.value;
	return (
		<section className="relative flex flex-col md:flex-row justify-center items-center w-full">
			{newestArrival && (
				<ClientSideRoute
					route={`/${newestArrival?.collection?.slug?.cuurent}/${
						newestArrival?.slug?.current ?? ''
					}`}
				>
					{/*<Link href="/her-story" passHref>*/}
					<div className="absolute right-0 flex flex-col gap-6 justify-center items-center z-10 w-full h-full md:pr-6 lg:pr-20 bg-transparent">
						<div className="relative flex flex-col w-auto h-auto">
							<span className="inline-block text-3xl tracking-[0.25rem] text-white font-essenceAltFont z-10">
								{newestArrival.displayName
									? newestArrival.displayName
									: newestArrival.productName}
							</span>
							<span className="absolute flex justify-center items-center text-center w-full text-3xl tracking-[0.25rem] text-black font-essenceAltFont font-extrabold blur-md z-0">
								{newestArrival.displayName
									? newestArrival.displayName
									: newestArrival.productName}
							</span>
							<span className="absolute flex justify-center items-center text-center w-full text-3xl tracking-[0.25rem] text-black font-essenceAltFont mt-[2px] ml-[1px] z-0">
								{newestArrival.displayName
									? newestArrival.displayName
									: newestArrival.productName}
							</span>
						</div>
						<div className="flex justify-center items-center w-auto z-10">
							<button
								type="button"
								className="flex gap-2 justify-center items-center border bg-black/20 border-white/30 backdrop-blur-md text-white text-sm px-6 py-4 uppercase tracking-[0.25rem]"
							>
								Buy Now <HiArrowLongRight />
							</button>
						</div>
					</div>
					<div className="w-full h-full max-h-[441px] sm:max-h-[681px] md:max-h-[425px] lg:max-h-[575px] xl:max-h-[699px] overflow-hidden">
						{newestArrival?.productStatus?.featuredThumbnailMobile ? (
							<>
								<Image
									src={urlFor(
										newestArrival?.productStatus?.featuredThumbnailMobile
									).url()}
									alt={
										newestArrival?.productStatus?.featuredThumbnailMobile?.alt
									}
									width={2000}
									height={700}
									className="md:hidden object-cover object-left-top w-full h-auto lg:w-auto lg:h-full aspect-square md:aspect-auto"
								/>
								<Image
									src={urlFor(
										newestArrival?.productStatus?.featuredThumbnail
									).url()}
									alt={newestArrival?.productStatus?.featuredThumbnail?.alt}
									width={2000}
									height={700}
									className="hidden md:block object-cover object-left-top w-full h-auto lg:w-auto lg:h-full aspect-square md:aspect-auto"
								/>
							</>
						) : (
							<Image
								src={urlFor(
									newestArrival?.productStatus?.featuredThumbnail
								).url()}
								alt={newestArrival?.productStatus?.featuredThumbnail?.alt}
								width={2000}
								height={700}
								className="object-cover object-left-top w-full h-auto lg:w-auto lg:h-full aspect-square md:aspect-auto"
							/>
						)}
					</div>
					{/*</Link>*/}
				</ClientSideRoute>
			)}
		</section>
	);
}
