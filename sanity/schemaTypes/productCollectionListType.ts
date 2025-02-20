import { defineField, defineType } from 'sanity';
import { GoPackage } from 'react-icons/go';

export const productCollectionListType = defineType({
	name: 'productCollectionList',
	title: 'Product Collection',
	type: 'document',
	icon: GoPackage,
	fields: [
		defineField({
			name: 'collection',
			title: 'Collection',
			type: 'reference',
			to: [{ type: 'collection' }],
		}),
		defineField({
			name: 'productColumns',
			title: 'Product Columns',
			type: 'number',
			initialValue: 4,
		}),
		defineField({
			name: 'hideFilterBar',
			title: 'Hide Filter Bar',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'pageFilters',
			title: 'Page Filters',
			type: 'string',
			options: {
				list: [
					{ title: 'Available', value: 'available' },
					{ title: 'Featured', value: 'featured' },
					{ title: 'Sale', value: 'sale' },
					{ title: 'Last Call', value: 'lastCall' },
				],
			},
		}),
	],
	preview: {
		select: {
			title: 'collection.title',
			productColumns: 'productColumns',
		},
		prepare({ title, productColumns }) {
			return {
				title: title,
				subtitle: `${'Collection : Columns '} [ ${productColumns} ]`,
			};
		},
	},
});
