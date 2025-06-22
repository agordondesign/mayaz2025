'use client';

import { motion } from 'framer-motion';
//import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
	//const pathname = usePathname();
	//const niche = pathname?.includes('niche-micro-loc-studio');
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.75 }}
		>
			{children}
			{/*<div className={`${niche ? 'bg-black' : ''}`}>{children}</div>*/}
		</motion.div>
	);
}
