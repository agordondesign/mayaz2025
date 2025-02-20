/* eslint-disable @typescript-eslint/no-explicit-any */
//'use client';
//import { getProductsByCollection } from '@/lib/api';
import React from 'react';
import ProductList from './ProductList';

type ProductByCollectionProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	section: any;
};

export default async function productByCollection({
	section,
}: ProductByCollectionProps) {
	return (
		<section className="flex flex-col gap-2 w-full">
			{section?.pageFilters === 'sale' ? (
				<ProductList
					products={section?.sale}
					collection={section.collection?.slug?.current}
					columns={section?.productColumns}
					hideFilter={section?.hideFilterBar}
				/>
			) : section?.pageFilters === 'lastCall' ? (
				<ProductList
					products={section?.lastCall}
					collection={section.collection?.slug?.current}
					columns={section?.productColumns}
					hideFilter={section?.hideFilterBar}
				/>
			) : (
				<ProductList
					products={section?.products}
					collection={section.collection?.slug?.current}
					columns={section?.productColumns}
					hideFilter={section?.hideFilterBar}
				/>
			)}
		</section>
	);
}
