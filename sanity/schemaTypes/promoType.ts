import { defineField, defineType } from 'sanity';
import { RxImage } from 'react-icons/rx';

export const promoType = defineType({
	name: 'promo',
	title: 'Promo',
	type: 'document',
	icon: RxImage,
	fields: [
		defineField({
			name: 'promoTitle',
			title: 'Promo Title',
			type: 'string',
		}),
		defineField({
			name: 'banner',
			title: 'Banner',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative text',
					type: 'string',
				},
			],
		}),
		defineField({
			name: 'bannerSize',
			title: 'Banner Size',
			type: 'string',
			options: {
				layout: 'radio',
				list: [
					{ title: 'FUll-Width', value: 'full-width' },
					{ title: 'Full-Height', value: 'full-height' },
				],
			},
			initialValue: 'full-width',
		}),
		defineField({
			name: 'bannerLink',
			title: 'Banner Link',
			type: 'reference',
			to: [{ type: 'page' }, { type: 'product' }],
		}),
	],
	preview: {
		select: {
			title: 'promoTitle',
			media: 'banner',
		},
		prepare({ title, media }) {
			return {
				title: title,
				subtitle: 'Promo',
				media: media,
			};
		},
	},
});
