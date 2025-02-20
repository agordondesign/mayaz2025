import { PortableText } from 'next-sanity';
import React from 'react';
import { RichTextComponents } from '../common/RichTextComponents';
import type { TypedObject } from '@portabletext/types';

type PageContentProps = {
	content: {
		content: TypedObject | TypedObject[];
	};
};

export default function PageContent({ content }: PageContentProps) {
	return (
		<div className="px-4 prose-headings:font-light prose-h2:text-xl prose-h3:text-lg prose-strong:font-normal w-full text-sm max-w-4xl mx-auto prose prose-a:text-mayazDark prose-a:no-underline prose-a:border-b prose-a:border-mayazDark/50 hover:prose-a:border-black prose-a:pb-[0.15rem]">
			<PortableText value={content?.content} components={RichTextComponents} />
		</div>
	);
}
