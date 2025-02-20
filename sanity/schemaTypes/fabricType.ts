import { defineField, defineType } from 'sanity';
import { RxScissors } from 'react-icons/rx';

export const fabricType = defineType({
	name: 'fabrics',
	title: 'Fabrics',
	type: 'document',
	icon: RxScissors,
	fields: [
		defineField({
			name: 'name',
			title: 'Frabic Name',
			type: 'string',
		}),
	],
});
