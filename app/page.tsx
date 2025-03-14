/* eslint-disable @typescript-eslint/no-explicit-any */
import FeatureBanner from '@/components/layout/FeatureBanner';
import Masthead from '@/components/layout/Masthead';
import NewRelease from '@/components/layout/NewRelease';
import PageBanner from '@/components/layout/PageBanner';
import HomeBannerPromotion from '@/components/layout/HomeBannerPromotion';
//import PageBannerPromotion from '@/components/layout/PageBannerPromotion';
import PageContent from '@/components/layout/PageContent';
import ProductByCollection from '@/components/layout/ProductByCollection';
import SingleFeatureBanner from '@/components/layout/SingleFeatureBanner';
import PageTitle from '@/components/ui/PageTitle';
import { getLandingPage } from '@/lib/api';

export const revalidate = 10; // Revalidate every hour

export default async function Home() {
	const landingPage = await getLandingPage();
	return (
		<div className="flex flex-col gap-2 w-full pt-2 max-w-[96rem] mx-auto">
			<Masthead landingPage={landingPage} />
			<main className="flex flex-col w-full max-w-[96rem] mx-auto">
				<div className="flex flex-col md:gap-4 w-full mt-4 text-sm">
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{landingPage?.sectionModule?.map((section: any) => (
						<div key={section?._id} className="flex w-full gap-4">
							{section?._type === 'banner' && (
								<section className="flex flex-col gap-2 w-full">
									<PageBanner collection={section} />
								</section>
							)}
							{section?._type === 'pageTitle' && (
								<section className="flex flex-col gap-2 w-full">
									<PageTitle title={landingPage?.title} customTitle={section} />
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
									<HomeBannerPromotion page={section} />
								</section>
							)}
							{section?._type === 'productCollectionList' && (
								<div>
									<ProductByCollection section={section} />
								</div>
							)}
							{section?._type === 'singleFeatureBanner' && (
								<SingleFeatureBanner arrival={section} />
							)}
							{section?._type === 'newArrival' && (
								<NewRelease arrival={section} />
							)}
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
