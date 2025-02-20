import React from 'react';

type ProductTitleDetailProps = {
	product: {
		displayName: string;
		productName: string;
		briefDescription: string;
		fabric?: {
			name: string;
		};
		location?: {
			location: string;
		};
	};
};

export default function ProductTitleDetail({
	product,
}: ProductTitleDetailProps) {
	return (
		<div>
			<h1 className="text-2xl uppercase flex items-center">
				{product.displayName ? product.displayName : product.productName}
			</h1>

			<p className="text-sm">
				{(product.briefDescription && product.fabric?.name) ||
				(product.briefDescription && product?.location?.location) ? (
					<>{product.briefDescription}, </>
				) : (
					product.briefDescription
				)}
				{product.fabric?.name && product.location?.location ? (
					<>{product.fabric?.name}, </>
				) : (
					<>{product.fabric?.name}</>
				)}
				{product?.location?.location && (
					<>made in {product?.location?.location}</>
				)}
			</p>

			<p className="text-sm hidden">
				{product.briefDescription}
				{product.briefDescription && product.fabric?.name ? (
					<>
						{product.briefDescription}, {product.fabric?.name}
					</>
				) : (
					product.fabric?.name
				)}

				{product?.fabric?.name && product?.location?.location ? (
					<>, made in {product?.location?.location}</>
				) : (
					<>
						{product?.location?.location && (
							<>made in {product?.location?.location}</>
						)}
					</>
				)}
			</p>
		</div>
	);
}
