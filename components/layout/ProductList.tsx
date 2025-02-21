'use client';
import React, { Fragment } from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import type { TypedObject } from '@portabletext/types';
import { motion } from 'framer-motion';
//import { RxColorWheel } from 'react-icons/rx';

type ProductListProps = {
	products: {
		variantColor: {
			colorName: string;
			colorHex: { value: string; label: string };
		};
		available: boolean;
		hiddenListItem: boolean;
		hiddenListItemDefault: boolean;
		productStatus: {
			soldOut: boolean;
			featured: boolean;
			sale: boolean;
			lastCall: boolean;
		};
		productPricing: {
			discount: number;
			markdownPrice: number;
			price: number;
		};
		_key: string;
		_id: string;
		collection: {
			slug: string;
		};
		slug: {
			current: string;
		};
		thumbnail: {
			alt: string;
		};
		displayName?: string;
		productName: string;
		productDetails: TypedObject | TypedObject[];
		productDescription: TypedObject | TypedObject[];
	}[];
	collection?: {
		slug: {
			current: string;
		};
	};
	columns?: number;
	hideFilter?: boolean;
};

export default function ProductList({
	products,
	collection,
	columns,
	hideFilter,
}: ProductListProps) {
	const [filter, setFilter] = React.useState('');

	const filterProducts = products.filter((product) => {
		if (filter === 'featured') {
			return product.productStatus.featured === true;
		}
		if (filter === 'sale') {
			return product.productStatus.sale === true;
		}
		if (filter === 'lastCall') {
			return product.productStatus.lastCall === true;
		}
		return true;
	});
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<section>
			{!hideFilter && (
				<div className="border-y p-4 space-x-8 w-full mx-auto text-xs font-normal text-center text-black tracking-[0.15rem]">
					<button
						type="button"
						value=""
						onClick={(e) => setFilter(e.currentTarget.value)}
						className="uppercase"
					>
						All
					</button>
					<button
						type="button"
						value="featured"
						onClick={(e) => setFilter(e.currentTarget.value)}
						className="uppercase"
					>
						Featured
					</button>
					<button
						type="button"
						value="sale"
						onClick={(e) => setFilter(e.currentTarget.value)}
						className="uppercase"
					>
						Sale
					</button>
					<button
						type="button"
						value="lastCall"
						onClick={(e) => setFilter(e.currentTarget.value)}
						className="uppercase"
					>
						Last Call
					</button>
				</div>
			)}
			<div
				className={`grid grid-cols-2 ${
					columns === 6
						? 'lg:grid-cols-6'
						: columns === 5
						? 'lg:grid-cols-5'
						: columns === 4
						? 'lg:grid-cols-4'
						: columns === 3
						? 'lg:grid-cols-3'
						: 'lg:grid-cols-4'
				} !gap-2 gap-y-5 md:gap-y-6 lg:!gap-y-12 mx-auto pt-6 overflow-hidden`}
			>
				{collection &&
					filterProducts.map((product) => (
						<Fragment key={product._id}>
							{product.available && !product.hiddenListItem && (
								<ClientSideRoute
									route={`/${collection}/${product?.slug?.current ?? ''}`}
								>
									<motion.div
										className=""
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										//whileInView={{ opacity: 1 }}
										transition={{ duration: 0.5 }}
									>
										<div className="relative group image-box overflow-hidden">
											<Image
												src={urlFor(product.thumbnail).url()}
												alt={product.thumbnail.alt}
												width={478}
												height={647}
												className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300 ease-in-out"
											/>
											{product.productStatus.soldOut && (
												<span className="absolute inline-block top-4 right-4 uppercase font-medium text-xs p-1 px-2 bg-black text-white">
													sold out
												</span>
											)}
										</div>
										<div className="relative min-w-full text-black mt-2 p-2 text-left">
											<div>
												<h2 className="flex flex-col text-sm w-full pb-1">
													{product.displayName
														? product.displayName
														: product.productName}
													{product.variantColor?.colorName && (
														<span className="text-xs text-mayazDark">
															{product.hiddenListItemDefault === true ? (
																<span className="flex items-center gap-1">
																	<Image
																		src="/color-wheel.svg"
																		alt="Multiple Colors Available"
																		width={14}
																		height={14}
																	/>
																	Multiple Colors Available
																</span>
															) : (
																product.variantColor?.colorName
															)}
														</span>
													)}
												</h2>
											</div>
											<div>
												<div className="flex justify-between items-center text-sm w-full text-mayazDark">
													<div className="gap-2 font-medium">
														<div className="flex items-center gap-3">
															{product.productPricing.markdownPrice ? (
																<>
																	<span className="line-through opacity-50">
																		{formatter.format(
																			product.productPricing.price
																		)}
																	</span>
																	<span>
																		{formatter.format(
																			product.productPricing.markdownPrice
																		)}
																	</span>
																	{product.productPricing.discount && (
																		<span className="flex items-center text-xs bg-teal-500 rounded-full text-white px-2 pt-0.5 pb-[1px]">
																			{product.productPricing.discount}% Off
																		</span>
																	)}
																</>
															) : (
																<>
																	<span>
																		{formatter.format(
																			product.productPricing.price
																		)}
																	</span>
																	{product.productPricing.discount && (
																		<span className="flex items-center text-xs bg-teal-500 rounded-full text-white px-2 py-0.5 pb-[1px]">
																			{product.productPricing.discount}% Off
																		</span>
																	)}
																</>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</motion.div>
								</ClientSideRoute>
							)}
						</Fragment>
					))}
			</div>
		</section>
	);
}
