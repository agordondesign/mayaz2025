/* eslint-disable @typescript-eslint/no-explicit-any */
//import ShowroomFeature from '@/components/layout/ShowroomFeature';
//import PageBanner from '@/components/layout/PageBanner';
import { getPageBySlug, getProductBySlug } from '@/lib/api';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
//import SetmoreEmbed from '@/components/ui/setmoreEmbed';
import { RichTextComponents } from '@/components/common/RichTextComponents';
import { PortableText } from 'next-sanity';
//import ProductByCollection from '@/components/layout/ProductByCollection';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
//import PageBannerPromotion from '@/components/layout/PageBannerPromotion';
//import PageContent from '@/components/layout/PageContent';
//import FeatureBanner from '@/components/layout/FeatureBanner';
//import PageTitle from '@/components/ui/PageTitle';
//import NicheBanner from '@/components/layout/NicheBanner';
//import SnipCart from '@/components/providers/Snipcart';
//import SnipCartButton from '@/components/ui/SnipcartButton';
import SnipcartButton from '@/components/ui/SnipcartButton';
//import NicheBanner from '@/components/layout/NicheBanner';
import PageTitle from '@/components/ui/PageTitle';
import PageBanner from '@/components/layout/PageBanner';
//import FeatureSectionList from '@/components/layout/FeatureSectionList';
//import CTAWithImage from '@/components/layout/CTAWithImage';
//import { MarqueeDemo } from '@/components/layout/MarqueeDemo'; // Adjust the path as needed
//import FAQs from '@/components/layout/FAQs';
//import DividedFeatureSection from '@/components/layout/DividedFeatureSection';

export async function generateStaticParams() {
	const query = groq`*[_type == "page"] { slug }`;
	const pages: { slug: { current: string } }[] = await client.fetch(query);

	return pages.map((page) => ({
		slug: page.slug.current,
	}));
}

export default async function Page() {
	//const { slug } = await params; // ✅ Fixed incorrect await usage
	//const pages = await getPageBySlug(slug);
	//const currentPage = pages?.find((page: any) => page.slug.current === slug);
	const pages = await getPageBySlug('niche');
	const currentPage = pages.find(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(page: any) => page.slug.current === 'niche'
	);
	//const currentPage = await getPageBySlug('/niche');
	const shampoo = await getProductBySlug('pure-balance-shampoo');
	const conditioner = await getProductBySlug('pure-balance-conditioner');
	const mist = await getProductBySlug('pure-hydration-daily-hair-mist');
	const elixir = await getProductBySlug('pure-growth-hair-elixir');
	const serum = await getProductBySlug('pure-honey-hair-serum');
	const balm = await getProductBySlug('pure-vitality-hair-and-scalp-balm');
	const batana = await getProductBySlug('100-pure-and-natural-batana-oil'); //const collections = await getProductsByCollection(slug);
	const shampooSize = shampoo?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const conditionerSize = conditioner?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const mistSize = mist?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const elixirSize = elixir?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const serumSize = serum?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const balmSize = balm?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const batanaSize = batana?.variantSizes?.find(
		(variantSize: {
			available: boolean;
			sizeLabel?: string;
			size?: { size: string };
		}) => variantSize.available === true && variantSize.size
	);
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<main className="flex flex-col w-full max-w-[96rem] mx-auto gap-16">
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
					</div>
				))}
			</div>

			{/* shampoo & conditioner */}
			<section className="flex flex-col xl:grid xl:grid-cols-2 gap-8 w-full p-8 -mt-10">
				<div>
					<section className="flex flex-col md:flex-row md:items-start lg:items-start w-full">
						<div className="w-full lg:w-full md:order-last">
							<Image
								src={urlFor(shampoo?.thumbnailFullsize).url()}
								alt="texture"
								width={2000}
								height={700}
								className="object-contain object-center w-full h-auto max-h-[650px] md:max-h-[850px]"
							/>
						</div>
						<div className="w-full lg:w-full space-y-8">
							<header>
								<h3 className="text-xl font-bold text-mayazNiche uppercase">
									Hydrate
								</h3>
								<h2 className="text-2xl font-bold uppercase">
									{shampoo.studioProductTitle}
								</h2>
								<h1 className="text-4xl font-bold uppercase">
									{shampoo.studioProductSubTitle}
								</h1>
								<h3 className="text-lg font-medium text-[#A0A0A0]">
									{shampoo.briefDescription}
								</h3>
							</header>
							<div>
								<p className="text-3xl">
									{formatter.format(shampoo.productPricing.price)}
								</p>
								<p className="font-medium">size: {shampooSize?.size.size}</p>
							</div>
							{/*
							<p>_id: {shampoo._id}</p>
							<p>niche: {shampoo.niche === true ? 'true' : 'false'}</p>
							<p>slug: {shampoo.slug.current}</p>
							<p>productName: {shampoo.productName}</p>
							<p>productStatus: {shampoo.productStatus}</p>
							*/}
							<SnipcartButton
								product={{
									_id: shampoo._id,
									niche: shampoo.niche,
									productStatus: shampoo.productStatus,
									price: shampoo.productPricing.price,
									briefDescription: shampoo.briefDescription,
									thumbnail: shampoo.thumbnail,
									productName: shampoo.productName,
									collection: { slug: { current: shampoo.collection.slug } },
									slug: shampoo.slug,
									currentSize: shampooSize?.size.size || 'default-size', // Ensure currentSize is provided
								}}
							/>
							<div className="flex gap-4 w-full">
								<div className="w-full">
									<PortableText
										value={shampoo?.productDescription}
										components={RichTextComponents}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div>
					<section className="flex flex-col md:flex-row items-end w-full md:-mt-28 lg:-mt-60 xl:mt-0">
						<div className="w-full">
							<Image
								src={urlFor(conditioner?.thumbnailFullsize).url()}
								alt="texture"
								width={2000}
								height={700}
								className="object-contain object-center w-full h-auto max-h-[650px] md:max-h-[850px] xl-w-full xl:h-[850px]"
							/>
						</div>
						<div className="w-full space-y-8">
							<header>
								<h3 className="text-xl font-bold text-mayazNiche uppercase">
									Hydrate
								</h3>
								<h2 className="text-2xl font-bold uppercase">
									{conditioner.studioProductTitle}
								</h2>
								<h1 className="text-4xl font-bold uppercase">
									{conditioner.studioProductSubTitle}
								</h1>
								<h3 className="text-lg font-medium text-[#A0A0A0]">
									{conditioner.briefDescription}
								</h3>
							</header>
							<div>
								<p className="text-3xl">
									{formatter.format(conditioner.productPricing.price)}
								</p>
								<p className="font-medium">
									size: {conditionerSize?.size.size}
								</p>
							</div>
							<SnipcartButton
								product={{
									_id: conditioner._id,
									niche: conditioner.niche,
									productStatus: conditioner.productStatus,
									price: conditioner.productPricing.price,
									briefDescription: conditioner.briefDescription,
									thumbnail: conditioner.thumbnail,
									productName: conditioner.productName,
									collection: {
										slug: { current: conditioner.collection.slug },
									},
									slug: conditioner.slug,
									currentSize: conditionerSize?.size.size || 'default-size', // Ensure currentSize is provided
								}}
							/>
							<div className="flex gap-8 w-full">
								<div className="w-full">
									<PortableText
										value={conditioner?.productDescription}
										components={RichTextComponents}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
			{/*
			 ** mist spray & oils
			 ** ------------------------------------------------------------------------------ >>>
			 */}
			<section className="flex flex-col xl:grid xl:grid-cols-2 items-start gap-8 lg:gap-4 w-full h-full">
				{/*
				 ** mist spray
				 ** ------------------------------------------------------------------------------ >>>
				 */}
				<div className="flex flex-col items-start justify-between relative bg-[#eeeeee] p-8 w-full h-full">
					<div className="absolute sm:relative flex flex-col grow left-0 px-6 sm:px-0 sm:-ml-3 top-0 w-full uppercase text-[10rem] sm:text-[12rem] md:text-[14rem] lg:text-[14rem] min-[1290px]:text-[15rem] min-[1442px]:text-[16rem] leading-none font-bold text-mayazNiche">
						<span className="inline-block md:-mt-2">pure</span>
						<span className="inline-block -mt-6 md:-mt-12">bala</span>
						<span className="inline-block -mt-6 md:-mt-12">nce</span>
					</div>
					<section className="relative flex flex-col sm:flex-row items-end gap-8 w-full">
						<div className="relative w-full h-full mr-0 sm:order-last">
							<Image
								src={urlFor(mist?.thumbnailFullsize).url()}
								alt="texture"
								width={2000}
								height={700}
								className="sm:absolute bottom-0 right-0 object-contain object-right sm:object-center w-full h-auto max-h-[700px] md:max-h-[1018px]"
							/>
						</div>
						<div className="w-full space-y-8">
							<header>
								<h3 className="text-xl font-bold text-mayazNiche uppercase">
									Hydrate
								</h3>
								<h2 className="text-2xl font-bold uppercase">
									{mist.studioProductTitle}
								</h2>
								<h1 className="text-4xl font-bold uppercase">
									{mist.studioProductSubTitle}
								</h1>
								<h3 className="text-lg font-medium text-[#A0A0A0]">
									{mist.briefDescription}
								</h3>
							</header>
							<div>
								<p className="text-3xl">
									{formatter.format(mist.productPricing.price)}
								</p>
								<p className="font-medium">size: {mistSize?.size.size}</p>
							</div>
							<SnipcartButton
								product={{
									_id: mist._id,
									niche: mist.niche,
									productStatus: mist.productStatus,
									price: mist.productPricing.price,
									briefDescription: mist.briefDescription,
									thumbnail: mist.thumbnail,
									productName: mist.productName,
									collection: { slug: { current: mist.collection.slug } },
									slug: mist.slug,
									currentSize: mistSize?.size.size || 'default-size', // Ensure currentSize is provided
								}}
							/>
							<div className="flex gap-8 w-full">
								<div className="w-full">
									<PortableText
										value={mist?.productDescription}
										components={RichTextComponents}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/* oils ---------------------------------------------------------------------- >>> */}
				<div className="flex flex-col lg:flex-row xl:flex-col justify-between gap-8 h-full w-full p-8">
					{/*
					 ** elixir
					 ** ------------------------------------------------------------------------------ >>>
					 */}
					<section className="flex flex-col md:flex-row lg:items-end w-full">
						<div className="relative w-full lg:order-last xl:order-first">
							<Image
								src={urlFor(elixir?.thumbnailFullsize).url()}
								alt="texture"
								width={2000}
								height={700}
								className="lg:absolute xl:relative bottom-0 object-contain object-center w-full h-auto max-h-[560px]"
							/>
						</div>
						<div className="w-full space-y-8">
							<header>
								<h3 className="text-xl font-bold text-mayazNiche uppercase">
									Hydrate
								</h3>
								<h2 className="text-2xl font-bold uppercase">
									{elixir.studioProductTitle}
								</h2>
								<h1 className="text-4xl font-bold uppercase">
									{elixir.studioProductSubTitle}
								</h1>
								<h3 className="text-lg font-medium text-[#A0A0A0]">
									{elixir.briefDescription}
								</h3>
							</header>
							<div>
								<p className="text-3xl">
									{formatter.format(elixir.productPricing.price)}
								</p>
								<p className="font-medium">size: {elixirSize?.size.size}</p>
							</div>
							<SnipcartButton
								product={{
									_id: elixir._id,
									niche: elixir.niche,
									productStatus: elixir.productStatus,
									price: elixir.productPricing.price,
									briefDescription: elixir.briefDescription,
									thumbnail: elixir.thumbnail,
									productName: elixir.productName,
									collection: { slug: { current: elixir.collection.slug } },
									slug: elixir.slug,
									currentSize: elixirSize?.size.size || 'default-size', // Ensure currentSize is provided
								}}
							/>
							<div className="flex gap-8 w-full">
								<div className="w-full">
									<PortableText
										value={elixir?.productDescription}
										components={RichTextComponents}
									/>
								</div>
							</div>
						</div>
					</section>
					{/*
					 ** serum
					 ** ------------------------------------------------------------------------------ >>>
					 */}
					<section className="flex flex-col md:flex-row items-end w-full h-full md:-mt-0 lg:mt-0">
						<div className="relative w-full md:order-last">
							<Image
								src={urlFor(serum?.thumbnailFullsize).url()}
								alt="texture"
								width={2000}
								height={700}
								className="object-contain object-center w-full h-auto max-h-[560px]"
							/>
						</div>
						<div className="w-full space-y-8">
							<header>
								<h3 className="text-xl font-bold text-mayazNiche uppercase">
									Hydrate
								</h3>
								<h2 className="text-2xl font-bold uppercase">
									{serum.studioProductTitle}
								</h2>
								<h1 className="text-4xl font-bold uppercase">
									{serum.studioProductSubTitle}
								</h1>
								<h3 className="text-lg font-medium text-[#A0A0A0]">
									{serum.briefDescription}
								</h3>
							</header>
							<div>
								<p className="text-3xl">
									{formatter.format(serum.productPricing.price)}
								</p>
								<p className="font-medium">size: {serumSize?.size.size}</p>
							</div>
							<SnipcartButton
								product={{
									_id: serum._id,
									niche: serum.niche,
									productStatus: serum.productStatus,
									price: serum.productPricing.price,
									briefDescription: serum.briefDescription,
									thumbnail: serum.thumbnail,
									productName: serum.productName,
									collection: { slug: { current: serum.collection.slug } },
									slug: serum.slug,
									currentSize: serumSize?.size.size || 'default-size', // Ensure currentSize is provided
								}}
							/>
							<div className="flex gap-8 w-full">
								<div className="w-full">
									<PortableText
										value={serum?.productDescription}
										components={RichTextComponents}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
			<div className="flex flex-col w-ull gap-8 py-8 bg-black">
				{/*
				 ** balm
				 ** ------------------------------------------------------------------------------ >>>
				 */}
				<section className="flex gap-8 p-8 w-full">
					<div className="flex flex-col gap-8 w-full max-w-[96rem] mx-auto">
						<section className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-end items-end xl:items-center w-full">
							<div className="flex w-full h-full xl:w-2/5 justify-center lg:items-end">
								<Image
									src={urlFor(balm?.thumbnailFullsize).url()}
									alt="texture"
									width={2000}
									height={700}
									className="object-contain object-center w-full max-w-[500px] h-auto lg:max-h-[300px]"
								/>
							</div>
							<div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-end items-start gap-8 w-full xl:w-3/5">
								<div className="w-full space-y-8 text-white">
									<header>
										<h3 className="text-xl font-bold text-mayazNiche uppercase">
											Hydrate
										</h3>
										<h2 className="text-2xl font-bold uppercase">
											{balm.studioProductTitle}
										</h2>
										<h1 className="text-4xl font-bold uppercase">
											{balm.studioProductSubTitle}
										</h1>
										<h3 className="text-lg font-medium text-[#A0A0A0]">
											{balm.briefDescription}
										</h3>
									</header>
									<div>
										<p className="text-3xl">
											{formatter.format(balm.productPricing.price)}
										</p>
										<p className="font-medium">size: {balmSize?.size.size}</p>
									</div>
									<SnipcartButton
										product={{
											_id: balm._id,
											niche: balm.niche,
											productStatus: balm.productStatus,
											price: balm.productPricing.price,
											briefDescription: balm.briefDescription,
											thumbnail: balm.thumbnail,
											productName: balm.productName,
											collection: { slug: { current: balm.collection.slug } },
											slug: balm.slug,
											currentSize: balmSize?.size.size || 'default-size', // Ensure currentSize is provided
										}}
										knockout={true}
									/>
								</div>
								<div className="flex gap-8 w-full h-full">
									<div className="w-full text-white">
										<PortableText
											value={balm?.productDescription}
											components={RichTextComponents}
										/>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>
				{/*
				 ** batana
				 ** ------------------------------------------------------------------------------ >>>
				 */}
				<section className="flex gap-8 p-8 w-full">
					<div className="flex flex-col gap-8 w-full max-w-[96rem] mx-auto">
						<section className="flex flex-col md:flex-row items-end gap-8 w-full">
							<div className="w-full md:order-last">
								<Image
									src={urlFor(batana?.thumbnailFullsize).url()}
									alt="texture"
									width={2000}
									height={700}
									className="object-contain object-center w-full h-auto max-h-[300px]"
								/>
							</div>
							<div className="w-full space-y-8 text-white">
								<header>
									<h3 className="text-xl font-bold text-mayazNiche uppercase">
										Hydrate
									</h3>
									<h2 className="text-2xl font-bold uppercase">
										{batana.studioProductTitle}
									</h2>
									<h1 className="text-4xl font-bold uppercase">
										{batana.studioProductSubTitle}
									</h1>
									<h3 className="text-lg font-medium text-[#A0A0A0]">
										{batana.briefDescription}
									</h3>
								</header>
								<div>
									<p className="text-3xl">
										{formatter.format(batana.productPricing.price)}
									</p>
									<p className="font-medium">size: {batanaSize?.size.size}</p>
								</div>
								<SnipcartButton
									product={{
										_id: batana._id,
										niche: batana.niche,
										productStatus: batana.productStatus,
										price: batana.productPricing.price,
										briefDescription: batana.briefDescription,
										thumbnail: batana.thumbnail,
										productName: batana.productName,
										collection: { slug: { current: batana.collection.slug } },
										slug: batana.slug,
										currentSize: batanaSize?.size.size || 'default-size', // Ensure currentSize is provided
									}}
									knockout={true}
								/>
								<div className="flex gap-8 w-full">
									<div className="w-full">
										<PortableText
											value={batana?.productDescription}
											components={RichTextComponents}
										/>
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</main>
	);
}
