import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/shadcn/accordion';
import type { TypedObject } from '@portabletext/types';
import { RichTextComponents } from '../common/RichTextComponents';
import { PortableText } from 'next-sanity';

type AccordionComponentProps = {
	description: TypedObject | TypedObject[];
	details: TypedObject | TypedObject[];
};

export function AccordionComponent({
	description,
	details,
}: AccordionComponentProps) {
	return (
		<Accordion
			type="single"
			collapsible
			defaultValue="item-1"
			className="w-full"
		>
			{Array.isArray(description) && description.length !== 0 && (
				<AccordionItem value="item-1">
					<AccordionTrigger>Description</AccordionTrigger>
					<AccordionContent>
						<div className="marker:text-black prose prose-sm prose-strong:text-mayazDark text-mayazDarker prose-strong:font-normal leading-snug prose:my-0 prose-ul:py-0 prose-ul:text-black prose-li:my-0 prose-li:leading-snug prose-li:text-mayazDark prose-li:list-[square]">
							<PortableText
								value={description}
								components={RichTextComponents}
							/>
						</div>
					</AccordionContent>
				</AccordionItem>
			)}
			{Array.isArray(details) && details.length !== 0 && (
				<AccordionItem value="item-2">
					<AccordionTrigger>Details</AccordionTrigger>
					<AccordionContent>
						<div className="marker:text-black prose prose-sm prose-black prose-strong:font-normal prose-strong:text-black prose-ul:py-0 prose-ul:text-black prose-li:my-0 prose-li:leading-snug prose-li:text-mayazDark prose-li:list-[square]">
							<PortableText value={details} components={RichTextComponents} />
						</div>
					</AccordionContent>
				</AccordionItem>
			)}
			{/*
			TODO: Add reviews
			<AccordionItem value="item-3">
				<AccordionTrigger>Reviews</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>*/}
		</Accordion>
	);
}
