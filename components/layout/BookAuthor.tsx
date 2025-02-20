import React from 'react';

type BookAuthorProps = {
	product: {
		author?: { _id: string; name: string }[];
	};
};

export default function BookAuthor({ product }: BookAuthorProps) {
	return (
		<div className="text-sm gap-2 flex flex-col">
			<p>
				<span className="font-medium">
					{(product?.author?.length ?? 0) > 1 ? 'Authors:' : 'Author:'}
				</span>{' '}
				{(product?.author?.length ?? 0) > 1
					? product.author?.map((author: { _id: string; name: string }) => (
							<span key={author._id} className="block w-full">
								{author.name}
							</span>
					  ))
					: product.author?.[0]?.name}
			</p>
		</div>
	);
}
