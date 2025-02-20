import { getCollectionBySlug } from '@/lib/api';
import React from 'react';
import PageBanner from './PageBanner';
import PageBannerPromotion from './PageBannerPromotion';
import ProductList from './ProductList';
import ShowroomFeature from './ShowroomFeature';
import Breadcrumb from '../ui/Breadcrumb';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

type CollectionProps = {
	_id: string;
	slug: {
		current: string;
	};

	params: {
		slug: string;
		_id: string;
	};
	searchParams: URLSearchParams;
	collection: any;
};

export async function getStaticPaths() {
	const paths = await generateStaticParams();
	return {
		paths,
		fallback: false,
	};
}

export async function generateStaticParams() {
	const query = groq`*[_type == "page"] {
		...,
    slug,
		pageType,
    "products": *[_type == "product" && collection->name == ^.name]{
      ...,
      collection-> {
        ...,
        "slug": slug.current,
      },
      productVariants{
        ...,
        variantColor->{
          ...,
        }
      },
      fabric->,
      location->,
      categories[]->,
    },
  }`;
	const slugs: Collection[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug?.slug?.current ?? '');

	return slugRoutes.map((slug) => ({
		slug,
	}));
}

export default async function Collection({
	params,
	collection,
}: CollectionProps) {
	const { slug } = await params;
	const collections = await getCollectionBySlug(collection.slug.current);
	const currentCollection = collections.find(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(collection: any) => collection.slug.current === params.slug
	);
	return (
		<main>
			{currentCollection.pageType === 'collection' && (
				<section className="flex flex-col gap-2 w-full">
					<PageBanner collection={currentCollection} />
					<PageBannerPromotion collection={currentCollection} />
					<header>
						<h1 className="text-center text-2xl lg:text-2xl uppercase tracking-[0.75em] py-16">
							<span className="block text-base lg:text-xl tracking-[0.5em] pb-3 text-mayaz font-light">
								new
							</span>
							<span className="inline-block ml-[0.75em] mb-3 text-black">
								Features
							</span>
						</h1>
					</header>
					<section>
						<ProductList
							products={currentCollection?.products}
							collection={currentCollection}
							columns={currentCollection?.productColumns}
						/>
					</section>
				</section>
			)}
			{currentCollection.pageType === 'showroom' && (
				<section className="flex flex-col gap-2 w-full">
					<ShowroomFeature />
				</section>
			)}
			{currentCollection.pageType === 'general' && (
				<section className="flex flex-col gap-2 w-full">
					<Breadcrumb crumbs={currentCollection} />
					<h1>{currentCollection.title}</h1>
				</section>
			)}
		</main>
	);
}
