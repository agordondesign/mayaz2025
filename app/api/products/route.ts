// app/api/products/route.js
export async function GET() {
	try {
		const response = await fetch('https://app.snipcart.com/api/products', {
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${btoa(
					process.env.NEXT_PUBLIC_SNIPCART_API_KEY || ''
				)}`,
			},
		});

		if (!response.ok) {
			throw new Error(`Error fetching products: ${response.statusText}`);
		}

		const data = await response.json();
		return Response.json(data, { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			return Response.json({ error: error.message }, { status: 500 });
		}
	}
}
