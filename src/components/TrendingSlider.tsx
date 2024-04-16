import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TrendingSlider = ({ trends }: { trends: any }) => {
	const f = trends?.filter((isTrending: any) => isTrending.isTrending === true);
	console.log(f);
	return (
		<div className="w-max bg-blue-200">
			<Swiper
				slidesPerView={"auto"}
				// centeredSlides={true}
				freeMode={true}
				spaceBetween={40}
				grabCursor
				className="mySwiper"
			>
				{trends
					?.filter((isTrending: any) => isTrending.isTrending === true)
					.map((trend: IShow, idx: number) => (
						<SwiperSlide key={trend.title} className="swiper-slide">
							<img
								src={trend?.thumbnail?.trending?.large}
								className="block h-full w-full object-cover rounded-lg"
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default TrendingSlider;
