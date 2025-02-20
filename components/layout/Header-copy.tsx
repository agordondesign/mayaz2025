'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from 'framer-motion';
import { usePathname } from 'next/navigation';
import SearchInput from '../ui/SearchInput';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
	//const [selected, setSelected] = useState('');
	const isStudio = usePathname().includes('/studio');
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchState, setSearchState] = useState(false);

	const childtoParent = (childData: boolean) => {
		setSearchState(childData);
	};

	const searchToggle = () => {
		setSearchState(!searchState);
		//setMenuState(false);
	};

	const menuToggle = () => setMenuOpen(!menuOpen);
	const sidebarVariants = {
		closed: {
			transition: { staggerChildren: 0.5, delayChildren: 0.5 },
		},
		open: {
			transition: { delay: 4, staggerChildren: 0.1, staggerDirection: 1 },
		},
	};
	const sidebarItemVariants = {
		closed: {
			x: -100,
			opacity: 0,
		},
		open: {
			x: 0,
			opacity: 1,
		},
	};

	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<>
			{!isStudio && (
				<>
					<header className="sticky top-0 w-full px-0 font-base z-20 bg-mayazBody">
						<div className="flex w-full items-center justify-between">
							<nav className="w-full max-w-[96rem] mx-auto py-2 pt-6 pb-6 z-20 top-0 left-0 transition-all duration-300 ease-in-out">
								<div className="lg:max-w-[96rem] pl-4 flex flex-wrap items-center justify-between mx-auto">
									{/*<!-- Hamburger (right) -->*/}
									<button
										//data-collapse-toggle="navbar-sticky"
										type="button"
										className="top-4 right-0 mr-4 inline-flex items-center z-10"
										//aria-controls="navbar-sticky"
										//aria-expanded="false"
										onClick={menuToggle}
									>
										<span className="sr-only">Open main menu</span>
										{/* <svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<title>Menu Icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 9h16.5m-16.5 6.75h16.5"
											/>
										</svg>
									</button>
									<div className="absolute w-full left-0 z-1">
										<Link href="/" className="flex justify-center items-center">
											<Image
												src="/Logo_Txt_Blk.svg"
												alt="Mayaz Logo"
												width={134}
												height={43}
												className="w-auto h-7 md:h-10"
											/>
										</Link>
									</div>

									{/*<!-- Snipcart (right) -->*/}
									<div className="flex justify-between md:justify-normal w-full md:w-auto md:order-2 mt-3 border-t border-mayaz border-opacity-20 md:border-none !z-50">
										<button
											type="button"
											onClick={() => setSearchState(!searchState)}
										>
											<FiSearch size={20} />
										</button>
										<button
											type="button"
											className="snipcart-customer-signin relative flex md:px-5 py-2.5 mr-0"
										>
											<Image
												src="/svg/person.svg"
												alt="User Signin"
												width={16}
												height={16}
												style={{
													objectFit: 'contain',
												}}
												className="w-6 h-6 md:h-6 md:w-6 -mt-1"
											/>
										</button>
										<button
											type="button"
											className="snipcart-checkout relative flex font-medium rounded-lg text-sm md:pr-5 py-2.5 text-center md:mr-0"
										>
											<Image
												src="/svg/bag.svg"
												alt="Shopping cart"
												width={16}
												height={16}
												style={{
													objectFit: 'contain',
												}}
												className="w-full h-5 md:h-5 -mt-1"
											/>
											<span className="snipcart-items-count absolute bg-mayaz rounded-full px-1.5 ml-2 mt-1.5 md:mt-2 text-xs" />
											<span className="snipcart-total-price block ml-4" />
										</button>
									</div>
									{/*<!-- Middle Menu -->*/}
									{/* <div
							className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
							id="navbar-sticky"
						>
							middle area
						</div> */}
								</div>
							</nav>
						</div>
						<motion.div
							className="w-full border-b border-mayazBorder/70"
							style={{ opacity: opacity }}
						/>
					</header>

					{/*<!-- Pop Out Navigation -->*/}
					<div>
						<AnimatePresence>
							{searchState && (
								<>
									<motion.aside
										className="fixed top-0 bottom-0 right-0 w-[90%] md:max-w-[450px] !z-50 mt-0 transition-fix bg-mayazBody drop-shadow-lg"
										layout
										initial={{ x: '100%' }}
										animate={{
											x: '0',
											transition: {
												delay: 0,
												duration: 0.5,
												ease: 'easeInOut',
											},
										}}
										exit={{
											x: '100%',
											transition: {
												delay: 0,
												duration: 0.5,
												ease: 'easeInOut',
											},
										}}
									>
										<SearchInput childParent={childtoParent} />
									</motion.aside>
									<motion.button
										type="button"
										className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 h-screen z-20 no-scroll"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, transition: { delay: 0 } }}
										exit={{ opacity: 0, transition: { delay: 0.25 } }}
										onClick={searchToggle}
									/>
								</>
							)}
							{menuOpen ? (
								<>
									<motion.aside
										className="fixed top-0 bottom-0 left-0 w-full max-w-[312px] sm:max-w-[400px] z-30 mt-0 transition-fix"
										layout
										initial={{ x: '-100%' }}
										animate={{
											x: '0',
											transition: {
												delay: 0,
												duration: 0.5,
												ease: 'easeInOut',
											},
										}}
										exit={{
											x: '-100%',
											transition: {
												delay: 0,
												duration: 0.5,
												ease: 'easeInOut',
											},
										}}
									>
										<motion.ul
											initial="closed"
											animate="open"
											variants={sidebarVariants}
											className="absolute text-lg h-full top-0 left-0 bottom-0 w-full max-w-[312px] sm:max-w-[400px] pt-4 bg-white drop-shadow-xl z-20 border-r border-gray-100 overflow-scroll transition-fix"
										>
											<motion.li
												variants={sidebarItemVariants}
												className="py-4 px-8 transition-fix"
											>
												<button
													type="button"
													onClick={menuToggle}
													onKeyUp={(e) => {
														if (e.key === 'Enter' || e.key === ' ') {
															menuToggle();
														}
													}}
													onKeyDown={(e) => {
														if (e.key === 'Enter' || e.key === ' ') {
															menuToggle();
														}
													}}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-6 h-6 opacity-50"
													>
														<title>Close Menu</title>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M6 18L18 6M6 6l12 12"
														/>
													</svg>
												</button>
											</motion.li>
											<motion.li variants={sidebarItemVariants} className="">
												<Link
													href="/showroom"
													className="block px-16 py-4 hover:bg-gray-100 hover:cursor-pointer"
													onClick={menuToggle}
												>
													Showroom
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												key="jilbabs-and-abayas"
											>
												<Link
													href="/jilbabs-and-abayas"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Jilbābs & Abāyas
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												key="khimars-and-capes"
											>
												<Link
													href="/khimars-and-capes"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Khimārs & Capes
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												key="her-shyness"
											>
												<Link
													href="/niqabs"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Niqābs
												</Link>
											</motion.li>
											<motion.li variants={sidebarItemVariants} key="niqabs">
												<Link
													href="/kids-garments"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Kids Garments
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												key="accessories"
											>
												<Link
													href="/accessories"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Accessories
												</Link>
											</motion.li>
											<motion.li variants={sidebarItemVariants} key="books">
												<Link
													href="/books"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Books
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												key="mersi-nail-polish"
											>
												<Link
													href="/mersi-nail-polish"
													className="flex gap-2 justify-start items-baseline px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													<Image
														src="/svg/Mersi.svg"
														alt="Mersi Nail Polish"
														width={891}
														height={313}
														style={{
															objectFit: 'contain',
														}}
														className="w-auto h-6"
													/>{' '}
													<span className="text-base">Nail Polish</span>
												</Link>
											</motion.li>
											<motion.li variants={sidebarItemVariants} key="sale">
												<Link
													href="/sale"
													className="block px-16 py-4 font-medium tracking-[0.75em] text-xl hover:bg-gray-100"
													onClick={menuToggle}
												>
													SALE
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												key="her-locs"
												className="hidden"
											>
												<Link
													href="/her-bookshelf"
													className="block px-16 py-4 hover:bg-gray-100"
													onClick={menuToggle}
												>
													Suite Locs
												</Link>
											</motion.li>
											<motion.li
												variants={sidebarItemVariants}
												//layout
												//initial={{ y: '100%', opacity: 1 }}
												//animate={{ y: 0, opacity: 1 }}
												//exit={{ y: '100%', opacity: 0 }}
												//transition={{ delay: 0.5 }}
												key="account"
												className="absolute bottom-0 border-t border-mayazBorder/70 w-full hover:bg-gray-100"
											>
												<button
													type="button"
													className="snipcart-customer-signin flex gap-2 justify-start items-center px-16 py-8 text-sm"
													onClick={menuToggle}
												>
													<Image
														src="/svg/person.svg"
														alt="User Signin"
														width={16}
														height={16}
														style={{
															objectFit: 'contain',
														}}
														className="w-[1.15 rem] h-[1.5 rem]"
													/>
													Account
												</button>
											</motion.li>
										</motion.ul>
										{/*<!-- Overlay -->*/}
									</motion.aside>
									<motion.button
										type="button"
										className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 backdrop-blur-none md:backdrop-blur-none h-screen z-20"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, transition: { delay: 0 } }}
										exit={{ opacity: 0, transition: { delay: 0.25 } }}
										onClick={menuToggle}
									/>
								</>
							) : null}
						</AnimatePresence>
					</div>
				</>
			)}
		</>
	);
}
