'use client'; // Required for client-side fetching in Next.js App Router

import { useEffect, useState } from 'react';

export default function SnipcartProductList() {
	type Product = {
		id: string;
		name: string;
		price: number;
		stock: number;
		url: string;
	};

	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/api/products');
				const data = await response.json();
				if (response.ok) {
					setProducts(data);
				} else {
					throw new Error(data.error || 'Failed to fetch products');
				}
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unknown error occurred');
				}
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) return <p>Loading products...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h2>Product List</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<strong>{product.name}</strong> - ${product.price}
						<br />
						Stock: {product.stock > 0 ? product.stock : 'Out of stock'}
						<br />
						<a href={product.url} target="_blank" rel="noopener noreferrer">
							View Product
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
