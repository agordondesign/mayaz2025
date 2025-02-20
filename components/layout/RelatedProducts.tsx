/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

type ProductSetProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	products: any;
	collection?: string;
	columns?: number;
};

export default function ProductSet({
	products,
	//collection,
	columns,
}: ProductSetProps) {
	return (
		<div
			className={`grid grid-cols-2 ${
				columns === 5
					? 'lg:grid-cols-5'
					: columns === 4
					? 'lg:grid-cols-4'
					: columns === 3
					? 'lg:grid-cols-3'
					: 'lg:grid-cols-4'
			} !gap-2 gap-y-5 md:gap-y-6 lg:gap-y-16 mx-auto pb-24 pt-6 overflow-hidden`}
		>
			{products.relatedProducts.map(
				(product: {
					variantColor: {
						colorName: string;
					};
					productPricing: {
						markdownPrice: number;
						price: number;
					};
					collection: { slug: { current: string } };
					productName: string;
					displayName: string;
					slug: { current: string };
					thumbnail: {
						alt: string;
						_type: string;
						asset: { _type: string; _id: string };
					};
					_id: string;
				}) => (
					<ClientSideRoute
						key={product._id}
						route={`/${product.collection.slug.current}/${
							product?.slug?.current ?? ''
						}`}
					>
						<Image
							src={urlFor(product.thumbnail).url()}
							alt={product.thumbnail.alt}
							width={478}
							height={647}
							className="object-contain w-full h-auto image-box"
						/>
						<div className="relative min-w-full text-black mt-2 p-2 text-left">
							<div>
								<h2 className="flex flex-col text-sm w-full pb-1">
									{product.displayName
										? product.displayName
										: product.productName}
									{product.variantColor?.colorName && (
										<span className="text-xs text-mayazDark">
											{product.variantColor?.colorName}
										</span>
									)}
								</h2>
							</div>
							<div>
								<div className="text-sm w-full text-mayazDark">
									<div className="gap-2 font-medium">
										{product.productPricing.markdownPrice ? (
											<div className="flex items-center gap-3">
												<span className="line-through opacity-50">
													${product.productPricing.price}.00
												</span>
												<span>${product.productPricing.markdownPrice}.00</span>
											</div>
										) : (
											<span>${product.productPricing.price}.00</span>
										)}
									</div>
								</div>
							</div>
						</div>
					</ClientSideRoute>
				)
			)}
		</div>
	);
}
