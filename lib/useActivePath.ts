import React from 'react';
import { usePathname } from 'next/navigation';

export default function useActivePath(): (path: string) => boolean {
	const pathname = usePathname();

	const checkActivePath = (path: string) => {
		return path === pathname;
	};
	return checkActivePath;
}
