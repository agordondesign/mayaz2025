import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function getSiteSettings() {
	const query = groq`*[_type == "siteSettings"][1]`;
	const siteSettings = await client.fetch(query);
	return siteSettings;
}

export async function getLandingPage() {
	const query = groq`*[_type == "landingPage"][0] {
		...,
		siteTicker[]->{..., name},
		collection[]-> {
			...,
			collection-> 
		},
		categories[]->{..., title},
		siteTicker[]->{..., name},
		"products": *[_type == "product" && collection->name == ^.name]{
		  ...,
			productDescription,
			displayName,
		  collection-> {
		    ...,
		    "slug": slug.current,
		  },
		  variantColor->{
				...,
			},
			variantSizes[] {
				...,
				size->,
			},
			variantSet[]-> {
				...,
				productSet[]-> {
					...,
					variantColor->,
				},
			},
		  fabric->,
		  location->,
		  categories[]->,
			relatedProducts[]-> {
				...,
				collection->{
		      ...,
				},
			},
		},
		bannerAd->{
  		...,
  		promoAds[]->{
      	...,
    		bannerLink-> {
    			...,
  				collection->
				}
			},
  		promoAd[]->{
				...,
				bannerLink-> {
    			...,
					collection->
				}
  		}
  	},
		sectionModule[]->{
		  ...,
		  _type == "productCollectionList" => {
				...,
				collection-> {
					...,
				},
				"products": *[_type == "product" && collection->name == ^.collection->name] | order(productName asc) {
					...,
				},
				"sale": *[_type == "product" && productStatus.sale == true] | order(productName asc) {
					...,
				},
				"lastCall": *[_type == "product" && productStatus.lastCall == true] | order(productName asc) {
					...,
				},
				_type == "modalContent" => {
          ...,
        },
			},
			_type == "banner" => {
				...,
				bannerAd->{
		      ...,
		      promoAd[]->{...,
						bannerLink-> {
		          ...,
		          collection->
		        }
					}
		    }
			},
			_type == "bannerAd" => {
      promoAds[]->{...,
					bannerLink-> {
		        ...,
		        collection->
		      }
				},
				promoAd[]->{...,
					bannerLink-> {
		        ...,
		        collection->
		      }
				}
			},
			_type == "newArrival" => {
				...,
				newestArrival{
        	...,
        	newestArrival->{
        	  ...,
        	  product[]->,
						collection->
        	}
				},
				newArrival{
        	...,
        	newArrival->{
        	  ...,
        	  product[]->,
						collection->
        	}
				},
			},
			_type == "singleFeatureBanner" => {
				...,
				newestArrival{
        	...,
        	newestArrival->{
        	  ...,
        	  product->,
  			  	collection->
        	}
				},
			},
		},
		_type == "featureBanner" => {
      ...,
      collection->
    },
		sortableCategories[]->{
			...,
		},
		clientTestimonials[]-> { ..., clientName, testimonial}
	}`;
	const landingPage = await client.fetch(query);
	return landingPage;
}

export async function getSorting() {
	const query = groq`
	*[_type == "sorting"] {
		sortLabel,
		sortValue,
	} | order(sortLabel asc)
	`;
	const sorting = await client.fetch(query);
	return sorting;
}
/** (collection) / [slug] - AllProductList */
export async function getProducts() {
	const query = groq`*[_type == "product"]{
		..., 
		slug,
		collection-> {
			...,
			"slug": slug.current,
		},
		variantColor->{
			...,
		},
		variantSizes[] {
			...,
			size->,
		},
		variantSet[]-> {
			...,
			productSet[]-> {
				...,
				variantColor->,
			},
		},
	}`;
	const products = await client.fetch(query);
	return products;
}

/** (collection) / [slug] / [_id] */
export async function getProductBySlug(slug: string) {
	const query = groq`*[_type == "product" && slug.current == $slug][0]
    {
      ...,
			variantColor->{
				...,
			},
			variantSizes[] {
				...,
				size->,
			},
			variantSet[]-> {
				...,
				productSet[]-> {
					...,
					variantColor->,
				},
			},
			collection-> {
				...,
				"slug": slug.current,
			},
			author[]->,
			fabric->,
			location->,
			categories[]->,
			relatedProducts[]-> {...,
				collection->{
					...,
				},
				variantColor->{
					...,
				},
			}
    }`;
	const products = await client.fetch(query, {
		slug,
	});
	return products;
}

/** (collection) / [slug] */
export async function getPageBySlug(slug: string) {
	const query = groq`*[_type == "page"] {
	...,
  slug,
	_id,
	pageType,
	productColumns,
	collection-> {...},
	sectionModule[]->{
    ...,
    _type == "productCollectionList" => {
			...,
			collection-> {
				...,
			},
			"products": *[_type == "product" && collection->name == ^.collection->name] | order(productName asc) {
				...,
				variantColor->{
					...,
				},
			},
			"sale": *[_type == "product" && productStatus.sale == true] | order(productName asc) {
				...,
			},
			"lastCall": *[_type == "product" && productStatus.lastCall == true] | order(productName asc) {
				...,
			},
		},
		_type == "pageTitle" => {
      ...,
    },
		_type == "banner" => {
			...,
			bannerColor->{...,},
			bannerAd->{
        ...,
        promoAd[]->{...,
					bannerLink-> {
            ...,
            collection->
          }
				}
      }
		},
		_type == "bannerAd" => {
			...,
			promoAd[]->{...,
				bannerLink-> {
          ...,
          collection->
        }
			}
		},
  },
	sortableCategories[]->{
		...,
	},
}`;
	const collections = await client.fetch(query, { slug });
	return collections;
}
