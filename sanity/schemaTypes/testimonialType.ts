import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
	name: 'testimonial',
	title: 'Testimonial',
	type: 'document',
	fields: [
		defineField({
			name: 'clientName',
			title: 'Client Name',
			type: 'string',
			initialValue: 'Anonymous',
		}),
		defineField({
			name: 'productName',
			title: 'Product Name',
			type: 'string',
		}),
		defineField({
			name: 'productLink',
			title: 'Product Link',
			type: 'string',
		}),
		defineField({
			name: 'testimonial',
			title: 'Testimonial',
			type: 'blockContent',
		}),
	],
});
