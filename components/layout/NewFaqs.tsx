'use client';
import { useRef, useState } from 'react';

interface FaqItem {
	q: string;
	a: string;
}

interface FaqsCardProps {
	faqsList: FaqItem;
	idx: number;
}

const FaqsCard: React.FC<FaqsCardProps> = (props) => {
	const answerElRef = useRef<HTMLDivElement>(null);
	const [state, setState] = useState<boolean>(false);
	const [answerH, setAnswerH] = useState<string>('0px');
	const { faqsList, idx } = props;

	const handleOpenAnswer = () => {
		if (answerElRef.current?.childNodes[0]) {
			const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
				.offsetHeight;
			setState(!state);
			setAnswerH(`${answerElH + 20}px`);
		} else {
			setState(!state);
		}
	};

	return (
		<button
			type="button"
			className="space-y-3 mt-3 overflow-hidden border-b w-full text-left focus:outline-none"
			key={idx}
			onClick={handleOpenAnswer}
		>
			<h4 className="cursor-pointer pb-3 flex items-center justify-between text-lg text-black font-medium">
				{faqsList.q}
				{state ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-mayazNiche ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-label="Collapse answer"
					>
						<title>Collapse answer</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M20 12H4"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-mayazNiche ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<title>Expand answer</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 4v16m8-8H4"
						/>
					</svg>
				)}
			</h4>
			<div
				ref={answerElRef}
				className="duration-300"
				style={state ? { height: answerH } : { height: '0px' }}
			>
				<div>
					<p className="text-gray-500">{faqsList.a}</p>
				</div>
			</div>
		</button>
	);
};

const NewFaqs = () => {
	const faqsList = [
		{
			q: 'What are some random questions to ask?',
			a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
		},
		{
			q: 'Do you include common questions?',
			a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
		},
		{
			q: 'Can I use this for 21 questions?',
			a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
		},
		{
			q: 'Are these questions for girls or for boys?',
			a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).',
		},
		{
			q: 'What do you wish you had more talent doing?',
			a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
		},
	];

	return (
		<section className="leading-relaxed max-w-screen-2xl mx-auto px-4 md:px-8">
			<header className="space-y-4 text-center">
				<h3 className="text-lg font-bold text-mayazNiche uppercase">FAQs</h3>

				<h1 className="text-3xl font-bold uppercase">
					Frequently Asked Questions
				</h1>
				<p className="text-base">
					Answered all frequently asked questions, Still confused? feel free to
					contact us.
				</p>
			</header>
			<div className="mt-12 max-w-4xl mx-auto">
				{faqsList.map((item, idx) => (
					<FaqsCard key={item.q} idx={idx} faqsList={item} />
				))}
			</div>
		</section>
	);
};

export default NewFaqs;
