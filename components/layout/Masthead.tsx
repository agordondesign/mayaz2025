/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
//import PageBannerPromotion from './PageBannerPromotion';
import Link from 'next/link';
import HomeBannerPromotion from './HomeBannerPromotion';

type MastheadProps = {
	landingPage: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		bannerAd: any;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		bannerAds: any;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		promoAd: any;
		masthead: {
			alt: string;
			asset: {
				alt: string;
				url: string;
				sectionModule: {
					promoAd: {
						banner?: {
							alt: string;
							asset: {
								alt: string;
								url: string;
								path: string;
							};
							colSpan: string;
						};
					}[];
				}[];
			};
		};
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		promoAds: any;
		sectionModule: {
			promoAd: {
				banner?: {
					alt: string;
					asset: {
						alt: string;
						url: string;
						path: string;
					};
					colSpan: string;
				};
			}[];
		}[];
	};
};

export default function Masthead({ landingPage }: MastheadProps) {
	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="relative flex image-box w-full h-auto md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
				<Image
					src={urlFor(landingPage.masthead).url()}
					alt={landingPage.masthead.alt}
					width={1440}
					height={586}
					priority
					quality={100}
					className="object-cover object-top w-full h-full aspect-square md:aspect-auto"
				/>
				{/* bg-white/20 border-r border-white/30 backdrop-blur-md */}
				<div className="absolute flex justify-center items-center h-full w-full md:max-w-sm lg:max-w-lg xl:max-w-xl">
					<div className="relative flex flex-col justify-center items-center lg:h-[300px]">
						<div>
							<Image
								src="/Logo_Txt_Col_Blk.svg"
								alt="Maÿaz Collection Logo"
								width={850}
								height={443}
								className="object-cover object-top w-full h-full max-w-[250px] lg:max-w-[300px] mx-auto hidden md:block"
							/>
							<Image
								src="/Logo_Txt_Wht.svg"
								alt="Maÿaz Collection Logo"
								width={850}
								height={443}
								className="object-cover object-top w-full h-full max-w-[250px] mx-auto md:hidden"
							/>
						</div>
						<div className="h-full flex flex-col gap-6 max-w-md justify-center items-center">
							<hr className="border-b border-black/20" />
							<p className="text-black text-xl hidden">
								The hijab is a way of life, not a lifestyle.
							</p>
							<p className="text-sm lg:text-base text-white md:text-black font-medium text-center max-w-[18rem] lg:max-w-xs">
								Shop our luxury collection of modest wear for the Muslimah of
								Sunnah.
							</p>
							<div>
								<Link
									href="/showroom"
									className="bg-black border border-mayaz/50 text-sm text-background tracking-[0.25rem] uppercase py-4 px-8"
								>
									<span className="hidden lg:inline-block">Shop&nbsp;</span>
									Luxury Collection
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section>
				{landingPage?.bannerAd && (
					<HomeBannerPromotion page={landingPage?.bannerAd} />
				)}
			</section>
		</div>
	);
}
