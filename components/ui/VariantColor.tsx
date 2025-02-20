/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react';
//import VariantSet from './VariantSet';
import ClientSideRoute from '../common/ClientSideRoute';

type VariantColorProp = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	product: any;
	soldout: boolean;
};

export default function VariantColor({ product, soldout }: VariantColorProp) {
	const isColor = product.slug.current;
	return (
		<div className="text-sm gap-4 flex flex-col">
			<div className="text-sm gap-2 flex">
				<span className="align-top font-medium">Color:</span>
				<span className="">{product.variantColor?.colorName}</span>
			</div>
			{product?.variantSet ? (
				<div className="flex gap-3 xl:gap-4 px-1">
					{product.variantSet.map(
						(variant: {
							collection: { slug: string };
							slug: string;
							productSet: {
								productStatus: { soldOut: boolean };
								slug: { current: string };
								variantColor: {
									colorHex: { value: string };
									colorName: string;
								};
								_id: string;
							}[];
							_id: string;
							product: {
								productStatus: boolean;
								slug: { current: string };
								variantColor: { colorHex: { value: string } };
								_id: string;
							};
						}) => (
							<Fragment key={variant._id}>
								{variant.productSet.map(
									(product: {
										productStatus: { soldOut: boolean };
										slug: { current: string };
										variantColor: { colorHex: { value: string } };
										_id: string;
									}) => (
										<ClientSideRoute
											key={product._id}
											route={`/${variant?.collection?.slug}/${
												product?.slug?.current ?? ''
											}`}
										>
											<div
												className={`h-6 w-6 lg:h-7 lg:w-7 rounded-full ${
													isColor === product.slug.current && !soldout
														? 'ring-offset-2 ring-2 ring-black'
														: (isColor === product.slug.current && soldout) ||
														  (isColor !== product.slug.current &&
																product.productStatus.soldOut === true)
														? 'outofstockcolor !h-6 !w-6 lg:!h-7 lg:!w-7 ring-offset-2 ring-1 !ring-mayaz !opacity-50'
														: 'ring-offset-2 ring-1 ring-mayaz !opacity-100 hover:ring-2 hover:scale-105 hover:ring-mayazDark transition-all duration-75 ease-in-out'
												}`}
												style={{
													backgroundColor:
														product.variantColor?.colorHex?.value,
												}}
											/>
										</ClientSideRoute>
									)
								)}
							</Fragment>
						)
					)}
				</div>
			) : (
				<div
					className={`h-6 w-6 lg:h-7 lg:w-7 rounded-full ${
						isColor === product.slug.current && !soldout
							? 'ring-offset-2 ring-2 ring-black'
							: 'outofstockcolor !h-6 !w-6 lg:!h-7 lg:!w-7 ring-offset-2 ring-1 !ring-mayaz !opacity-50'
					}`}
					style={{
						backgroundColor: product.variantColor?.colorHex?.value,
					}}
				/>
			)}
		</div>
	);
}
