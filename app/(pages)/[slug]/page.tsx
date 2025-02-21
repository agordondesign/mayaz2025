/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import { getPageBySlug } from '@/lib/api';
import PageBanner from '@/components/layout/PageBanner';
import PageBannerPromotion from '@/components/layout/PageBannerPromotion';
//import Collection from '@/components/layout/Collection';
import FeatureBanner from '@/components/layout/FeatureBanner';
//import AllProductList from '@/components/layout/AllProductList';
//import { RichTextComponents } from '@/components/common/RichTextComponents';
import PageContent from '@/components/layout/PageContent';
import ProductByCollection from '@/components/layout/ProductByCollection';
import PageTitle from '@/components/ui/PageTitle';

type PageProps = {
	/*_id: string;
	slug: {
		current: string;
	};*/

	params: Promise<{
		slug: string;
		_id: string;
	}>;
	searchParams: URLSearchParams;
};

/*export async function getStaticPaths() {
	const paths = await generateStaticParams();
	return {
		paths,
		fallback: false,
	};
}*/

export async function generateStaticParams() {
	const query = groq`*[_type == "page"] {
		...,
    slug,
		_id,
  }`;
	const slugs: Page[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug?.slug?.current ?? '');

	return slugRoutes.map((slug) => ({
		slug,
	}));
}

export default async function page({ params }: PageProps) {
	const { slug } = await params;
	const pages = await getPageBySlug(slug);
	//const collections = await getProductsByCollection(slug);
	const currentPage = await pages?.find(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(page: any) => page.slug.current === slug
	);
	return (
		<main className="flex flex-col w-full max-w-[96rem] mx-auto">
			{/** TESTING */}
			<div className="hidden">
				<div className="flex gap-4 bg-pink-200 p-6 w-full mt-2 text-xs">
					<span>{currentPage?.title}</span>
					{/*<span>{params?.slug}</span>*/}
					<div>
						<div className="flex gap-4">
							<span>{currentPage?.collection?.title}</span>
							<span>{currentPage?.collection?.slug.current}</span>
							<div className="flex gap-4">
								{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
								{currentPage?.sectionModule?.map((section: any) => (
									<span key={section?._id}>{section?._type}</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4 w-full mt-2 text-sm">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{currentPage?.sectionModule?.map((section: any) => (
					<div key={section?._id} className="flex w-full gap-4">
						{/*{section?._type === 'collection' && (
							<Collection
								products={currentPage?.products}
								collection={section?.slug?.current}
								columns={section?.productColumns}
							/>
						)}*/}
						{section?._type === 'pageTitle' && (
							<section className="flex flex-col gap-2 w-full">
								<PageTitle title={currentPage?.title} customTitle={section} />
							</section>
						)}
						{section?._type === 'banner' && (
							<section className="flex flex-col gap-2 w-full">
								<PageBanner collection={section} />
							</section>
						)}
						{section?._type === 'featureBanner' && (
							<FeatureBanner feature={section} />
						)}
						{section?._type === 'pageContent' && (
							<PageContent content={section} />
						)}
						{section?._type === 'bannerAd' && (
							<section className="flex flex-col gap-2 w-full">
								<PageBannerPromotion page={section} />
							</section>
						)}
						{/*{section?._type === 'allProductsList' && (
							<AllProductList
								columns={section?.productColumns}
								initialProducts={initialProducts}
							/>
						)}*/}
						{section?._type === 'productCollectionList' && (
							<div>
								<ProductByCollection section={section} />
							</div>
						)}
					</div>
				))}
			</div>
		</main>
	);
}
