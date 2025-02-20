//import { motion } from 'framer-motion';
import React from 'react';
//import { FiAlertCircle } from 'react-icons/fi';
import ModalTextOnly from './ModalTextOnly';
import ModalTextImage from './ModalTextImage';
import ModalImageBackground from './ModalImageBackground';

type ModalContentProps = {
	setIsOpen: (isOpen: boolean) => void;
	content: {
		header: string;
		modalLayout: 'textOnly' | 'textImage' | 'imageBackground';
	};
};

export default function ModalContent({
	setIsOpen,
	content,
}: ModalContentProps) {
	return (
		<>
			{content.modalLayout === 'textOnly' ? (
				<ModalTextOnly content={content} setIsOpen={setIsOpen} />
			) : content.modalLayout === 'textImage' ? (
				<ModalTextImage content={content} setIsOpen={setIsOpen} />
			) : (
				<ModalImageBackground content={content} setIsOpen={setIsOpen} />
			)}
		</>
	);
}
