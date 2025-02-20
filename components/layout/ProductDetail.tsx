'use client';
import React, { useState } from 'react';
import ProductImages from '../ui/ProductImages';
import Breadcrumb from '../ui/Breadcrumb';
import SnipcartButton from '../ui/SnipcartButton';
import { AccordionComponent } from '../ui/AccordionComponent';
import VariantSize from '../ui/VariantSize';
import VariantSet from '../ui/VariantSet';
import type { TypedObject } from '@portabletext/types';
import VariantColor from '../ui/VariantColor';
import RelatedProducts from './RelatedProducts';
//import SnipCartInventory from '../providers/SnipcartInventory';
import ProductTitleDetail from './ProductTitleDetail';
import ProductPricing from './ProductPricing';
//import { Book } from 'lucide-react';
import BookAuthor from './BookAuthor';

type ProductDetailProps = {
	product: {
		book: boolean;
		_id: string;
		productDetails: TypedObject | TypedObject[];
		displayName: string;
		productDescription: TypedObject | TypedObject[];
		relatedProducts: {
			thumbnail: {
				alt: string;
				_type: string;
				asset: { _type: string; _id: string };
			};
			_id: string;
			displayName: string;
			productName: string;
			collection: { slug: string };
			slug: { current: string };
			productImage: {
				alt: string;
				_type: string;
				asset: { _type: string; _id: string };
			}[];
			variantColor: {
				colorName: string;
				colorHex: { value: string; label: string };
			};
			variantSizes: {
				_key: string;
				available: boolean;
				size: { size: string };
				variablePrice: number;
			}[];
			variantSet: {
				_type: string;
				_id: string;
				slug: { current: string };
				collection: { slug: { current: string } };
				variantColor: {
					colorName: string;
					colorHex: { value: string; label: string };
				};
			};
		}[];
		slug: {
			current: string;
		};
		productName: string;
		briefDescription: string;
		author?: { _id: string; name: string }[];
		fabric?: { name: string };
		location?: { location: string };
		regularPrice?: number;
		productPricing: {
			markdownPrice: number;
			discount: number;
			price: number;
		};
		productStatus: { soldOut: boolean };
		categories: { _id: string }[];
		collection: { _id: string; slug: string; name: string; title: string };
		thumbnail: {
			alt: string;
			_type: string;
			asset: {
				_type: string;
				_id: string;
			};
		};
		variantColor: {
			colorName: string;
			colorHex: {
				value: string;
				label: string;
			};
		};
		variantSizes: {
			_key: string;
			available: boolean;
			size: { size: string };
			variablePrice: number;
		}[];
		variantSet: {
			_type: string;
			_id: string;
			thumbnail: {
				alt: string;
				_type: string;
				asset: { _type: string; _id: string };
			};
			slug: {
				current: string;
			};
			collection: {
				slug: {
					current: string;
				};
			};
			variantColor: {
				colorName: string;
				colorHex: {
					value: string;
					label: string;
				};
			};
		};
		productImage: {
			alt: string;
			_type: string;
			asset: {
				_type: string;
				_id: string;
			};
			_key: string;
			_id: string;
		}[];
	};
};

export default function ProductDetail({ product }: ProductDetailProps) {
	//const collection = product.collection.slug;
	const productDescription = product?.productDescription;
	const productDetails = product?.productDetails;
	/*const relatedProductCollection = product?.relatedProducts?.find(
		(product) => product.slug
	);*/
	//const noSize = product?.collection?.slug === 'mersi-nail-polish';

	const firstAvailableSize = product.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	/*const sizeDefault = firstAvailableSize?.sizeLabel
		? firstAvailableSize?.sizeLabel
		: firstAvailableSize?.size.size;
	const [size, setSize] = React.useState(sizeDefault);*/

	const [selectedSize, setSelectedSize] = useState(
		firstAvailableSize?.size.size
	);
	const handleSelectedSize = (data: string) => {
		setSelectedSize(data);
	};
	/*const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});*/
	const increasePrice =
		product.variantSizes?.find((size) => size.size.size === selectedSize)
			?.variablePrice || 0;
	const productPrice = product?.productPricing.price;
	const markdownPrice = product?.productPricing.markdownPrice;
	const discount = product?.productPricing.discount;
	const total = markdownPrice
		? markdownPrice + increasePrice
		: productPrice + increasePrice;
	const discountPrice = (discount / 100) * total;
	const totalPrice = discountPrice ? total - discountPrice : total;

	return (
		<article className="w-full max-w-[96rem] mx-auto pt-2 md:pt-0">
			{/** BREADCRUMBS */}
			<Breadcrumb crumbs={product} />

			{/** PRODUCT PAGE */}
			<div className="flex flex-wrap lg:flex-nowrap justifiy-between gap-6 md:gap-0 lg:gap-0 max-w-full mx-auto mb-16">
				{/** PRODUCT IMAGE */}
				<div className="w-full md:w-1/2 xl:w-2/3 mx-auto">
					<ProductImages gallery={product} />
				</div>

				{/**PRODUCT DESCRIPTION */}
				<div className="relative w-full md:w-1/2 xl:w-1/3 p-0 md:pl-6 lg:pr-0 text-sm flex flex-col">
					<div className="flex flex-col gap-6 md:gap-8 w-full sticky top-[130px] px-4 md:pl-0 md:pr-4">
						<div className="space-y-3">
							{/*<SnipCartInventory productId={product} />*/}
							<ProductTitleDetail product={product} />
							<ProductPricing
								product={product}
								selectedSize={selectedSize || ''}
							/>
						</div>
						{!product.book ? (
							<>
								<VariantColor
									product={product}
									soldout={product.productStatus.soldOut}
								/>
								<VariantSize
									product={[product]}
									onDataChange={handleSelectedSize}
								/>
							</>
						) : (
							<BookAuthor product={product} />
						)}
						<SnipcartButton
							product={{
								_id: product._id,
								book: product.book,
								productStatus: product.productStatus,
								price: totalPrice,
								briefDescription: product.briefDescription,
								thumbnail: product.thumbnail,
								productName: product.productName,
								collection: { slug: { current: product.collection.slug } },
								slug: product.slug,
								colorValue: product.variantColor?.colorName,
								sizeValue: !product.book
									? product.variantSizes
											?.map((size) => size.size.size)
											.join('|')
									: undefined,
								currentSize: selectedSize || '',
							}}
						/>
						<AccordionComponent
							description={productDescription}
							details={productDetails}
						/>
					</div>
				</div>
			</div>

			{/** RELATED PRODUCTS */}
			{product.variantSet && (
				<section className="flex flex-col gap-8">
					<header>
						<h1 className="text-center text-xl lg:text-xl uppercase tracking-[0.75em]">
							<span className="inline-block ml-[0.75em] text-black">
								Take another look
							</span>
						</h1>
					</header>
					<VariantSet
						product={product}
						collection={product.collection.slug}
						columns={5}
					/>
				</section>
			)}
			{product.relatedProducts && (
				<section className="flex flex-col gap-8">
					<header>
						<h1 className="text-center text-xl lg:text-xl uppercase tracking-[0.75em]">
							<span className="inline-block ml-[0.75em] text-black">
								You&apos;ll also love
							</span>
						</h1>
					</header>
					<RelatedProducts products={product} columns={5} />
				</section>
			)}
		</article>
	);
}
