import { defineField, defineType } from 'sanity';
import { RxImage } from 'react-icons/rx';

export const featureBannerType = defineType({
	name: 'featureBanner',
	title: 'Feature Banner',
	type: 'document',
	icon: RxImage,
	fields: [
		defineField({
			name: 'bannerTitle',
			title: 'Banner Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'bannerTitle',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
			description: 'Product price in USD (whole numbers only)',
		}),
		defineField({
			name: 'regularPrice',
			title: 'Regular Price',
			type: 'number',
			description: 'Product regular price in USD (whole numbers only)',
		}),
		defineField({
			name: 'collection',
			title: 'Collection',
			type: 'reference',
			to: [{ type: 'collection' }],
		}),
		defineField({
			name: 'image01',
			title: 'Image 01',
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
			name: 'image02',
			title: 'Image 02',
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
			name: 'image03',
			title: 'Image 03',
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
			name: 'image04',
			title: 'Image 04',
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
			name: 'image05',
			title: 'Image 05',
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
