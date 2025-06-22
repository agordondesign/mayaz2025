import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CTAWithImage() {
	return (
		<section className="py-14">
			<div className="flex flex-col gap-8 justify-start items-start w-full mx-auto">
				<div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex md:w-1/2">
					<Image
						src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						className="sm:rounded-lg"
						alt="Professional services"
						width={774}
						height={516}
					/>
				</div>
				<div className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 max-w-4xl">
					<h3 className="text-indigo-600 font-semibold">
						Professional services
					</h3>
					<p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
						Build your SaaS solution with help from our experts
					</p>
					<p className="mt-3 text-gray-600">
						At Niche, we believe every micro-loc journey should begin with a
						clear, confident step—and that starts with a personalized
						consultation. For just $50, we take the time to truly understand
						your hair&apos;s unique needs, your lifestyle, and your goals.
						Whether you&apos;re a first-time client looking to start your
						transformation or you&apos;re transferring your care to Niche, our
						expert-led sessions ensure you feel informed, supported, and excited
						for what&apos;s ahead.
					</p>
					<p className="mt-3 text-gray-600">
						Our Personalized Haircare Blueprint is perfect for new clients who
						want a tailored plan for healthy, beautiful micro-locs. And for
						those making the switch to Niche, our Seamless Transition
						Consultation provides the guidance and assessment needed to continue
						your journey with ease and confidence. Your hair deserves expert
						care—let us help you begin, or continue, your journey with
						intention.
					</p>
					<Link
						href="#"
						className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
					>
						Learn more
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5"
						>
							<title>Arrow Right Icon</title>
							<path
								fillRule="evenodd"
								d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
