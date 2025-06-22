import { defineArrayMember, defineField, defineType } from 'sanity';
import { RxStop } from 'react-icons/rx';

export const pageType = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: RxStop,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'sectionModule',
			title: 'Section Module',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'pageTitleSection',
					title: 'Page Title Section',
					type: 'reference',
					to: [{ type: 'pageTitle' }],
				}),
				defineArrayMember({
					name: 'bannerSection',
					title: 'Banner Section',
					type: 'reference',
					to: [{ type: 'banner' }],
				}),
				defineArrayMember({
					name: 'bannerAdSection',
					title: 'Banner Ad & Promo Section',
					type: 'reference',
					to: [{ type: 'bannerAd' }],
				}),
				defineArrayMember({
					name: 'featureBannerSection',
					title: 'Feature Banner Section',
					type: 'reference',
					to: [{ type: 'featureBanner' }],
				}),
				defineArrayMember({
					name: 'pageContentSection',
					title: 'Page Content Section',
					type: 'reference',
					to: [{ type: 'pageContent' }],
				}),
				defineArrayMember({
					name: 'collectionSection',
					title: 'Collection Section',
					type: 'reference',
					to: [{ type: 'productCollectionList' }],
				}),
				defineArrayMember({
					name: 'nicheBannerSection',
					title: 'Niche Banner Section',
					type: 'nicheBanner',
				}),
				/**
				 * ##Not needed for now
				defineArrayMember({
					name: 'allProductsListSection',
					title: 'All Products List Section',
					type: 'reference',
					to: [{ type: 'allProductsList' }],
				}),
				*/
			],
		}),
	],
});
