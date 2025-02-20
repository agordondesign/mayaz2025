import { defineField, defineType } from 'sanity';
import { RxHeading } from 'react-icons/rx';

export const headerType = defineType({
	name: 'header',
	title: 'Page Title',
	type: 'document',
	icon: RxHeading,
	fields: [
		defineField({
			name: 'alternateTitle',
			title: 'Alternate Title',
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
			title: 'alternamteTitle',
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
