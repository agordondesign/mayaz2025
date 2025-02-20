import { defineField, defineType } from 'sanity';
import { RxImage } from 'react-icons/rx';

export const bannerType = defineType({
	name: 'banner',
	title: 'Banner',
	type: 'document',
	icon: RxImage,
	fields: [
		defineField({
			name: 'bannerTitle',
			title: 'Banner Title',
			type: 'string',
		}),
		defineField({
			name: 'bannerText',
			title: 'Banner Text',
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
			name: 'bannerColor',
			title: 'Banner Color',
			type: 'simplerColor',
		}),
		defineField({
			name: 'bannerColumns',
			title: 'Banner Columns',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'bannerSize',
			title: 'Banner Size',
			type: 'string',
			hidden: ({ document }) => document?.bannerColumns === true,
			options: {
				layout: 'radio',
				list: [
					{ title: 'Full-Width', value: 'full-width' },
					{ title: 'Full-Height', value: 'full-height' },
				],
			},
			initialValue: 'full-width',
		}),
		defineField({
			name: 'bannerPosition',
			title: 'Banner Position',
			type: 'string',
			hidden: ({ document }) => document?.bannerColumns === true,
			options: {
				layout: 'radio',
				list: [
					{ title: 'Object-Center', value: 'object-center' },
					{ title: 'Object-Top', value: 'object-top' },
				],
			},
			initialValue: 'object-center',
		}),
		defineField({
			name: 'bannerAd',
			title: 'Banner Ad',
			type: 'reference',
			to: [{ type: 'bannerAd' }],
		}),
	],
	preview: {
		select: {
			title: 'bannerTitle',
			media: 'banner',
		},
		prepare({ title, media }) {
			return {
				title: title,
				subtitle: 'Banner Image & Text',
				media: media,
			};
		},
	},
});
