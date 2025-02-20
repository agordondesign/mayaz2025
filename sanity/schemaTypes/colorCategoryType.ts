import { defineField, defineType } from 'sanity';
import { CgOptions } from 'react-icons/cg';

export const colorCategoryType = defineType({
	name: 'colorCategory',
	title: 'Color Category',
	description: 'Color Category for filtering',
	type: 'document',
	fields: [
		defineField({
			name: 'colorCategory',
			title: 'Color Category',
			type: 'string',
		}),
	],
	icon: CgOptions,
	preview: {
		select: {
			title: 'colorCategory',
		},
		prepare({ title }) {
			return {
				title: title || 'No color category',
				media: CgOptions,
			};
		},
	},
});
