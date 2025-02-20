import Link from 'next/link';
import React from 'react';
import ClientSideRoute from '../common/ClientSideRoute';

type BreadcrumbProps = {
	crumbs: {
		displayName: string;
		collection?: {
			_id: string;
			slug: string;
			name: string;
		};
		productName: string;
	};
};

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
	return (
		<div className="my-6 md:flex flex-nowrap gap-2 text-xs hidden">
			<Link href={'/'}>
				<span className="text-mayazDark hover:text-black">Home</span>
			</Link>
			<span>/</span>
			<ClientSideRoute
				key={crumbs?.collection?._id}
				route={`/${crumbs?.collection?.slug}`}
			>
				<span className="block text-mayazDark hover:text-black">
					{crumbs?.collection?.name}
				</span>
			</ClientSideRoute>

			<span>/</span>

			<span className="block text-black font-normal">
				{crumbs?.displayName ? crumbs?.displayName : crumbs?.productName}
			</span>
		</div>
	);
}
