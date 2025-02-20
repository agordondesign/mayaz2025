import { defineField, defineType } from 'sanity';
import { RxDrawingPin } from 'react-icons/rx';

export const madeInType = defineType({
	name: 'madeIn',
	title: 'Made In',
	type: 'document',
	icon: RxDrawingPin,
	fields: [
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
		}),
	],
});
