'use client';
import { useEffect, useState } from 'react';

export default function InventoryList() {
	interface InventoryItem {
		id: number;
		name: string;
		stock: number;
		price: number;
	}

	const [inventory, setInventory] = useState<InventoryItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchInventory() {
			try {
				const response = await fetch('/api/inventory');
				const data = await response.json();
				setInventory(data);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unknown error occurred');
				}
			} finally {
				setLoading(false);
			}
		}

		fetchInventory();
	}, []);

	if (loading) return <p>Loading inventory...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h2>Product Inventory</h2>
			<ul>
				{inventory.map((item) => (
					<li key={item.id}>
						<strong>{item.name}</strong> - {item.stock} in stock - ${item.price}
					</li>
				))}
			</ul>
		</div>
	);
}
