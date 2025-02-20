//import ShowroomFeature from '@/components/layout/ShowroomFeature';
import React from 'react';

export default async function page() {
	return (
		<div className="flex flex-col gap-16 w-full max-w-[95rem] px-2 mx-auto">
			{/*<ShowroomFeature />*/}
			<header>
				<h1 className="text-center text-2xl lg:text-2xl uppercase tracking-[0.75em]">
					<span className="block text-base lg:text-xl tracking-[0.5em] pb-3 text-mayaz font-light">
						new
					</span>
					<span className="inline-block ml-[0.75em] text-black">Features</span>
				</h1>
			</header>
			<section>
				<h1>Product List</h1>
			</section>
			<section className="grid grid-cols-3 lg:grid-cols-3 gap-2">
				<div className="image-box h-[250px] p-6">column 1</div>
				<div className="image-box h-[250px] p-6">column 2</div>
				<div className="image-box h-[250px] p-6">column 3</div>
			</section>
			<header>
				<h1 className="text-center text-2xl lg:text-2xl uppercase tracking-[0.75em]">
					<span className="block text-base lg:text-xl tracking-[0.5em] pb-3 text-mayaz font-light">
						new
					</span>
					<span className="inline-block ml-[0.75em] text-black">Features</span>
				</h1>
			</header>
			<section>
				<h1>Product List</h1>
			</section>
			<header>
				<h1 className="text-center text-2xl lg:text-2xl uppercase tracking-[0.75em]">
					<span className="block text-base lg:text-xl tracking-[0.5em] pb-3 text-mayaz font-light">
						new
					</span>
					<span className="inline-block ml-[0.75em] text-black">Features</span>
				</h1>
			</header>
			<section>
				<h1>Product List</h1>
			</section>
		</div>
	);
}
