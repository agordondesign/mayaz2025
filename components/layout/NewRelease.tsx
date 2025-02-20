/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import React from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { HiArrowLongRight } from 'react-icons/hi2';

type NewReleaseProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	arrival: any;
};

export default function NewRelease({ arrival }: NewReleaseProps) {
	const newestArrival = arrival?.newestArrival?.newestArrival;
	const newestArrivalColor = arrival?.newestArrival?.newestArrivalColor?.value;
	const newArrival = arrival?.newArrival?.newArrival;
	const newArrivalColor = arrival?.newArrival?.newArrivalColor?.value;
	return (
		<section className="flex flex-col md:flex-row justify-center items-center w-full">
			{newestArrival && (
				<ClientSideRoute
					route={`/${newestArrival?.collection?.slug?.cuurent}/${
						newestArrival?.slug?.current ?? ''
					}`}
				>
					<div className="relative flex justify-center items-center gap-4 image-box w-full max-h-[700px] overflow-hidden">
						<div>
							<Image
								src={urlFor(
									newestArrival?.productStatus?.featuredThumbnail
								).url()}
								alt={newestArrival?.productStatus?.featuredThumbnail?.alt}
								width={478}
								height={647}
								className={`object-cover w-screen h-full group-hover:scale-[150%] transform transition-transform duration-300 ease-in-out ${newArrivalColor} ? bg-[${newArrivalColor}] : 'bg-pink-400'`}
								style={{ background: newestArrivalColor && newestArrivalColor }}
							/>
						</div>
						<div className="absolute flex flex-col gap-6 w-auto h-auto">
							<span className="flex justify-center items-center w-full h-full text-3xl tracking-[0.25rem] text-white font-essenceAltFont">
								{newestArrival.displayName
									? newestArrival.displayName
									: newestArrival.productName}
							</span>
							<div className="flex justify-center items-center w-auto h-full z-10">
								<button
									type="button"
									className="flex gap-2 justify-center items-center border bg-black/20 border-white/30 backdrop-blur-md text-white text-sm px-6 py-4 uppercase tracking-[0.25rem]"
								>
									Buy Now <HiArrowLongRight />
								</button>
							</div>
						</div>
					</div>
				</ClientSideRoute>
			)}
			{newArrival && (
				<ClientSideRoute
					route={`/${newArrival?.collection?.slug?.cuurent}/${
						newArrival?.slug?.current ?? ''
					}`}
				>
					<div className="relative flex justify-center items-center image-box w-full max-h-[700px] overflow-hidden">
						<div>
							<Image
								src={urlFor(newArrival?.productStatus?.featuredThumbnail).url()}
								alt={newArrival?.productStatus?.featuredThumbnail?.alt}
								width={478}
								height={647}
								className={`object-cover w-screen h-full group-hover:scale-[150%] transform transition-transform duration-300 ease-in-out ${newArrivalColor} ? bg-[${newArrivalColor}] : 'bg-pink-400'`}
								style={{ background: newArrivalColor && newArrivalColor }}
							/>
						</div>
						<div className="absolute flex flex-col gap-6 w-auto h-auto">
							<span className="flex justify-center items-center w-full h-full text-3xl tracking-[0.25rem] text-white font-essenceAltFont">
								{newArrival.displayName
									? newArrival.displayName
									: newArrival.productName}
							</span>
							<div className="flex justify-center items-center w-auto h-full z-10">
								<button
									type="button"
									className="flex gap-2 justify-center items-center border bg-black/20 border-white/30 backdrop-blur-md text-white text-sm px-6 py-4 uppercase tracking-[0.25rem]"
								>
									Buy Now <HiArrowLongRight />
								</button>
							</div>
						</div>
					</div>
				</ClientSideRoute>
			)}
		</section>
	);
}
