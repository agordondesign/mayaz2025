import { TagIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const landingPageType = defineType({
	name: 'landingPage',
	title: 'Landing Page',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
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
			name: 'masthead',
			title: 'Masthead',
			type: 'image',
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
		defineField({
			name: 'bannerAd',
			title: 'Banner Ad',
			type: 'reference',
			to: [{ type: 'bannerAd' }],
		}),
		defineField({
			name: 'siteTicker',
			title: 'Site Ticker',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'tickerItem',
						},
					],
				},
			],
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
					name: 'promoModuleSection',
					title: 'Promo Module Section',
					type: 'reference',
					to: [{ type: 'modalContent' }],
				}),
				defineField({
					name: 'newArrival',
					title: 'New Arrival',
					type: 'reference',
					to: [{ type: 'newArrival' }],
				}),
				defineField({
					name: 'newestArrival',
					title: 'Newest Arrival',
					type: 'reference',
					to: [{ type: 'singleFeatureBanner' }],
				}),
			],
		}),
		defineField({
			name: 'carousel',
			title: 'Carousel',
			type: 'array',
			of: [{ type: 'carouselItem' }],
		}),
		defineField({
			name: 'clientTestimonial',
			description: 'What our clients say about us',
			title: 'Client Testimonial',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'testimonial' } }],
		}),
	],
});
