import { defineField, defineType } from 'sanity';
import { RxRulerHorizontal } from 'react-icons/rx';

export const sizeType = defineType({
	name: 'size',
	title: 'Size',
	description: 'Sizes for products',
	type: 'document',
	icon: RxRulerHorizontal,
	fields: [
		defineField({
			name: 'size',
			title: 'Size',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'size',
		},
		prepare({ title }) {
			return {
				title: title || 'No size',
			};
		},
	},
});
