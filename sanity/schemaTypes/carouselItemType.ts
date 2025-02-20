import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const carouselItemType = defineType({
	name: 'carouselItem',
	title: 'Carousel Item',
	type: 'object',
	fields: [
		defineField({
			name: 'header',
			title: 'Header',
			type: 'string',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
		defineField({
			name: 'source',
			title: 'Source',
			type: 'string',
		}),
		defineField({
			name: 'backgroundImage',
			title: 'Background Image',
			type: 'array',
			of: [
				{
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
				},
			],
		}),
	],
});
