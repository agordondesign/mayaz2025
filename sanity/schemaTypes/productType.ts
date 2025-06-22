import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const productType = defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	icon: HiOutlineShoppingCart,
	groups: [
		{
			title: 'Product Details',
			name: 'productDetails',
			//default: true,
		},
		{
			title: 'Product Variants',
			name: 'productVariants',
		},
		{
			title: 'Product Images',
			name: 'productImages',
		},
	],
	fields: [
		defineField({
			name: 'productName',
			title: 'Product Name',
			description: 'Product name and color',
			group: 'productDetails',
			type: 'string',
		}),
		defineField({
			name: 'displayName',
			title: 'Product Display Name',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			group: 'productDetails',
			type: 'slug',
			options: {
				source: 'productName',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'available',
			description: 'Product is available',
			title: 'available',
			type: 'boolean',
			initialValue: true,
			group: 'productDetails',
		}),
		defineField({
			name: 'hiddenListItem',
			description: 'Hide product from list',
			title: 'Hidden List Item',
			type: 'boolean',
			initialValue: false,
			group: 'productDetails',
		}),
		defineField({
			name: 'hiddenListItemDefault',
			description: 'Default value for hiddenListItem',
			title: 'Hidden List Item Default',
			type: 'boolean',
			initialValue: false,
			group: 'productDetails',
		}),
		/** 
		 * ##SKU is not needed for now
			defineField({
			name: 'sku',
			title: 'SKU',
			description: 'Stock Keeping Unit',
			type: 'string',
		}),*/
		defineField({
			type: 'object',
			name: 'productStatus',
			description: 'Product filter options',
			group: 'productDetails',
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 1, // Defines a grid for the fields and how many columns it should have
				modal: { type: 'popover' }, //Makes the modal type a popover
			},
			fieldsets: [{ name: 'status', title: 'Product Inventory Status' }],
			fields: [
				{
					name: 'featured',
					description: 'Product is featured',
					title: 'Featured',
					type: 'boolean',
					initialValue: false,
				},
				{
					name: 'sale',
					description: 'Product is on sale',
					title: 'On Sale',
					type: 'boolean',
					initialValue: false,
				},
				{
					name: 'lastCall',
					description: 'Clearance, Final Sale',
					title: 'Last Call',
					type: 'boolean',
					initialValue: false,
				},
				{
					name: 'soldOut',
					description: 'Product is sold out',
					title: 'Sold Out',
					type: 'boolean',
					initialValue: false,
				},
				defineField({
					name: 'featuredThumbnail',
					title: 'Featured Thumbnail',
					description: 'Featured Product thumbnail image',
					type: 'image',
					hidden: ({ parent }) => !parent?.featured,
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'alt',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity',
							type: 'string',
						},
					],
				}),
				defineField({
					name: 'featuredThumbnailMobile',
					title: 'Featured Thumbnail (mobile)',
					description: 'Featured Product thumbnail image for mobile',
					type: 'image',
					hidden: ({ parent }) => !parent?.featured,
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'alt',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity',
							type: 'string',
						},
					],
				}),
			],
		}),
		defineField({
			name: 'book',
			title: 'Book',
			group: 'productDetails',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'niche',
			title: 'Niche',
			group: 'productDetails',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'studioProductTitle',
			title: 'Studio Product Title',
			group: 'productDetails',
			type: 'string',
			hidden: ({ document }) => !document?.niche,
		}),
		defineField({
			name: 'studioProductSubTitle',
			title: 'Studio Product Sub Title',
			group: 'productDetails',
			type: 'string',
			hidden: ({ document }) => !document?.niche,
		}),
		defineField({
			name: 'collection',
			title: 'Collection',
			group: 'productDetails',
			type: 'reference',
			to: [{ type: 'collection' }],
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			group: 'productDetails',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),
		defineField({
			name: 'thumbnail',
			title: 'Thumbnail',
			description: 'Product thumbnail image',
			group: 'productImages',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity',
					type: 'string',
				},
			],
		}),
		defineField({
			name: 'thumbnailFullsize',
			title: 'Thumbnail Fullsize',
			description: 'Niche Micro-loc Studio thumbnail image',
			hidden: ({ document }) => !document?.niche,
			group: 'productImages',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity',
					type: 'string',
				},
			],
		}),
		defineField({
			name: 'productImage',
			title: 'Product Image',
			description: 'Product image(s)',
			hidden: ({ document }) => !!document?.niche,
			group: 'productImages',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'alt',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity',
							type: 'string',
						},
					],
				},
			],
		}),
		defineField({
			name: 'briefDescription',
			description: 'Enter short main description of product',
			title: 'Brief Description',
			group: 'productDetails',
			type: 'string',
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'author' } }],
			hidden: ({ document }) => !document?.book,
		}),
		defineField({
			name: 'fabric',
			description: 'Enter fabric content of product',
			title: 'Fabric',
			group: 'productDetails',
			type: 'reference',
			to: [{ type: 'fabrics' }],
			hidden: ({ document }) => !!document?.book || !!document?.niche,
		}),
		defineField({
			name: 'location',
			description: 'Enter short main description of product',
			title: 'Made In',
			group: 'productDetails',
			type: 'reference',
			to: [{ type: 'madeIn' }],
			hidden: ({ document }) => !!document?.book || !!document?.niche,
		}),
		defineField({
			name: 'productDescription',
			title: 'Product Description',
			group: 'productDetails',
			type: 'blockContent',
			initialValue: [],
		}),
		defineField({
			name: 'productDetails',
			title: 'Product Details / Ingredients',
			group: 'productDetails',
			type: 'blockContent',
			initialValue: [],
		}),

		/**
		 * ##Product Video is not needed for now
		defineField({
			title: 'Product Video',
			name: 'productVideo',
			type: 'document',
			fields: [
				{ title: 'Title', name: 'title', type: 'string' },
				{
					title: 'Video file',
					name: 'video',
					type: 'mux.video',
				},
			],
		}),
		*/
		defineField({
			type: 'object',
			name: 'productPricing',
			description: 'Product pricing options',
			group: 'productDetails',
			options: {
				collapsible: false, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 1, // Defines a grid for the fields and how many columns it should have
				modal: { type: 'popover' }, //Makes the modal type a popover
			},
			fieldsets: [{ name: 'pricing', title: 'Product Pricing' }],
			fields: [
				{
					name: 'price',
					title: 'Price',
					type: 'number',
					description: 'Product price in USD (whole numbers only)',
				},
				{
					name: 'markdownPrice',
					title: 'Markdown Price',
					type: 'number',
					description:
						'Product markdown price in USD (whole numbers only) - if applicable',
				},
				{
					name: 'discount',
					title: 'Discount',
					type: 'number',
					description: 'Product discount in percentage',
				},
			],
		}),

		defineField({
			name: 'variantColor',
			title: 'Variant Color',
			group: 'productVariants',
			type: 'reference',
			to: [{ type: 'swatch' }],
			hidden: ({ document }) => !!document?.book || !!document?.niche,
		}),
		defineField({
			name: 'variantSizes',
			title: 'Variant Sizes',
			group: 'productVariants',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'variantSize',
					name: 'variantSize',
					title: 'Variant Size',
				}),
			],
		}),
		defineField({
			name: 'variantSet',
			title: 'Variant Set',
			description: 'Product with color variants',
			group: 'productVariants',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: { type: 'productSet' },
				}),
			],
		}),
		defineField({
			name: 'weightValue',
			title: 'Weight Value (Snipcart)',
			description:
				'Snipcart weight value - 1lb = 453.592g, 2lb = 907.185g, 3lb = 1306.78g (default)',
			group: 'productDetails',
			type: 'number',
			initialValue: 1360,
		}),
		defineField({
			name: 'relatedProducts',
			title: 'Related Products',
			group: ['productVariants', 'productImages'],
			type: 'array',
			of: [{ type: 'reference', to: { type: 'product' } }],
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		}),
	],
	orderings: [
		{
			title: 'Category',
			name: 'category',
			by: [{ field: 'categories', direction: 'asc' }],
		},
		{
			title: 'Collection',
			name: 'collection',
			by: [{ field: 'collection', direction: 'asc' }],
		},
		{
			title: 'Last Call',
			name: 'lastCall',
			by: [{ field: 'lastCall', direction: 'asc' }],
		},
		{
			title: 'Featured',
			name: 'featured',
			by: [{ field: 'featured', direction: 'asc' }],
		},
		{
			title: 'Top Seller',
			name: 'topSeller',
			by: [{ field: 'topSeller', direction: 'asc' }],
		},
		{
			title: 'New Drop',
			name: 'newDrop',
			by: [{ field: 'newDrop', direction: 'asc' }],
		},
	],
	preview: {
		select: {
			title: 'productName',
			subtitle: 'collection.name',
			media: 'thumbnail',
		},
		prepare({ title, subtitle, media }) {
			return {
				title: title,
				subtitle: subtitle || 'No Collection',
				media: media,
			};
		},
	},
});
