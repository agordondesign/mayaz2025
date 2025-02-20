import { defineField, defineType } from 'sanity';
import { RxBlendingMode } from 'react-icons/rx';

export const swatchType = defineType({
	name: 'swatch',
	title: 'Swatch',
	type: 'document',
	icon: RxBlendingMode,
	fields: [
		defineField({
			name: 'colorName',
			title: 'Color Name',
			type: 'string',
		}),
		defineField({
			name: 'colorHex',
			title: 'HEX Value',
			type: 'simplerColor',
			//type: 'color',
		}),
	],
});
