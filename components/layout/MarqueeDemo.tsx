import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';
import { GoStarFill } from 'react-icons/go';

const reviews = [
	{
		name: 'Lamisha Chaney',
		username: '@jack',
		body: `I was scared at first to get them because I have been getting doobies for so long, but so far I'm loving this journey, Alhamdulillah.`,
		img: 'https://avatar.vercel.sh/jack',
	},
	{
		name: 'Tyshon Chandler',
		username: '@jill',
		body: `Sista Sakinah was very informative about the process of getting microlocs. I'm so excited to be on my way for my loc journey.`,
		img: 'https://avatar.vercel.sh/jill',
	},
	{
		name: 'Tisha',
		username: '@john',
		body: `This was the best retie and color ever! If you're looking for someone professional, reliable and knowledgeable look no further. Sakinah makes sure you're comfortable and definitely makes sure you have a great experience.`,
		img: 'https://avatar.vercel.sh/john',
	},
	{
		name: 'Tisha',
		username: '@john',
		body: 'I strongly recommend her to anyone looking for an experienced loctician that cares about your hair care and will provide outstanding results. Also be sure to ask about her cold pressed juice, fantastic!',
		img: 'https://avatar.vercel.sh/john',
	},
	{
		name: 'Tosha',
		username: '@jane',
		body: 'I had my consultation with Sakinah, she was very knowledgeable and professional. I most definitely will be continuing my micro loc journey with her ❤️',
		img: 'https://avatar.vercel.sh/jane',
	},
	{
		name: 'Tyshon Chandler',
		username: '@jenny',
		body: 'Very knowledgeable and fast. Love how my microlocs are looking. Very friendly sister. And offers snacks. Looking forward to my retie appointment.',
		img: 'https://avatar.vercel.sh/jenny',
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				'relative h-full w-96 cursor-pointer overflow-hidden rounded-xl border p-4',
				// light styles
				'border-black/[.1] hover:border-black/50 bg-mayazBody hover:bg-white',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image
					className="rounded-full"
					width="42"
					height="42"
					alt=""
					src={img}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="hidden text-xs font-medium dark:text-white/40">
						{username}
					</p>
					<div className="flex gap-1">
						<GoStarFill className="text-mayazNiche" />
						<GoStarFill className="text-mayazNiche" />
						<GoStarFill className="text-mayazNiche" />
						<GoStarFill className="text-mayazNiche" />
						<GoStarFill className="text-mayazNiche" />
					</div>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-mayazBody" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-mayazBody" />
		</div>
	);
}
