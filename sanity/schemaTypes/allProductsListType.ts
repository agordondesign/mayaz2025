import { defineField, defineType } from 'sanity';
import { RxScissors } from 'react-icons/rx';

export const allProductsListType = defineType({
	name: 'allProductsList',
	title: 'All Products List',
	type: 'document',
	icon: RxScissors,
	fields: [
		defineField({
			name: 'productColumns',
			title: 'Product Columns',
			type: 'number',
		}),
	],
});
