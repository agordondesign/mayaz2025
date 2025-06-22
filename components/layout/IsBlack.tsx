'use client';

import { usePathname } from 'next/navigation';

export default function IsBlack({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const niche = pathname?.includes('niche-micro-loc-studio');
	return (
		<div
			className={`${
				niche ? 'bg-[#1F1F1F]' : ''
			} w-full min-w-screen h-full min-h-screen`}
		>
			{children}
		</div>
	);
}
