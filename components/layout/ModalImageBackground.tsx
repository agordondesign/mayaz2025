import { motion } from 'framer-motion';
import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

type ModalImageBackgroundProps = {
	setIsOpen: (isOpen: boolean) => void;
	content: {
		header: string;
	};
};

export default function ModalImageBackground({
	setIsOpen,
	content,
}: ModalImageBackgroundProps) {
	return (
		<motion.div
			initial={{ scale: 0, rotate: '12.5deg' }}
			animate={{ scale: 1, rotate: '0deg' }}
			exit={{ scale: 0, rotate: '0deg' }}
			onClick={(e) => e.stopPropagation()}
			className="bg-gradient-to-br from-green-600 to-lime-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
		>
			<FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
			<div className="relative z-10">
				<div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-lime-600 grid place-items-center mx-auto">
					<FiAlertCircle />
				</div>
				<h3 className="text-3xl font-bold text-center mb-2">
					{content.header}
				</h3>
				<p className="text-center mb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam
					vitae, sapiente ducimus eveniet in velit.
				</p>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
					>
						Nah, go back
					</button>
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="bg-white hover:opacity-90 transition-opacity text-lime-600 font-semibold w-full py-2 rounded"
					>
						Understood!
					</button>
				</div>
			</div>
		</motion.div>
	);
}
