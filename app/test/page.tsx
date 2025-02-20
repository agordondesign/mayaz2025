import {
	//getCollections,
	getLandingPage,
	getProducts,
	getSiteSettings,
	getSorting,
} from '@/lib/api';
import React from 'react';

export default async function page() {
	const siteSettings = await getSiteSettings();
	const landingPage = await getLandingPage();
	const products = await getProducts();
	const sorting = await getSorting();
	//const collections = await getCollections();
	return (
		<div className="container mx-auto space-y-6 py-6">
			<div>{siteSettings.title}</div>
			<div>{landingPage.title}</div>
			<div className="space-x-2">
				{products.map((product: { _id: string; productName: string }) => (
					<span key={product._id}>{product.productName}</span>
				))}
			</div>
			<div className="space-x-2">
				{sorting.map((sort: { sortValue: string; sortLabel: string }) => (
					<span key={sort.sortValue}>{sort.sortLabel}</span>
				))}
			</div>
			{/*<div className="space-x-2">
				{collections.map((collection: { _id: string; title: string }) => (
					<span key={collection._id}>{collection.title}</span>
				))}
			</div>*/}
		</div>
	);
}
