import { defineField, defineType } from 'sanity';
import { GoPackage } from 'react-icons/go';

export const collectionType = defineType({
	name: 'collection',
	title: 'Collection',
	type: 'document',
	icon: GoPackage,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: title,
				subtitle: 'Collection',
			};
		},
	},
});
