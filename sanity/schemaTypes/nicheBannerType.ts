import { defineField, defineType } from 'sanity';
import { RxHeading } from 'react-icons/rx';

export const nicheBannerType = defineType({
	name: 'nicheBanner',
	title: 'Niche Banner',
	type: 'document',
	icon: RxHeading,
	fields: [
		defineField({
			name: 'niche',
			title: 'Niche',
			description: 'This is the setmore niche widget embed',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: title || 'Default Title',
			};
		},
	},
});
