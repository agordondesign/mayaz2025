'use client';
//import { getProductBySlug, getProducts } from '@/lib/api';
//import { client } from '@/sanity/lib/client';
import React, { useState } from 'react';
import ClientSideRoute from '../common/ClientSideRoute';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

//export async function getStaticProps() {
//const query = `*[_type == "product"]`;
//const initialProducts = await client.fetch(query);
//const initialProducts = await getProducts();

//return {
//props: { initialProducts },
//};
//}

interface AllProductListProps {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	initialProducts: any;
	columns?: number;
}

export default function AllProductList({
	columns,
	initialProducts,
}: AllProductListProps) {
	//const initialProducts = await getProducts();
	const [filteredProducts, setFilteredProducts] = useState(initialProducts);
	const [categoryFilter, setCategoryFilter] = useState('');
	const [sizeFilter, setSizeFilter] = useState('');

	{
		/*
	const handleAllFilter = (category: string, size: string) => {
		setCategoryFilter(category);
		setSizeFilter(size);
		if (category === '' && size === '') {
			setFilteredProducts(initialProducts);
		} else {
			setFilteredProducts(
				initialProducts.filter(
					(product: any) => product.collection.name === category
				) &&
					initialProducts.filter(
						(product: any) =>
							product.variantSizes?.filter((size: any) => size.size === size)
					)
			);
		}
	};
*/
		// biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
	}

	const handleCategoryFilter = (category: string) => {
		setCategoryFilter(category);
		if (category === '') {
			setFilteredProducts(initialProducts);
		} else {
			setFilteredProducts(
				initialProducts.filter(
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					(product: any) => product.collection.name === category
				)
			);
		}
	};

	const handleSizeFilter = (size: string) => {
		setSizeFilter(size);
		if (size === '') {
			setFilteredProducts(initialProducts);
		} else {
			setFilteredProducts(
				initialProducts.filter(
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					(product: any) =>
						product.variantSizes?.filter(
							// biome-ignore lint/suspicious/noExplicitAny: <explanation>
							(size: any) =>
								(size.size === size && size.available === true) === size
						)
				)
			);
		}
		console.log(
			size,
			initialProducts.filter(
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				(product: any) =>
					product.variantSizes?.filter(
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						(size: any) =>
							(size.size === size && size.available === true) === size
					) && product.productStatus.featured === true
			)
		);
	};

	// biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
	{
		/*const handleSizeFilter = (size: string) => {
		setSizeFilter(size);
		if (size === '') {
			setFilteredProducts(initialProducts);
		} else {
			setFilteredProducts(
				initialProducts.filter(
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					(product: any) => product.productStatus.featured === true
				)
			);
		}
	};*/
	}

	return (
		<section>
			<div className="flex gap-4 border p-4">
				{/* Filter buttons */}
				<button type="button" onClick={() => handleCategoryFilter('')}>
					All
				</button>
				<button
					type="button"
					onClick={() => handleCategoryFilter('Mersi Nail Polish')}
				>
					Mersi Nail Polish
				</button>
				<button
					type="button"
					onClick={() => handleCategoryFilter('Jilbabs & Abayas')}
				>
					Jilbabs & Abayas{' '}
				</button>
			</div>

			<div className="flex gap-4 border p-4">
				{/* Filter buttons */}
				<button type="button" onClick={() => handleSizeFilter('')}>
					All Sizes
				</button>
				<button type="button" onClick={() => handleSizeFilter('56')}>
					56
				</button>
				<button type="button" onClick={() => handleSizeFilter('58')}>
					58
				</button>
				<button type="button" onClick={() => handleSizeFilter('60')}>
					60
				</button>
			</div>

			<div
				className={`grid grid-cols-2 ${
					columns === 5
						? 'lg:grid-cols-5'
						: columns === 4
						? 'lg:grid-cols-4'
						: columns === 3
						? 'lg:grid-cols-3'
						: 'lg:grid-cols-4'
				} !gap-3 gap-y-5 md:!gap-6 md:gap-y-6 lg:gap-y-16 mx-auto pb-24 pt-6 overflow-hidden`}
			>
				{filteredProducts.map((product: Product) => (
					<ClientSideRoute
						key={product?._id}
						route={`/${product.collection.slug}/${
							product?.slug?.current ?? ''
						}`}
					>
						<div className="group image-box overflow-hidden">
							<Image
								src={urlFor(product.thumbnail).url()}
								alt={product.thumbnail.alt}
								width={478}
								height={647}
								className="object-cover w-full h-full group-hover:scale-[115%] transform transition-transform duration-300 ease-in-out"
							/>
						</div>
						<div className="relative min-w-full text-black mt-2 p-2 text-left">
							<div>
								<h2 className="text-sm w-full pb-1">
									{product.displayName
										? product.displayName
										: product.productName}
								</h2>
							</div>
							<div>
								<div className="text-sm w-full text-mayazDark">
									<p className="gap-2 font-medium">$75.00 USD</p>
									<span className="hidden">
										{categoryFilter}
										{sizeFilter}
									</span>
								</div>
							</div>
						</div>
					</ClientSideRoute>
				))}
			</div>
		</section>
	);
}
