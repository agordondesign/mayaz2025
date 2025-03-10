// app/api/products/route.js
export async function GET() {
	try {
		// Ensure API key exists
		if (!process.env.SNIPCART_API_KEY) {
			throw new Error('Missing SNIPCART_API_KEY in environment variables.');
		}

		// Encode API key using Basic Authentication format
		const authHeader = `Basic ${Buffer.from(
			`${process.env.SNIPCART_API_KEY}:`
		).toString('base64')}`;

		const response = await fetch('https://app.snipcart.com/api/products', {
			headers: {
				Accept: 'application/json',
				Authorization: authHeader,
			},
		});

		// Capture response text for debugging
		const responseText = await response.text(); // Get response for debugging

		if (!response.ok) {
			console.error(`Snipcart API Error (${response.status}):`, responseText);
			return Response.json(
				{ error: responseText },
				{ status: response.status }
			);
		}

		const products = JSON.parse(responseText);

		// Extract relevant inventory data
		const inventoryData = products.items.map(
			(product: {
				id: string;
				name: string;
				stock: number;
				price: number;
				url: string;
			}) => ({
				id: product.id,
				name: product.name,
				stock: product.stock, // Stock availability
				price: product.price,
				url: product.url,
			})
		);

		return Response.json(inventoryData, { status: 200 });
	} catch (error) {
		console.error('Server Error:', error);
		return Response.json({ error: (error as Error).message }, { status: 500 });
	}
}
