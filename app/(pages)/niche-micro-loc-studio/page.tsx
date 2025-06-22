//import ShowroomFeature from '@/components/layout/ShowroomFeature';
//import PageBanner from '@/components/layout/PageBanner';
//import { getProductBySlug } from '@/lib/api';
import React from 'react';
import Image from 'next/image';
//import { urlFor } from '@/sanity/lib/image';
//import SetmoreEmbed from '@/components/ui/setmoreEmbed';
//import { RichTextComponents } from '@/components/common/RichTextComponents';
//import { PortableText } from 'next-sanity';
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
//import SnipcartButton from '@/components/ui/SnipcartButton';
import FeatureSectionList from '@/components/layout/FeatureSectionList';
//import CTAWithImage from '@/components/layout/CTAWithImage';
//import { MarqueeDemo } from '@/components/layout/MarqueeDemo'; // Adjust the path as needed
//import FAQs from '@/components/layout/FAQs';
import DividedFeatureSection from '@/components/layout/DividedFeatureSection';
import SetmoreFormHeader from '@/components/layout/SetmoreFormHeader';
import { GoStarFill } from 'react-icons/go';
import NewFaqs from '@/components/layout/NewFaqs';

export async function generateStaticParams() {
	const query = groq`*[_type == "page"] { slug }`;
	const pages: { slug: { current: string } }[] = await client.fetch(query);

	return pages.map((page) => ({
		slug: page.slug.current,
	}));
}

export default async function page() {
	return (
		<div className="flex flex-col w-full max-w-[96rem] mx-auto gap-16">
			<section className="flex flex-col gap-8 w-full px-0 z-10">
				<SetmoreFormHeader />
			</section>
			<section className="flex flex-col gap-8 w-full mt-2 text-sm">
				<div className="relative w-auto h-auto bg-transparent">
					<div className="relative flex justify-center items-center z-10 w-full min-h-full">
						<div className="relative flex flex-col items-center justify-center gap-8 p-20 py-16 bg-black w-full overflow-hidden">
							<Image
								src="/svg/micro-locs-studio.svg"
								alt="Niche Micro Locs Studio"
								width={200}
								height={100}
								style={{
									objectFit: 'contain',
								}}
								className="w-full max-w-[800px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto z-10"
							/>
							<div className="z-10">
								<p className="text-sm lg:text-xl text-white">
									Micro Loc installation, reties, maintenance, and more!
								</p>
							</div>
							<Image
								src="/svg/texture.svg"
								alt="texture"
								width={2000}
								height={700}
								className="absolute object-cover object-center left-1 top-0 w-full h-full opacity-60"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="flex gap-8 lg:gap-16 w-full p-8">
				<div className="flex flex-col w-full md:w-1/2 gap-8">
					<header className="space-y-4">
						<h3 className="text-lg font-bold text-mayazNiche uppercase">
							Get Loc&apos;d In!
						</h3>

						<h1 className="text-3xl font-bold uppercase">
							Personalized Haircare
						</h1>
						<h2 className="text-xl font-bold uppercase">
							One-on-one consultation for loc solutions just for you
						</h2>
					</header>
					<div>
						<p className="mt-3 text-gray-600">
							At Niche, we believe every micro-loc journey should begin with a
							clear, confident step—and that starts with a personalized
							consultation. For just $50, we take the time to truly understand
							your hair&apos;s unique needs, your lifestyle, and your goals.
							Whether you&apos;re a first-time client looking to start your
							transformation or you&apos;re transferring your care to Niche, our
							expert-led sessions ensure you feel informed, supported, and
							excited for what&apos;s ahead.
						</p>
						<p className="mt-3 text-gray-600">
							Our Personalized Haircare Blueprint is perfect for new clients who
							want a tailored plan for healthy, beautiful micro-locs. And for
							those making the switch to Niche, our Seamless Transition
							Consultation provides the guidance and assessment needed to
							continue your journey with ease and confidence. Your hair deserves
							expert care—let us help you begin, or continue, your journey with
							intention.
						</p>
					</div>
				</div>
				<div className="flex flex-col w-full md:w-1/2">
					<div className="items-center w-full">
						<Image
							src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							className="sm:rounded-lg"
							alt="Professional services"
							width={774}
							height={516}
						/>
					</div>
				</div>
			</section>
			{/** Gallery */}
			<section className="grid grid-cols-5 gap-4 items-center w-full">
				<Image
					src="/temp/nicheClients/img_7061-squashed.jpg"
					alt="Professional services"
					width={774}
					height={516}
					className="grid-1 sm:rounded-lg w-full h-auto"
				/>
				<Image
					src="/temp/nicheClients/img_6964-squashed.jpg"
					alt="Professional services"
					width={774}
					height={516}
					className="grid-1 sm:rounded-lg w-full h-auto"
				/>
				<Image
					src="/temp/nicheClients/img_7231-squashed.jpg"
					alt="Professional services"
					width={774}
					height={516}
					className="grid-1 sm:rounded-lg w-full h-auto"
				/>
				<Image
					src="/temp/nicheClients/img_7231-squashed.jpg"
					alt="Professional services"
					width={774}
					height={516}
					className="grid-1 sm:rounded-lg w-full h-auto"
				/>
				<Image
					src="/temp/nicheClients/img_7231-squashed.jpg"
					alt="Professional services"
					width={774}
					height={516}
					className="grid-1 sm:rounded-lg w-full h-auto"
				/>
			</section>
			{/** Testimonials */}
			<section className="flex flex-col gap-8 w-full p-8">
				<header className="space-y-4">
					<h3 className="text-lg font-bold text-mayazNiche uppercase">
						Testimonials
					</h3>

					<h1 className="text-3xl font-bold uppercase">What Our Clients Say</h1>
					<p className="text-base">
						lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</header>
				<div className="grid grid-cols-3 grid-flow-row gap-4 w-full">
					<div className="flex flex-col w-full gap-4 border border-gray-200 rounded-lg p-6">
						<div>
							<div className="flex gap-1">
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
							</div>
						</div>
						<blockquote className="mt-2 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium dolorem nostrum quisquam possimus atque. Explicabo unde
							ut reprehenderit optio dolor temporibus harum nulla quod.
						</blockquote>
						<div className="flex flex-row items-center gap-2">
							<Image
								className="rounded-full w-[42px] h-[42px] overflow-hidden"
								width="42"
								height="42"
								alt=""
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>

							<div className="flex flex-col">
								<figcaption className="text-base font-semibold dark:text-white">
									Someone&apos;s Name
								</figcaption>
								<p className="text-xs font-medium dark:text-white/40">
									Microlocs Installation
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full gap-4 border border-gray-200 rounded-lg p-6">
						<div>
							<div className="flex gap-1">
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
							</div>
						</div>
						<blockquote className="mt-2 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium dolorem nostrum quisquam possimus atque. Explicabo unde
							ut reprehenderit optio dolor temporibus harum nulla quod.
						</blockquote>
						<div className="flex flex-row items-center gap-2">
							<Image
								className="rounded-full w-[42px] h-[42px] overflow-hidden"
								width="42"
								height="42"
								alt=""
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>

							<div className="flex flex-col">
								<figcaption className="text-base font-semibold dark:text-white">
									Someone&apos;s Name
								</figcaption>
								<p className="text-xs font-medium dark:text-white/40">
									Microlocs Installation
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full gap-4 border border-gray-200 rounded-lg p-6">
						<div>
							<div className="flex gap-1">
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
							</div>
						</div>
						<blockquote className="mt-2 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium dolorem nostrum quisquam possimus atque. Explicabo unde
							ut reprehenderit optio dolor temporibus harum nulla quod.
						</blockquote>
						<div className="flex flex-row items-center gap-2">
							<Image
								className="rounded-full w-[42px] h-[42px] overflow-hidden"
								width="42"
								height="42"
								alt=""
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>

							<div className="flex flex-col">
								<figcaption className="text-base font-semibold dark:text-white">
									Someone&apos;s Name
								</figcaption>
								<p className="text-xs font-medium dark:text-white/40">
									Microlocs Installation
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full gap-4 border border-gray-200 rounded-lg p-6">
						<div>
							<div className="flex gap-1">
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
							</div>
						</div>
						<blockquote className="mt-2 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium dolorem nostrum quisquam possimus atque. Explicabo unde
							ut reprehenderit optio dolor temporibus harum nulla quod.
						</blockquote>
						<div className="flex flex-row items-center gap-2">
							<Image
								className="rounded-full w-[42px] h-[42px] overflow-hidden"
								width="42"
								height="42"
								alt=""
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>

							<div className="flex flex-col">
								<figcaption className="text-base font-semibold dark:text-white">
									Someone&apos;s Name
								</figcaption>
								<p className="text-xs font-medium dark:text-white/40">
									Microlocs Installation
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full gap-4 border border-gray-200 rounded-lg p-6">
						<div>
							<div className="flex gap-1">
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
							</div>
						</div>
						<blockquote className="mt-2 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium dolorem nostrum quisquam possimus atque. Explicabo unde
							ut reprehenderit optio dolor temporibus harum nulla quod.
						</blockquote>
						<div className="flex flex-row items-center gap-2">
							<Image
								className="rounded-full w-[42px] h-[42px] overflow-hidden"
								width="42"
								height="42"
								alt=""
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>

							<div className="flex flex-col">
								<figcaption className="text-base font-semibold dark:text-white">
									Someone&apos;s Name
								</figcaption>
								<p className="text-xs font-medium dark:text-white/40">
									Microlocs Installation
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full gap-4 border border-gray-200 rounded-lg p-6">
						<div>
							<div className="flex gap-1">
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
								<GoStarFill className="text-mayazNiche" />
							</div>
						</div>
						<blockquote className="mt-2 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium dolorem nostrum quisquam possimus atque. Explicabo unde
							ut reprehenderit optio dolor temporibus harum nulla quod.
						</blockquote>
						<div className="flex flex-row items-center gap-2">
							<Image
								className="rounded-full w-[42px] h-[42px] overflow-hidden"
								width="42"
								height="42"
								alt=""
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>

							<div className="flex flex-col">
								<figcaption className="text-base font-semibold dark:text-white">
									Someone&apos;s Name
								</figcaption>
								<p className="text-xs font-medium dark:text-white/40">
									Microlocs Installation
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative flex flex-col gap-8 w-full">
				<div className="p-16 z-10">
					<FeatureSectionList />
					<DividedFeatureSection />
				</div>
				<div className="bg-black/10 w-full h-full absolute top-0 max-h-[90%]" />
			</section>
			<section className="flex justify-center items-center xl:justify-start gap-8 w-full p-8">
				<NewFaqs />
			</section>
		</div>
	);
}
