/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import { getPageBySlug } from '@/lib/api';
import PageBanner from '@/components/layout/PageBanner';
import PageBannerPromotion from '@/components/layout/PageBannerPromotion';
import FeatureBanner from '@/components/layout/FeatureBanner';
import PageContent from '@/components/layout/PageContent';
import ProductByCollection from '@/components/layout/ProductByCollection';
import PageTitle from '@/components/ui/PageTitle';
import HerStory from '@/components/layout/HerStory';
import NicheBanner from '@/components/layout/NicheBanner';

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export const revalidate = 10; // Revalidate every hour

export async function generateStaticParams() {
	const query = groq`*[_type == "page"] { slug }`;
	const pages: { slug: { current: string } }[] = await client.fetch(query);

	return pages.map((page) => ({
		slug: page.slug.current,
	}));
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params; // ✅ Fixed incorrect await usage
	const pages = await getPageBySlug(slug);
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const currentPage = pages?.find((page: any) => page.slug.current === slug);

	return (
		<main className="flex flex-col w-full max-w-[96rem] mx-auto">
			<div className="flex flex-col gap-4 w-full mt-2 text-sm">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{currentPage?.sectionModule?.map((section: any) => (
					<div key={section?._id} className="flex w-full gap-4">
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
						{section?._type === 'productCollectionList' && (
							<div>
								<ProductByCollection section={section} />
							</div>
						)}
						{section?._type === 'nicheBanner' && (
							<div>
								<NicheBanner />
							</div>
						)}
					</div>
				))}
			</div>
			<HerStory />
		</main>
	);
}
