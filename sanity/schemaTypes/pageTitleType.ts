import { defineField, defineType } from 'sanity';
import { RxHeading } from 'react-icons/rx';

export const pageTitleType = defineType({
	name: 'pageTitle',
	title: 'Header',
	type: 'document',
	icon: RxHeading,
	fields: [
		defineField({
			name: 'alternateTitle',
			title: 'Alternate Header',
			description: 'This is the alternate title of the page.',
			type: 'string',
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			description: 'This is the subtitle of the page.',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'alternateTitle',
			subtitle: 'subtitle',
		},
		prepare({ title, subtitle }) {
			return {
				title: title || 'Default Title',
				subtitle: subtitle || 'Page Title',
			};
		},
	},
});
