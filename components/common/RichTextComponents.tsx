import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents = {
	types: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		image: ({ value }: any) => {
			return (
				<div className="document-image relative w-full h-auto my-10">
					<Image
						src={urlFor(value).url()}
						alt={value.alt}
						width={1200}
						height={1200}
						className="rounded-3xl"
					/>
				</div>
			);
		},
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		columns: ({ children }: any) => {
			return (
				<div className="bg-pink-100 p-4 grid grid-cols-2 gap-4">
					<div className="bg-sky-100">{children}</div>
				</div>
			);
		},
	},
	list: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		bullet: ({ children }: any) => (
			<ul className="flex flex-col list-disc pl-4 gap-2 pt-4">{children}</ul>
		),
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		number: ({ children }: any) => (
			<ol className="mt-lg list-decimal">{children}</ol>
		),
	},
	block: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		h1: ({ children }: any) => (
			<h1 className="text-3xl py-4 font-medium;">{children}</h1>
		),
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		h2: ({ children }: any) => (
			<h2 className="text-2xl py-4 font-medium;">{children}</h2>
		),
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		h3: ({ children }: any) => (
			<h3 className="text-2xl font-normal text-primary-blue">{children}</h3>
		),
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		h4: ({ children }: any) => (
			<h4 className="text-lg py-4 font-medium">{children}</h4>
		),
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		p: ({ children }: any) => (
			<p className="text-base font-normal pb-2 leading-relaxed">{children}</p>
		),
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		blockquote: ({ children }: any) => (
			<blockquote className="text-[1.35rem] pb-4">{children}</blockquote>
		),
	},
	marks: {
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		link: ({ children, value }: any) => {
			const { blank } = value;
			const rel = !value.href.startsWith('/')
				? 'noopener noreferrer'
				: undefined;
			return blank ? (
				<Link
					href={value.href}
					rel={rel}
					target="_blank"
					className="text-secondary underline hover:text-primary"
				>
					{children}
				</Link>
			) : (
				<Link
					href={value.href}
					rel={rel}
					className="text-secondary underline hover:text-primary"
				>
					{children}
				</Link>
			);
		},
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		internalLink: ({ children, value }: any) => {
			const { slug = {} } = value;
			const href = `/${slug.current}`;
			return (
				<Link
					href={href}
					className="block max-w-fit bg-gradient-to-r from-secondary to-primary rounded-full text-white px-7 py-2 mt-2 mx-auto hover:from-primary hover:to-tertiary"
				>
					{children}
				</Link>
			);
		},
		// eslint-disable-next-line  @typescript-eslint/no-explicit-any
		span: ({ children }: any) => <span>{children}</span>,
	},
};
