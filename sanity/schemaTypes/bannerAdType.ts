import { defineField, defineType } from 'sanity';
import { RxImage } from 'react-icons/rx';

export const bannerAdType = defineType({
	name: 'bannerAd',
	title: 'Banner Ad',
	type: 'document',
	icon: RxImage,
	fields: [
		defineField({
			name: 'title',
			title: 'Banner Title',
			type: 'string',
		}),
		defineField({
			name: 'adCount',
			title: 'Ad Count',
			type: 'number',
		}),
		defineField({
			name: 'promoAds',
			title: 'Promo Ad Carousel',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'promo' }] }],
		}),
		defineField({
			name: 'promoAd',
			title: 'Promo Ad',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'promo' }] }],
		}),
	],
	preview: {
		select: {
			media: 'banner',
			title: 'title',
			subtitle: 'adCount',
		},
		prepare({ media, title, subtitle }) {
			return {
				title: title,
				subtitle: `Ad Count: ${subtitle}`,
				media: media,
			};
		},
	},
});
