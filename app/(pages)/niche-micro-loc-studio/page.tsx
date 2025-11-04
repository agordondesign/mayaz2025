//import ShowroomFeature from '@/components/layout/ShowroomFeature';
//import PageBanner from '@/components/layout/PageBanner';
//import { getProductBySlug } from '@/lib/api';
import React from "react";
import Image from "next/image";
//import { urlFor } from '@/sanity/lib/image';
//import SetmoreEmbed from '@/components/ui/setmoreEmbed';
//import { RichTextComponents } from '@/components/common/RichTextComponents';
//import { PortableText } from 'next-sanity';
//import ProductByCollection from '@/components/layout/ProductByCollection';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
//import PageBannerPromotion from '@/components/layout/PageBannerPromotion';
//import PageContent from '@/components/layout/PageContent';
//import FeatureBanner from '@/components/layout/FeatureBanner';
//import PageTitle from '@/components/ui/PageTitle';
//import NicheBanner from '@/components/layout/NicheBanner';
//import SnipCart from '@/components/providers/Snipcart';
//import SnipCartButton from '@/components/ui/SnipcartButton';
//import SnipcartButton from '@/components/ui/SnipcartButton';
import FeatureSectionList from "@/components/layout/FeatureSectionList";
//import CTAWithImage from '@/components/layout/CTAWithImage';
//import { MarqueeDemo } from '@/components/layout/MarqueeDemo'; // Adjust the path as needed
//import FAQs from '@/components/layout/FAQs';
import DividedFeatureSection from "@/components/layout/DividedFeatureSection";
import SetmoreFormHeader from "@/components/layout/SetmoreFormHeader";
import { GoStarFill } from "react-icons/go";
import NewFaqs from "@/components/layout/NewFaqs";

export async function generateStaticParams() {
  const query = groq`*[_type == "page"] { slug }`;
  const pages: { slug: { current: string } }[] = await client.fetch(query);

  return pages.map((page) => ({
    slug: page.slug.current,
  }));
}

async function getNicheFAQs() {
  const query = groq`*[_type == "nicheFaq"] {
		_id,
		question,
		answer
	}`;
  const faqs = await client.fetch(query);
  return faqs;
}

export default async function Page() {
  const nicheFAQs = await getNicheFAQs();

  return (
    <div className="flex flex-col w-full max-w-[96rem] mx-auto gap-4 md:gap-8 lg:gap-16">
      <section className="flex flex-col gap-8 w-full px-0 z-10">
        <SetmoreFormHeader />
      </section>
      <section className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full mt-2 text-sm">
        <div className="relative w-auto h-auto bg-transparent">
          <div className="relative flex justify-center items-center z-10 w-full min-h-full">
            <div className="relative flex flex-col items-center justify-center gap-8 p-20 py-16 bg-black w-full overflow-hidden">
              <Image
                src="/svg/micro-locs-studio.svg"
                alt="Niche Micro Locs Studio"
                width={200}
                height={100}
                style={{
                  objectFit: "contain",
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
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full p-4 lg:p-8">
        <div className="flex flex-col w-full lg:w-1/2 gap-8">
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
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="items-center w-full">
            <Image
              src="/webp/IMG_3948.webp"
              className="rounded-lg"
              alt="Professional services"
              width={774}
              height={516}
            />
          </div>
        </div>
      </section>
      {/** Gallery */}
      <section className="grid grid-cols-3 lg:grid-cols-5 gap-4 items-center w-full p-4 lg:p-8">
        <Image
          src="/webp/img_7061-squashed-squashed.webp"
          alt="Professional services"
          width={774}
          height={516}
          className="grid-1 rounded-lg w-full h-auto"
        />
        <Image
          src="/webp/img_7452-squashed.webp"
          alt="Professional services"
          width={774}
          height={516}
          className="grid-1 rounded-lg w-full h-auto"
        />
        <Image
          src="/webp/img_7508-squashed.webp"
          alt="Professional services"
          width={774}
          height={516}
          className="grid-1 rounded-lg w-full h-auto"
        />
        <Image
          src="/webp/img_7572-squashed.webp"
          alt="Professional services"
          width={774}
          height={516}
          className="grid-1 rounded-lg w-full h-auto"
        />
        <Image
          src="/webp/img_7717-squashed.webp"
          alt="Professional services"
          width={774}
          height={516}
          className="grid-1 rounded-lg w-full h-auto"
        />
        <Image
          src="/webp/img_7228-squashed.webp"
          alt="Professional services"
          width={774}
          height={516}
          className="grid-1 rounded-lg w-full h-auto lg:hidden"
        />
      </section>

      <section className="relative flex flex-col gap-8 w-full">
        <div className="p-4 lg:p-16 z-10">
          <FeatureSectionList />
          <DividedFeatureSection />
        </div>
        <div className="bg-black/10 w-full h-full absolute top-0 max-h-[90%]" />
      </section>

      {/** Testimonials */}
      <section className="flex flex-col gap-8 w-full p-4 lg:p-8">
        <header className="space-y-4">
          <h3 className="text-lg font-bold text-mayazNiche uppercase">
            Testimonials
          </h3>

          <h1 className="text-3xl font-bold uppercase">What Our Clients Say</h1>
          <p className="text-base max-w-lg">
            See why our clients recommend us for expert loc care and stunning
            hair results.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 w-full">
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
              Sista Sakinah was very informative about the process of getting
              microlocs. I'm so excited to be on my way for my loc journey.
            </blockquote>
            <div className="flex flex-row items-center gap-2">
              <Image
                className="rounded-full w-[42px] h-[42px] overflow-hidden"
                width="42"
                height="42"
                alt=""
                src="/webp/img_6961-squashed.webp"
              />

              <div className="flex flex-col">
                <figcaption className="text-base font-semibold dark:text-white">
                  T.C.
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">
                  Microlocs Retie
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
              I was scared at first to get them because I have been getting
              doobies for so long, but so far I’m loving this journey,
              Alhamdulillah
            </blockquote>
            <div className="flex flex-row items-center gap-2">
              <Image
                className="rounded-full w-[42px] h-[42px] overflow-hidden"
                width="42"
                height="42"
                alt=""
                src="/webp/img_6964-squashed-squashed.webp"
              />

              <div className="flex flex-col">
                <figcaption className="text-base font-semibold dark:text-white">
                  Lamisha Chaney
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
              I had my consultation with Sakinah, she was very knowledgeable and
              professional. I most definitely will be continuing my micro loc
              journey with her ❤️
            </blockquote>
            <div className="flex flex-row items-center gap-2">
              <Image
                className="rounded-full w-[42px] h-[42px] overflow-hidden"
                width="42"
                height="42"
                alt=""
                src="/webp/img_7073-squashed-squashed.webp"
              />

              <div className="flex flex-col">
                <figcaption className="text-base font-semibold dark:text-white">
                  Tosha
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">
                  Microlocs Retie
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
              My sis never disappoints me. Even though I was past due for my
              retie, she was still quick and great conversation. My favorite
              loctician hands down.
            </blockquote>
            <div className="flex flex-row items-center gap-2">
              <Image
                className="rounded-full w-[42px] h-[42px] overflow-hidden"
                width="42"
                height="42"
                alt=""
                src="/webp/img_7189-squashed.webp"
              />

              <div className="flex flex-col">
                <figcaption className="text-base font-semibold dark:text-white">
                  Tyshon Chandler
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">
                  Microlocs Retie
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
              Great energy, customer service is outstanding and I recommend
              Niche microlocs to anyone woman looking for a loctician who cares
              for your hair!!!!
            </blockquote>
            <div className="flex flex-row items-center gap-2">
              <Image
                className="rounded-full w-[42px] h-[42px] overflow-hidden"
                width="42"
                height="42"
                alt=""
                src="/webp/img_7228-squashed.webp"
              />

              <div className="flex flex-col">
                <figcaption className="text-base font-semibold dark:text-white">
                  Lisa Nelson
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">
                  Microlocs Retie
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
              My hair wash was amazing and my retie was quick and painless. My
              hair looks and feels great! To top it off Sakina has her own
              products and recommended a steam added to my next retie!
            </blockquote>
            <div className="flex flex-row items-center gap-2">
              <Image
                className="rounded-full w-[42px] h-[42px] overflow-hidden"
                width="42"
                height="42"
                alt=""
                src="/webp/img_7231-squashed-squashed.webp"
              />

              <div className="flex flex-col">
                <figcaption className="text-base font-semibold dark:text-white">
                  L.N.
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">
                  Microlocs Retie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center xl:justify-start gap-8 w-full p-8">
        <NewFaqs nicheFAQs={nicheFAQs} />
      </section>
    </div>
  );
}
