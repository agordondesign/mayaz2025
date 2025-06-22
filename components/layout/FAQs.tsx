import React from 'react';

export default function FAQs() {
	const faqsList = [
		{
			q: 'I want micro locs. Now what do I do?',
			a: 'loctician.  Your loctician will explain everything you need to know about what to expect from the consultation, but remember this IS NOT the actual consultation, as much more will be discussed during the actual consultation.',
		},
		{
			q: 'What is a loctician?',
			a: 'A loctician is someone knowledgeable about the loc process, as you may be new to this and have many questions.  This person should be trusting and trustworthy as they are your guide during your loc journey and are highly relied upon to help you keep up with the maintenance and care of your hair.',
		},
		{
			q: 'Luxurious Locs need TLC',
			a: 'If you have fine, low-density hair, you should re-tighten your micro locs every 4 weeks or less. And for others, 6-8 weeks, depending on your hair growth rate. Your loctician will let you know your retie schedule more than likely after your first re-tightening session, scheduled 6 weeks after your installation.',
		},
		{
			q: 'What are the benefits of micro locs?',
			a: 'One of the most significant benefits of micro locs is the maintenance schedule. After the initial investment in time and money, your salon visits are reduced to every 6-8 weeks for re-tightening. The ease of maintenance means micro-locs can seamlessly fit into a busy lifestyle, offering beauty without the burden.',
		},
		{
			q: 'What should I do before my micro loc installation?',
			a: 'Use a clarifying shampoo two (2) weeks before the appointment. Shampoo your hair the day before the appointment and ensure the hair is completely dry.',
		},
		{
			q: 'How long does it take to install micro locs?',
			a: 'Your journey begins with a Consultation to assess your hair, install test locs, and provide a personalized quote. Once ready, we complete your Loc Installation over two days, finishing with a Niche Love Your Locs Starter Kit and expert care instructions to help your new micro-locs thrive.',
		},
		{
			q: 'Do you install micro loc extensions?',
			a: 'No.',
		},
		{
			q: 'Do you install micro locs on men?',
			a: 'No.',
		},
		{
			q: 'Is there a difference between micro locs and small traditional dreadlocks?',
			a: 'Micro-locs are a smaller version of traditional locs, typically 6-9mm in diameter, with new growth maintained by interlocking. Traditional locs are thicker (10mm or more) and usually maintained by palm rolling, though interlocking is also an option.',
		},
		{
			q: 'How long do microlocs take to mature?',
			a: 'There is no specific timeline for the full maturation of your microlocs. On average, it can take approximately 6 months to 1 year, but it is possible for the process to extend up to 2-3 years. The length and texture of your hair are significant factors influencing the duration of your micro locs maturation.',
		},
		{
			q: 'Can I style micro locs?',
			a: 'Yes, you can style microlocs in a variety of ways. They can add texture and intricacy to many hairstyles you already wear.',
		},
		{
			q: 'Are micro locs permanent?',
			a: 'No, micro locs are not permanent. They can be removed at any time, though they are meant to be a long-term style.',
		},
	];

	return (
		<section className="leading-relaxed w-full mx-auto">
			<div className="space-y-3 text-center">
				<h1 className="text-3xl text-gray-800 font-semibold">
					Frequently Asked Questions
				</h1>
				<p className="text-gray-600 max-w-lg mx-auto text-lg">
					Answered all frequently asked questions, Still confused? feel free to
					contact us.
				</p>
			</div>
			<div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
				{faqsList.map((item) => (
					<div className="space-y-3 mt-5" key={item.q}>
						<h4 className="text-xl text-gray-700 font-medium">{item.q}</h4>
						<p className="text-gray-500">{item.a}</p>
					</div>
				))}
			</div>
		</section>
	);
}
