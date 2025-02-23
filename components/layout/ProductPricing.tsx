import React from 'react';

type ProductPricingProps = {
	product: {
		regularPrice?: number;
		productPricing: {
			markdownPrice: number;
			discount: number;
			price: number;
		};
		variantSizes: {
			_key: string;
			available: boolean;
			size: { size: string };
			variablePrice: number;
		}[];
	};
	selectedSize: string;
};

export const revalidate = 10; // revalidate at most every hour

export default function ProductPricing({
	product,
	selectedSize,
}: ProductPricingProps) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
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
		<div className="text-2xl text-mayazDark flex">
			<div className="flex flex-col items-start gap-1">
				{markdownPrice ? (
					<>
						<span className="flex items-center line-through text-base">
							{formatter.format(
								discountPrice
									? markdownPrice + increasePrice
									: productPrice + increasePrice
							)}
						</span>
						<span className="flex gap-4 items-center text-black">
							{formatter.format(totalPrice)}
							{!Number.isNaN(discountPrice) && (
								<span className="flex items-center text-sm font-normal text-white bg-teal-500 rounded-full px-4 pt-0.5 pb-[1px]">
									{discount}% Off
								</span>
							)}
						</span>
					</>
				) : discountPrice ? (
					<>
						<span className="flex items-center line-through text-base">
							{formatter.format(productPrice + increasePrice)}
						</span>
						<span className="flex gap-4 items-center text-black">
							{formatter.format(totalPrice)}
							{!Number.isNaN(discountPrice) && (
								<span className="flex items-center text-sm font-normal text-white bg-teal-500 rounded-full px-4 pt-0.5 pb-[1px]">
									{discount}% Off
								</span>
							)}
						</span>
					</>
				) : (
					<span className="flex gap-4 items-center text-black">
						{formatter.format(productPrice + increasePrice)}
					</span>
				)}
			</div>
		</div>
	);
}
