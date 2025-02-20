import React from 'react';

type PageTitleProps = {
	title: string;
	customTitle?: {
		alternateTitle: string;
		subtitle: string;
	};
};

export default function PageTitle({ title, customTitle }: PageTitleProps) {
	const altTitle = customTitle?.alternateTitle;
	const subtitle = customTitle?.subtitle;
	return (
		<header className="w-full">
			<h1 className="text-center text-2xl lg:text-2xl uppercase tracking-[0.75em] py-16">
				<span className="inline-block ml-[0.75em] mb-3 text-black">
					{altTitle ? altTitle : title}
				</span>
				{subtitle && (
					<span className="block text-base lg:text-xl tracking-[0.5em] ml-[0.5em] pb-3 text-mayaz font-light">
						{subtitle}
					</span>
				)}
			</h1>
		</header>
	);
}
