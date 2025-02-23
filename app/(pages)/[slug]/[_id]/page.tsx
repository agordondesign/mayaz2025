import ProductDetail from '@/components/layout/ProductDetail';
import React from 'react';
import { getProductBySlug } from '@/lib/api';

type HerVirtueProductProp = {
	params: Promise<{
		slug: string;
		_id: string;
	}>;
};

export const revalidate = 10; // revalidate at most every hour

export default async function page({ params }: HerVirtueProductProp) {
	const { _id } = await params;
	const product = await getProductBySlug(_id);
	return (
		<div>
			<ProductDetail product={product} />
		</div>
	);
}
