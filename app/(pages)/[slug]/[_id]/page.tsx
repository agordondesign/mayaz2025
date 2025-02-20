import ProductDetail from '@/components/layout/ProductDetail';
import React from 'react';
import { getProductBySlug } from '@/lib/api';

type HerVirtueProductProp = {
	params: {
		slug: string;
		_id: string;
	};
};

export default async function page({ params }: HerVirtueProductProp) {
	const { _id } = await params;
	const product = await getProductBySlug(_id);
	return (
		<div>
			<ProductDetail product={product} />
		</div>
	);
}
