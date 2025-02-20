import { defineField, defineType } from 'sanity';
import { TbRulerMeasure } from 'react-icons/tb';

export const variantSizeType = defineType({
	name: 'variantSize',
	title: 'Variant Sizes',
	description: 'Sizes for products',
	type: 'document',
	fields: [
		defineField({
			name: 'size',
			title: 'Size',
			type: 'reference',
			to: [{ type: 'size' }],
		}),
		defineField({
			name: 'sizeLabel',
			title: 'Size Label',
			type: 'string',
		}),
		defineField({
			name: 'available',
			description: 'Product inventory availabilty.',
			title: 'Available',
			type: 'boolean',
			initialValue: true,
		}),
		defineField({
			name: 'variablePrice',
			title: 'Increase Price',
			type: 'number',
		}),
	],
	icon: TbRulerMeasure,
	preview: {
		select: {
			title: 'size.size',
			subtitle: 'available',
		},
		prepare({ title, subtitle }) {
			return {
				title: title || 'No size',
				subtitle: subtitle ? 'In Stock' : 'Out of Stock',
				media: TbRulerMeasure,
			};
		},
	},
});
