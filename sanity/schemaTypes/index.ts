import type { SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';

import { productType } from './productType';
import { fabricType } from './fabricType';
import { madeInType } from './madeInType';
import { bookAuthorType } from './bookAuthorType';
import { collectionType } from './collectionType';
import { variantSizeType } from './variantSizeType';
import { sizeType } from './sizeType';
import { swatchType } from './swatchType';
import { bookType } from './bookType';
import { colorCategoryType } from './colorCategoryType';
import { landingPageType } from './landingPageType';
import { siteSettingsType } from './siteSettingsType';
import { tickerItemType } from './tickerItemType';
import { carouselItemType } from './carouselItemType';
import { testimonialType } from './testimonialType';
import { productSetType } from './productSetType';
import { pageType } from './pageType';
import { bannerType } from './bannerType';
import { featureBannerType } from './featureBannerType';
import { allProductsListType } from './allProductsListType';
import { pageContentType } from './pageContentType';
import { bannerAdType } from './bannerAdType';
import { promoType } from './promoType';
import { productCollectionListType } from './productCollectionListType';
import { newArrivalType } from './newArrivalType';
import { pageTitleType } from './pageTitleType';
import { modalContentType } from './modalContentType';
//import { headerType } from './headerType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		postType,
		authorType,
		productType,
		fabricType,
		madeInType,
		bookAuthorType,
		collectionType,
		variantSizeType,
		sizeType,
		swatchType,
		bookType,
		colorCategoryType,
		landingPageType,
		siteSettingsType,
		tickerItemType,
		carouselItemType,
		testimonialType,
		productSetType,
		pageType,
		bannerType,
		featureBannerType,
		allProductsListType,
		pageContentType,
		bannerAdType,
		promoType,
		productCollectionListType,
		newArrivalType,
		pageTitleType,
		modalContentType,
		//headerType,
	],
};
