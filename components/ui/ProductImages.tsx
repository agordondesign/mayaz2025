'use client';

import { urlFor } from '@/sanity/lib/image';
import React from 'react';
import Image from 'next/image';
//import MuxPlayer from '@mux/mux-player-react';
//import MuxVideo from './MuxVideo';

type ProductImagesProps = {
	gallery: {
		thumbnail: {
			alt: string;
			_type: string;
			asset: {
				_type: string;
				_id: string;
			};
		};
		productImage: {
			_key: string;
			_id: string;
			alt: string;
			_type: string;
			asset: {
				_type: string;
				_id: string;
			};
		}[];
	};
};

export default function ProductImages({ gallery }: ProductImagesProps) {
	const productImage = gallery.productImage;
	return (
		<div
			className={`grid grid-cols-1
		${
			Array.isArray(productImage) && productImage?.length !== 0
				? 'xl:grid-cols-2 gap-2'
				: 'xl:grid-cols-1 image-box'
		}`}
		>
			{/*<MuxVideo playbackId={gallery.productVideo.video?.playbackId} />*/}
			<div
				className={`relative w-full lg:w-auto aspect-w-1 aspect-h-1
				${
					Array.isArray(productImage) && productImage?.length !== 0
						? ' w-full image-box'
						: 'w-1/2 mx-auto'
				}`}
			>
				<Image
					src={urlFor(gallery.thumbnail).url()}
					alt={gallery.thumbnail.alt}
					width={478}
					height={647}
					className="object-cover w-full h-full"
				/>
				{/*})*/}
			</div>
			{productImage?.map((image) => (
				<div
					key={image._key}
					className="relative w-full aspect-w-1 aspect-h-1 image-box"
				>
					{/*{image._type === 'productVideo' ? (
						<MuxVideo playbackId={image.video?.playbackId} />
					) : (*/}
					<Image
						src={urlFor(image).url()}
						alt={image.alt}
						width={478}
						height={647}
						className="object-cover w-full h-full"
					/>
					{/*})*/}
				</div>
			))}
		</div>
	);
}
