'use client';
import React from 'react';
import {
	Tabs,
	//TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/shadcn/tabs';

type TabsComponentProps = {
	product: {
		productStatus: {
			soldOut: boolean;
		};
		variantSizes: {
			_key: string;
			available: boolean;
			size: { size: string };
			sizeLabel?: string;
			variablePrice: number;
		}[];
	}[];
	onDataChange?: (data: string) => void;
};

export default function VariantSize({
	product,
	onDataChange,
}: TabsComponentProps) {
	const firstAvailableSize = product[0]?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	console.log('size:', firstAvailableSize);
	const sizeDefault = firstAvailableSize?.sizeLabel
		? firstAvailableSize?.sizeLabel
		: firstAvailableSize?.size.size;
	const [size, setSize] = React.useState(sizeDefault);
	const handleClick = (variantSize: {
		sizeLabel?: string;
		size: { size: string };
	}) => {
		setSize(
			variantSize.sizeLabel ? variantSize.sizeLabel : variantSize.size.size
		);
		onDataChange?.(variantSize.size.size || '');
	};
	return (
		<div className="text-sm gap-2 flex flex-col">
			<div className="flex gap-4 flex-col">
				<div className="font-medium">
					Size: <span className="font-thin">{size}</span>
				</div>
				<div className="flex justify-start items-center gap-2">
					<Tabs defaultValue={sizeDefault} className="w-auto">
						<TabsList className="flex gap-2">
							{product[0].variantSizes?.map(
								(variantSize: {
									available: boolean;
									_key: string;
									size: {
										size: string;
									};
									sizeLabel?: string;
								}) => (
									<TabsTrigger
										key={variantSize._key}
										value={
											variantSize.sizeLabel
												? variantSize.sizeLabel
												: variantSize.size.size
										}
										onClick={() => handleClick(variantSize)}
										className={` border border-mayaz rounded-none text-sm font-light transition duration-75 ease-in-out ${
											variantSize.available !== true
												? 'outofstocksize pointer-events-none !text-mayazBorder !border-mayazBorder'
												: 'py-3 px-5 hover:!border-black hover:!text-black'
										}
									 ${
											product[0].productStatus.soldOut === true
												? 'outofstocksize pointer-events-none !text-mayazBorder !border-mayazBorder'
												: 'py-3 px-5'
										}`}
									>
										<span className="z-10">{variantSize.size.size}</span>
									</TabsTrigger>
								)
							)}
						</TabsList>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
