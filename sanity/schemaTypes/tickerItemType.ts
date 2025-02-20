import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const tickerItemType = defineType({
	name: 'tickerItem',
	title: 'Ticker Item',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Ticker Text',
			type: 'string',
		}),
	],
});
