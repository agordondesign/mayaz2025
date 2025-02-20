'use client';

import useActivePath from '@/lib/useActivePath';
import Link from 'next/link';

export default function ClientSideRoute(
	{
		children,
		route,
	}: {
		children: React.ReactNode;
		route: string;
	} = { children: null, route: '' }
) {
	const checkActivePath = useActivePath();
	return (
		<Link
			href={route}
			className={`
					${checkActivePath(route) ? 'active' : ''}
				`}
		>
			{children}
		</Link>
	);
}
