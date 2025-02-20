/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';

declare global {
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		Snipcart: any;
	}
}

type SnipCartInventoryProps = {
	productId: {
		_id: string;
	};
};

export default function SnipCartInventory({
	productId,
}: SnipCartInventoryProps) {
	useEffect(() => {
		document.addEventListener('snipcart.ready', () => {
			console.log('sipcart ready');

			window.Snipcart.events.on('item.updated', () => {
				console.log('item updated');
			});

			window.Snipcart.product.get(productId._id, 'stock', (data: number) => {
				console.log('data:', data);
			});
		});
	}, [productId._id]);

	return (
		<div>
			<p>Inventory: </p>
			<p>ProductId: {productId._id}</p>
		</div>
	);
}
