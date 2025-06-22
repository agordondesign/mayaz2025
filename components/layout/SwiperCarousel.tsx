'use client';
import type React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import '../styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

type Props = {
	gallery: {
		thumbnail: {
			alt: string;
			_type: string;
			asset: {
				_type: string;
				_id: string;
			};
		};
		productImage: {
			_key: string;
			_id: string;
			alt: string;
			_type: string;
			asset: {
				_type: string;
				_id: string;
			};
		}[];
	};
};

export default function SwiperComponent({ gallery }: Props) {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				navigation={true}
				//navigation={{
				//	nextEl: '.swiper-button-next',
				//	prevEl: '.swiper-button-prev',
				//}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="relative w-full h-auto aspect-w-1 aspect-h-1 image-box pointer-events-none">
						<Image
							src={urlFor(gallery.thumbnail).url()}
							alt={gallery.thumbnail.alt}
							width={478}
							height={647}
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				{gallery.productImage?.map((image) => (
					<SwiperSlide key={image._key}>
						<div className="relative w-full h-auto aspect-w-1 aspect-h-1 image-box pointer-events-none">
							<Image
								src={urlFor(image).url()}
								alt={image.alt}
								width={478}
								height={647}
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
