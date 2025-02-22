'use client';
import React, { useEffect } from 'react';

import type { ReactNode } from 'react';

export default function SnipcartCustom({ children }: { children: ReactNode }) {
	useEffect(() => {
		document.addEventListener('snipcart.ready', (e: Event) => {
			const snipcartReadyEvent = e as CustomEvent;
			const Snipcart = snipcartReadyEvent.detail.sdk;
			Snipcart.api.theme.customization.registerPaymentFormCustomization({
				input: {
					color: '#000000',
					border: '1px solid #D3CFC5',
					placeholder: {
						color: '#958A79',
					},
				},
				label: {
					color: '#000000',
				},
			});
		});
	}, []);
	return <>{children}</>;
}
