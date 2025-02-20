/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { Fragment } from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

type VariantSetProp = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	product: any;
	collection?: string;
	columns: number;
};

export default function VariantSet({
	product,
	collection,
}: //columns,
VariantSetProp) {
	return (
		<div className="relative w-full h-[445px] overflow-hidden">
			<div className="absolute flex flex-row w-full gap-2 pb-10 overflow-scroll">
				{/*<div
				className={`grid grid-cols-2 ${
					columns === 5
						? 'lg:grid-cols-5'
						: columns === 4
						? 'lg:grid-cols-4'
						: columns === 3
						? 'lg:grid-cols-3'
						: 'lg:grid-cols-4'
				} !gap-x-2 gap-y-28 mx-auto pb-24 pt-6`}
			>*/}
				{product.variantSet.map(
					(variant: {
						productSet: {
							variantColor: {
								colorName: string;
							};
							productPricing: {
								markdownPrice: number;
								price: number;
							};
							productName: string;
							displayName: string;
							thumbnail: { alt: string };
							slug: { current: string };
							_id: string;
						}[];
						_id: string;
					}) => (
						<Fragment key={variant._id}>
							{variant.productSet.map(
								(product: {
									variantColor: {
										colorName: string;
									};
									productPricing: {
										markdownPrice: number;
										price: number;
									};
									productName: string;
									displayName: string;
									thumbnail: { alt: string };
									slug: { current: string };
									_id: string;
								}) => (
									<ClientSideRoute
										key={product._id}
										route={`/${collection}/${product?.slug?.current ?? ''}`}
									>
										<div className="w-64">
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
																	<span>
																		${product.productPricing.markdownPrice}.00
																	</span>
																</div>
															) : (
																<span>${product.productPricing.price}.00</span>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</ClientSideRoute>
								)
							)}
						</Fragment>
					)
				)}
				{/*</div>*/}
			</div>
		</div>
	);
}
