import { defineField, defineType } from 'sanity';
import { AiOutlineTag } from 'react-icons/ai';

export const productSetType = defineType({
	name: 'productSet',
	title: 'Product Set',
	type: 'document',
	icon: AiOutlineTag,
	fields: [
		defineField({
			name: 'setName',
			title: 'Set Name',
			description: 'Name of the product set',
			type: 'string',
		}),
		defineField({
			name: 'productSet',
			title: 'Variant Set',
			description: 'Product with color variants',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'product' } }],
		}),
	],
	preview: {
		select: {
			title: 'setName',
		},
		prepare({ title }) {
			return {
				title: title,
				subtitle: 'Product Set',
			};
		},
	},
});
