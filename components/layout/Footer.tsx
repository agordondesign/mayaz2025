'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { FiBox } from 'react-icons/fi';
import Tagline from './Tagline';

export default function Banner() {
	const isStudio = usePathname().includes('/studio');
	const date = new Date().getFullYear();
	return (
		<>
			{!isStudio && (
				<div className=" mt-16">
					<Tagline />
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[96rem] mx-auto">
						<div className="border border-mayazBorder/60 px-4 pt-2 pb-4 lg:p-4">
							<div className="flex flex-row gap-2 lg:flex-col items-center lg:items-start">
								<FiBox size={20} />
								<h3 className="text-sm py-2 font-medium">Free Shipping</h3>
							</div>
							<p className="text-xs">Free shipping for nail polish ONLY</p>
							<p className="text-xs">Guaranteed 2 day delivery</p>
						</div>
						<div className="border border-mayazBorder/60 px-4 pt-2 pb-4 lg:p-4">
							<div className="flex flex-row gap-2 lg:flex-col items-center lg:items-start">
								<FiBox size={20} />
								<h3 className="text-sm py-2 font-medium">Local Pick-up</h3>
							</div>
							<p className="text-xs">
								Friday after Jumu&apos;ah
								{/*Mon - Sun 4:30 pm - 6:30 pm*/}
							</p>
							<p className="text-xs">Masjid Rahmah, Newark, NJ</p>
						</div>
						<div className="border border-mayazBorder/60 px-4 pt-2 pb-4 lg:p-4">
							<div className="flex flex-row gap-2 lg:flex-col items-center lg:items-start">
								<FiBox size={20} />
								<h3 className="text-sm py-2 font-medium">Priority Shipping</h3>
							</div>
							<p className="text-xs">USPS priorirty mail</p>
							<p className="text-xs">Guaranteed 1 day delivery</p>
						</div>
						<div className="border border-mayazBorder/60 px-4 pt-2 pb-4 lg:p-4">
							<div className="flex flex-row gap-2 lg:flex-col items-center lg:items-start">
								<FiBox size={20} />
								<h3 className="text-sm py-2 font-medium">Contact Us</h3>
							</div>
							<p className="text-xs">Chat with our concierge at any time.</p>
							<p className="text-xs">Email us at info@mayazcollection.com</p>
						</div>
					</section>
					<div className="flex flex-col mt-4 border-t border-mayazBorder/0">
						<div className="max-w-[96rem] mx-auto flex flex-wrap lg:flex-nowrap w-full justify-center lg:justify-between items-center my-6 md:my-8 lg:my-10">
							<div className="flex justify-center items-center">
								<div className="h-full lg:pl-4 lg:pr-10 pb-6 lg:py-6 lg:border-r lg:border-stone-300">
									<Image
										src="/Logo_Txt_Stone500.svg"
										alt="Mayaz Logo"
										width={134}
										height={43}
										className="w-auto h-8 md:h-10 lg:h-12"
									/>
								</div>
							</div>
							<div className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-y-4 gap-x-2">
								<div className="w-full lg:pl-10">
									<div className="lg:pb-2">
										<ul className="flex flex-wrap md:flex-nowrap justify-center items-center lg:justify-normal lg:items-start gap-y-1 gap-4 text-sm text-stone-500 font-[400] max-w-xs md:max-w-full mx-auto">
											<li key="account">
												<Link
													href="#"
													className="snipcart-customer-signin block hover:text-black hover:font-[400]"
												>
													Account
												</Link>
											</li>
											<li key="contact-us">
												<Link
													href="/contact-us"
													className="block hover:text-black hover:font-[400]"
												>
													Contact Us
												</Link>
											</li>
											<li key="shipping-and-delivery">
												<Link
													href="/shipping-and-delivery"
													className="block hover:text-black hover:font-[400]"
												>
													Shipping
												</Link>
											</li>
											<li key="returns-and-exchanges">
												<Link
													href="/returns-and-exchanges"
													className="block hover:text-black hover:font-[400]"
												>
													Returns
												</Link>
											</li>
											<li key="faq">
												<Link
													href="/faq"
													className="block hover:text-black hover:font-[400]"
												>
													FAQ
												</Link>
											</li>
											<li key="privacy-policy">
												<Link
													href="/privacy-policy"
													className="block hover:text-black hover:font-[400]"
												>
													Privacy
												</Link>
											</li>
											<li key="terms-of-service-agreement">
												<Link
													href="/terms-of-service-agreement"
													className="block hover:text-black hover:font-[400]"
												>
													Terms
												</Link>
											</li>
										</ul>
									</div>
									<div className="text-xs text-stone-500 hidden lg:block">
										&#169;{date} Mayaz Collection. All Rights Reserved.
									</div>
								</div>
								<div className="flex justify-center lg:justify-normal flex-wrap lg:gap-0 gap-y-2">
									<div className="w-full text-sm flex justify-center lg:justify-start items-center lg:pb-1">
										<span className="relative">
											<FaInstagram color="#79716D" size={18} />
										</span>
										<a href="https://www.instagram.com/mayaz">
											<span className="block text-stone-500 hover:text-black font-[400] pl-1 pb-0.5">
												@mayazcollection
											</span>
										</a>
									</div>
									<span className="text-sm text-stone-500 ">
										Support:{' '}
										<a
											href="mailto:info@mayazpages.com"
											className="hover:text-black font-[400]"
										>
											info@mayazcollection.com
										</a>
									</span>
								</div>
								<div className="w-full text-xs text-center lg:text-left text-stone-500 lg:hidden">
									&#169;{date} Maÿaz Collection. All Rights Reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
