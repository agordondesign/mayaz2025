import { defineField, defineType } from 'sanity';
import { RxHeading } from 'react-icons/rx';

export const modalContentType = defineType({
	name: 'modalContent',
	title: 'Modal Content',
	type: 'document',
	icon: RxHeading,
	fields: [
		defineField({
			name: 'header',
			title: 'Header',
			description: 'This is the header of the promo.',
			type: 'string',
		}),
		defineField({
			name: 'subHeader',
			title: 'Sub Header',
			description: 'This is the subtitle of the promo.',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description: 'This is the description of the promo.',
			type: 'blockContent',
		}),
		defineField({
			name: 'disclaimer',
			title: 'Disclaimer',
			description: 'This is the disclaimer of the promo.',
			type: 'blockContent',
		}),
		defineField({
			name: 'promoCode',
			title: 'Promo Code',
			type: 'string',
		}),
		defineField({
			name: 'promoLink',
			title: 'Promo Link',
			type: 'string',
		}),
		defineField({
			name: 'modalLayout',
			title: 'Modal Layout',
			type: 'string',
			options: {
				list: [
					{ title: 'Text Only', value: 'textOnly' },
					{ title: 'Text and Image', value: 'textImage' },
					{ title: 'Text and Background Image', value: 'backgroundImage' },
					{ title: 'Website Notice', value: 'websiteNotice' },
				],
			},
		}),
		defineField({
			name: 'modalImage',
			title: 'Modal Image',
			type: 'image',
			hidden: ({ document }) => document?.modalLayout !== 'textImage',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative text',
					type: 'string',
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'header',
			subtitle: 'modalLayout',
			media: 'modalImage',
		},
		prepare({ title, subtitle, media }) {
			return {
				title: title || 'Modal Content',
				subtitle: subtitle || 'Page Title',
				backgroundColor: media || '',
			};
		},
	},
});
