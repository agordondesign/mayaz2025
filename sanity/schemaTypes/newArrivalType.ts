import { defineField, defineType } from 'sanity';
import { RxImage } from 'react-icons/rx';

export const newArrivalType = defineType({
	name: 'newArrival',
	title: 'New Arrival',
	type: 'document',
	icon: RxImage,
	fields: [
		defineField({
			type: 'object',
			name: 'newestArrival',
			description: 'Product is a new arrival',
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 1, // Defines a grid for the fields and how many columns it should have
				modal: { type: 'popover' }, //Makes the modal type a popover
			},
			fieldsets: [{ name: 'newestArrival', title: 'Newest Arrival' }],
			fields: [
				{
					name: 'newestArrival',
					title: 'Newest Arrival',
					type: 'reference',
					to: [{ type: 'product' }],
				},
				{
					name: 'newestArrivalColor',
					title: 'Newest Arrival Color',
					type: 'simplerColor',
				},
			],
		}),
		defineField({
			type: 'object',
			name: 'newArrival',
			description: 'Product is a new arrival',
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 1, // Defines a grid for the fields and how many columns it should have
				modal: { type: 'popover' }, //Makes the modal type a popover
			},
			fieldsets: [{ name: 'newArrival', title: 'New Arrival' }],
			fields: [
				{
					name: 'newArrival',
					title: 'New Arrival',
					type: 'reference',
					to: [{ type: 'product' }],
				},
				{
					name: 'newArrivalColor',
					title: 'New Arrival Color',
					type: 'simplerColor',
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'New Arrival',
		},
		prepare() {
			return {
				title: 'New Arrival',
				subtitle: Date.now().toString(),
			};
		},
	},
});
