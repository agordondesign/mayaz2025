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
			name: 'colSpan',
			title: 'Column Span',
			type: 'string',
			options: {
				layout: 'radio',
				list: [
					{ title: 'col-span-1', value: 'span 1 / span 1' },
					{ title: 'col-span-2', value: 'span 2 / span 2' },
					{ title: 'col-span-3', value: 'span 3 / span 3' },
				],
			},
			initialValue: 'span 1 / span 1',
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
