import React from 'react';

type FilterProps = {
	activeTag: string;
	handleTag: (tag: string) => void;
	filters: { _id: string; title: string }[];
};

export default function Filter({ filters }: FilterProps) {
	return (
		<div className="flex gap-4 w-full text-sm">
			<h1>Filter:</h1>
			{filters.map((filter: { _id: string; title: string }) => (
				<div key={filter._id}>{filter.title}</div>
			))}
		</div>
	);
}
