import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const bookAuthorType = defineType({
	name: 'bookAuthors',
	title: 'Book Authors',
	type: 'document',
	icon: UserIcon,
	fields: [
		defineField({
			name: 'authorName',
			title: 'Author Name',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'name',
		},
	},
});
