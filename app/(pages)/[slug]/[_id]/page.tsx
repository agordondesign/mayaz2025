import ProductDetail from '@/components/layout/ProductDetail';
import React from 'react';
import { getProductBySlug } from '@/lib/api';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

type HerVirtueProductProp = {
	params: {
		slug: string;
		_id: string;
	};
	searchParams: URLSearchParams;
};

export const revalidate = 10; // revalidate at most every hour

export async function generateStaticParams() {
	const query = groq`*[_type == "product"] {
		...,
    slug,
  }`;
	const slugs: Product[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug?.slug?.current ?? '');

	return slugRoutes.map((slug) => ({
		slug,
	}));
}

export default async function page({ params: { _id } }: HerVirtueProductProp) {
	const product = await getProductBySlug(_id);
	return (
		<div>
			<ProductDetail product={product} />
		</div>
	);
}
