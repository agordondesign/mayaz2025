import { defineField, defineType } from 'sanity';

export const bookType = defineType({
	name: 'book',
	title: 'Book',
	type: 'document',
	fields: [
		defineField({
			name: 'author',
			description: 'Book Author',
			title: 'Author',
			type: 'reference',
			to: [{ type: 'bookAuthors' }],
		}),
	],
});
