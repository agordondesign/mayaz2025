/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
//import PageBanner from './PageBanner';
//import PageBannerPromotion from './PageBannerPromotion';
import ProductList from './ProductList';

type CollectionProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	products: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	collection?: any;
	columns?: number;
};

export default async function Collection({
	products,
	collection,
	columns,
}: CollectionProps) {
	//const { slug } = await params;
	//const collections = await getCollectionBySlug(collection.slug.current);
	return (
		<>
			<section className="flex flex-col gap-2 w-full">
				<ProductList
					products={products}
					collection={collection}
					columns={columns}
				/>
			</section>
		</>
	);
}
