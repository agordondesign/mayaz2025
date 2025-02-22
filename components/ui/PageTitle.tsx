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
		<header className="flex flex-col justify-center items-center w-full">
			<h1 className="text-center text-xl md:text-xl lg:text-2xl uppercase tracking-[0.75em] py-16">
				<span className="inline-block ml-[0.75em] text-black">
					{altTitle ? altTitle : title}
				</span>
				{subtitle && (
					<span className="block text-lg md:text-lg lg:text-xl tracking-[0.5em] ml-[0.5em] text-mayaz font-light mt-3">
						{subtitle}
					</span>
				)}
			</h1>
		</header>
	);
}
