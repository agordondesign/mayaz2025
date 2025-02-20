import { defineField, defineType } from 'sanity';
import { RxText } from 'react-icons/rx';

export const pageContentType = defineType({
	name: 'pageContent',
	title: 'Page Content',
	type: 'document',
	icon: RxText,
	fields: [
		defineField({
			name: 'content',
			title: 'Content',
			type: 'blockContent',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Page Content',
			};
		},
	},
});
