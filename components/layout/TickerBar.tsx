'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
//import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { usePathname } from 'next/navigation';

type Ticker = {
	_id: string;
	name: string;
};

type TickerBarProps = {
	ticker: Ticker[];
};

export default function TickerBar({ ticker }: TickerBarProps) {
	const isStudio = usePathname().includes('/studio');
	return (
		<div className="bg-black w-full max-h-[40px]">
			{!isStudio && (
				<Swiper
					slidesPerView={1}
					loop={true}
					autoplay={true}
					direction={'horizontal'}
					navigation={false}
					modules={[Navigation, Autoplay]}
					className="mySwiper w-full max-h-[40px] max-w-md bg-black"
					id="ticker"
				>
					{ticker.map((tick) => (
						<SwiperSlide key={tick._id}>
							<div className="py-3 text-white text-center text-xs">
								{tick.name}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
}
