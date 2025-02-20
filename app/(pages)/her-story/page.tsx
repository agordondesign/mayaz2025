/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import { getPageBySlug } from '@/lib/api';
import PageBanner from '@/components/layout/PageBanner';
import Link from 'next/link';

export default async function page() {
	//const { slug } = await params;
	const pages = await getPageBySlug('her-story');
	//const collections = await getProductsByCollection(slug);
	const currentPage = pages.find(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(page: any) => page.slug.current === 'her-story'
	);
	return (
		<main className="flex flex-col w-full gap-12 xl:gap-16 max-w-[90rem] mx-auto mt-0">
			<section className="flex flex-col gap-4 w-full mt-2 text-sm">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{currentPage?.sectionModule?.map((section: any) => (
					<div key={section?._id} className="flex w-full gap-4">
						{section?._type === 'banner' && (
							<section className="flex flex-col gap-2 w-full">
								<PageBanner collection={section} />
							</section>
						)}
					</div>
				))}
			</section>
			<section className="flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center gap-6 w-full mx-auto">
				<div className="flex justify-end items-center w-auto max-w-xl">
					<h1 className="flex flex-col text-left md:text-right text-2xl md:text-3xl uppercase tracking-[1em] md:py-16">
						<span className="block text-lg lg:text-xl tracking-[0.75em] pl-6 md:mr-[0.5em] pb-3 text-mayaz font-light">
							For the
						</span>
						<span className="inline-block ml-[1em] mb-3 text-black">
							Modest
						</span>
						<span className="inline-block ml-[1em] mb-3 text-black">Woman</span>
					</h1>
				</div>
				<div className="flex justify-center items-center px-4 md:p-6 w-full max-w-xl">
					<p>
						We sincerely reject mainstream modesty and believe that the Muslimah
						(female Muslim) is a woman of distinction. She is tranquil,
						honorable, and chased. A woman who is set apart from the rest by her
						dress, her character, and her high moral standards. Her
						distinguishing mark is covering and chastity.
					</p>
				</div>
			</section>
			<section className="flex flex-col lg:flex-row justify-center items-center w-full h-full max-w-full mx-auto bg-black overflow-hidden">
				<div className="w-full lg:h-full xl:w-full max-h-[300px] md:max-h-[350px] lg:max-h-full overflow-hidden lg:order-last">
					<Image
						src="/temp/1c9309aff2a433461aee3c7b84bd25d1.jpg"
						alt="placeholder"
						width={474}
						height={474}
						className="object-cover w-full h-auto lg:min-h-[700px] xl:min-h-full scale-105"
					/>
				</div>
				<div className="flex flex-col gap-4 w-full lg:w-4/7 xl:w-full h-full text-white px-6 md:px-12 xl:px-24 py-12 xl:py-0 lg:order-first">
					<span className="inline-block mb-3 text-white text-2xl lg:text-2xl uppercase tracking-[0.75em]">
						How We Started
					</span>
					<div className="flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-4">
						<p>
							Maÿaz began with a heartfelt desire to spread dawah and make a
							difference. Allah (الله) guided me to two life-changing books:{' '}
							<Link href="#" className="text-mayazDark font-normal">
								<em>A Treatise on Hijab</em>
							</Link>{' '}
							by Shaikh Muhammad bin Salih Al-Uthaimeen and{' '}
							<Link href="#" className="text-mayazDark font-normal">
								<em>The Dress Code of the Muslim Woman</em>
							</Link>{' '}
							by Imam Muhammad Naasirud-Deen Al-Albaani. These books brought
							such clarity and enlightenment to my heart. Each page deepened my
							understanding of what it truly means to dress modestly and fulfill
							this beautiful act of worship.
						</p>
						<p>
							As I read, I felt an undeniable pull to share what I had learned
							with others. It all began with dua, countless conversations with
							my family, and a determination to bring this vision to life. Maÿaz
							Collection was born as a way to provide meaningful resources like
							these books and garments that support women in covering correctly.
							Our very first product was the “jilbab” garment—a simple,
							one-piece design that flows from the head to the feet—because I
							had come to understand its importance and obligation (wajib).
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col w-full max-w-7xl mx-auto md:py-16 px-6 gap-12 xl:gap-16">
				<div className="flex flex-col justify-center items-center gap-6 w-full">
					<div className="w-full inline-block text-black text-2xl lg:text-2xl uppercase tracking-[0.75em]">
						My Dawah
					</div>
					<div className="flex flex-col md:flex-row gap4 md:gap-6 lg:gap-4">
						<div className="w-full">
							<p>
								For us as Muslim women covering is a way of life, a source of
								comfort, and an expression of faith. At Maÿaz, we want to make
								that experience feel special. Every piece in our collection is
								designed with care, offering a variety of styles that feel
								fresh, practical, and beautiful.
							</p>
						</div>
						<div className="hidden lg:flex justify-center items-center w-full mx-auto">
							<Image
								src="/temp/Logo_Full_Blk.svg"
								alt="placeholder"
								width={474}
								height={592}
								className="object-contain w-full max-w-sm h-auto"
							/>
						</div>
						<div className="w-full">
							<p>
								From timeless designs to seasonal favorites, we&apos;re here to
								make modesty effortless and joyful.
							</p>
							<p>
								Our goal is to create garments that don&apos;t just meet your
								needs—they make you feel confident, honored, and cherished.
								Every item is crafted to reflect the balance between modesty and
								elegance because you deserve both.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="relative flex flex-col lg:flex-row justify-end items-center w-full mx-auto lg:max-h-[600px] overflow-hidden">
				<Image
					src="/temp/Jilbab.webp"
					alt="placeholder"
					width={474}
					height={592}
					className="object-cover object-top w-full h-auto max-h-[350px] lg:max-h-full grayscale-[80%]"
				/>
				<div className="relative lg:absolute flex flex-col lg:flex-col justify-start items-start lg:justify-center w-full lg:w-1/2 h-auto py-12 px-6 md:px-12 lg:p-12 xl:p-12 xl:py-14 text-white bg-mayazDarker border border-mayazDarker/50 bg-opacity-90 backdrop-blur-md">
					<span className="inline-block mb-3 text-white text-2xl lg:text-2xl uppercase tracking-[0.75em]">
						Our Goal
					</span>
					<div className="flex flex-col md:flex-row lg:flex-col gap4 md:gap-6 lg:gap-0">
						<p className="pb-4">
							At Maÿaz Collection, we hope to inspire Taqwa—Love, Fear, and Hope
							in Allah—through everything we offer. It&apos;s not just about
							covering; it&apos;s about loving the act of covering and finding
							beauty in it. Our mission is to make it easier for you to embrace
							modesty in a way that feels natural and uplifting.
						</p>
						<p>
							We&apos;re here to support and encourage you, offering pieces that
							align with Islamic values while celebrating your individuality.
							This is my way of spreading dawah, إن شاء الله, and helping my
							sisters feel their absolute best—inside and out.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
