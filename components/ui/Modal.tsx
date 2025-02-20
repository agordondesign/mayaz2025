'use client';
import { AnimatePresence, motion } from 'framer-motion';
//import { FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import ModalContent from '../layout/ModalContent';
import { usePathname } from 'next/navigation';

type ModalProps = {
	content: {
		header: string;
		modalLayout: 'textOnly' | 'textImage' | 'imageBackground';
	};
};

const Modal = ({ content }: ModalProps) => {
	const isStudio = usePathname().includes('/studio');
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{!isStudio && (
				<div className="px-4 py-64 bg-slate-900 grid place-content-center">
					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
					>
						Open Modal
					</button>
					<SpringModal
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						content={content}
					/>
				</div>
			)}
		</>
	);
};

interface SpringModalProps {
	content: {
		header: string;
		modalLayout: 'textOnly' | 'textImage' | 'imageBackground';
	};
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const SpringModal = ({ isOpen, setIsOpen, content }: SpringModalProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<ModalContent setIsOpen={setIsOpen} content={content} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
