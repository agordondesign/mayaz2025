import { motion } from 'framer-motion';
import React, { useState } from 'react';
import NewsletterPromo from './NewsletterPromo';

type ModalTextOnlyProps = {
	setIsOpen: (isOpen: boolean) => void;
	content: {
		header: string;
	};
};

export default function ModalTextOnly() {
	const [submitted, setSubmitted] = useState(false);
	const [showModal, setShowModal] = useState(true); //set to false to disable modal

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const childtoParent = (childData: any) => {
		setShowModal(childData);
		//lockScrollParent(showModal);
	};
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const submittedEmail = (emailData: any) => {
		console.log('emailData', emailData);
		setSubmitted(emailData);
	};

	return (
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { duration: 0.5, ease: 'easeInOut' },
			}}
			exit={{ y: -50, opacity: 0 }}
			className="md:justify-center justify-start items-start md:items-center flex overflow-x-hidden overflow-y-hidden fixed h-full inset-0 z-[110] outline-none focus:outline-none transition-fix-alt md:px-4"
		>
			<div className="relative w-auto md:my-6 mx-auto max-w-3xl">
				{/*content*/}
				<NewsletterPromo
					childParent={childtoParent}
					submittedEmail={submittedEmail}
					data={undefined}
					submission={undefined}
					setIsOpen={showModal}
				/>
			</div>
			<span className="hidden">hide error {submitted}</span>
		</motion.div>
	);
}
