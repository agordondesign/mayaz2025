'use client';
import { groq } from 'next-sanity';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
//import { FiSearch } from 'react-icons/fi';
//import { CiSearch } from 'react-icons/ci';
import ClientSideRoute from '../common/ClientSideRoute';
import { Search } from 'lucide-react';

type Props = {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	childParent: any;
};

export default function Home({ childParent }: Props) {
	const data = false;
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchTerm, setSearchTerm] = useState('');
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	const [posts, setPosts] = useState<any[]>([]);
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	useEffect(() => {
		const fetchPosts = async () => {
			const query = groq`
		*[_type == "product" && productName match "${searchTerm}*"] {
      ...,
			_id,
      _key,
			productName,
			slug,
      collection-> {
        ...,
        "slug": slug.current,
      },
			categories[]-> {
				...,
    	  colorScheme->,
			  colorSchemeAlt->,
				"slug": slug.current,
			},
		}
	`;
			const data = await client.fetch(query);
			setPosts(data);
		};
		fetchPosts();
	}, [searchTerm]);

	useEffect(() => {
		inputRef.current?.focus();
		if (searchTerm !== '') {
			const results = posts.filter((post) =>
				post.productName.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredPosts(results);
		} else {
			setFilteredPosts([]);
		}
	}, [searchTerm, posts]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<>
			<ul className="fixed h-full top-0 right-0 bottom-0 w-full max-w-md z-20 overflow-y-scroll transition-fix bg-search">
				<li className="sticky top-0 flex justify-center items-center w-full h-[86px] text-right py-4 px-6 transition-fix bg-mayazBody border-b border-mayazBorder/50 z-50">
					<button
						type="button"
						className="flex flex-nowrap items-center justify-center bg-transparent pr-2"
					>
						<Search strokeWidth={1.75} size={20} />
					</button>
					<input
						ref={inputRef}
						type="text"
						value={searchTerm}
						onChange={handleSearch}
						className="grow px-2 pt-2.5 pb-2 text-base md:text-lg text-foreground placeholder:text-mayaz border-none bg-transparent focus:outline-none focus:!border-transparent"
						placeholder="Search products..."
					/>
					<button
						type="button"
						className="ml-1"
						onClick={() => childParent(data)}
						onKeyUp={(e) => e.key === 'Enter' && childParent(data)}
						onKeyDown={(e) => e.key === 'Enter' && childParent(data)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 opacity-50"
						>
							<title>Close</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</li>

				<li className="w-full z-40 mt-5">
					<div className="flex flex-col">
						<div className="flex flex-col flex-wrap gap-2">
							{searchTerm &&
								filteredPosts.map((post) => (
									<button
										key={post._id}
										type="button"
										className="relative cursor-pointer overflow-hidden"
										onClick={() => childParent(data)}
										onKeyUp={(e) => e.key === 'Enter' && childParent(data)}
										onKeyDown={(e) => e.key === 'Enter' && childParent(data)}
									>
										<ClientSideRoute
											key={post._id}
											route={`/${post?.collection?.slug}/${
												post?.slug?.current ?? ''
											}`}
										>
											<div className="group flex flex-row flex-nowrap justify-start items-center gap-2 hover:bg-mayaz/10 px-4 transition-all duration-500 ease-in-out">
												<div className="overflow-hidden h-[120px] w-auto">
													<Image
														src={urlFor(post.thumbnail).url()}
														alt={post.thumbnail.alt || 'Product Image'}
														width={406}
														height={578}
														className="object-contain h-full w-full transition-all duration-500 ease-in-out"
													/>
												</div>
												<div className="relative text-foreground text-left p-2 w-[250px]">
													<div>
														<h2 className="text-sm text-left text-mayazDarker group-hover:text-black w-full pb-1">
															{post.displayName || post.productName}
														</h2>
													</div>
													<div>
														<p className="text-xs text-mayazDark group-hover:text-black transition-all duration-500 ease-in-out">
															{formatter.format(post.productPricing.price)}
														</p>
													</div>
												</div>
											</div>
										</ClientSideRoute>
									</button>
								))}
						</div>
					</div>
				</li>
			</ul>
		</>
	);
}
