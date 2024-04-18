import { useState } from "react";

import Carousel from "react-multi-carousel";
import PlayButton from "./PlayButton";
import BookmarkFull from "/assets/icon-bookmark-full.svg";
import BookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import MovieIcon from "/assets/icon-category-movie.svg";
import TvIcon from "/assets/icon-category-tv.svg";

import "react-multi-carousel/lib/styles.css";

const TrendingCarousel = ({ trends }: { trends: any }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movieTitle, setMovieTitle] = useState("");

	const showPlay = (title: string) => {
		setIsHovered(true);
		setMovieTitle(title);
	};

	const hidePlay = () => {
		setIsHovered(false);
		setMovieTitle("");
	};

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
			partialVisibilityGutter: 145,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			partialVisibilityGutter: 83,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			partialVisibilityGutter: 125,
		},
	};

	return (
		<div className="relative">
			<Carousel
				swipeable={true}
				draggable={true}
				minimumTouchDrag={80}
				partialVisible
				responsive={responsive}
				ssr={true}
				transitionDuration={300}
				slidesToSlide={1}
				containerClass="carousel-list"
				sliderClass="carousel-track"
				itemClass="carousel-item"
			>
				{trends
					?.filter((isTrending: any) => isTrending.isTrending === true)
					.map((trend: IShow) => (
						<div
							key={trend.title}
							onMouseEnter={() => showPlay(trend.title)}
							onMouseLeave={() => hidePlay()}
							className="relative"
						>
							{isHovered && movieTitle === trend.title ? <PlayButton /> : ""}

							<div className="absolute flex flex-col p-2 justify-between h-full w-full">
								<div className="relative right-4 lg:right-10 flex justify-center items-center self-end cursor-pointer bg-black/40 rounded-full h-8 w-8">
									<img
										alt="bookmark"
										src={trend?.isBookmarked ? BookmarkFull : BookmarkEmpty}
									/>
								</div>
								<div className="pl-2 pb-1">
									<div className="flex items-center space-x-2 mb-1 text-gray-300 text-sm">
										<p>{trend.year}</p>
										<p>•</p>
										<div className="flex justify-center items-center gap-2">
											<img
												alt={trend.category}
												src={trend.category === "Movie" ? MovieIcon : TvIcon}
												className="h-4 w-4"
											/>
											<p>{trend.category}</p>
										</div>
										<p>•</p>
										<p>{trend.rating}</p>
									</div>
									<p className="text-lg md:text-2xl font-normal">
										{trend.title}
									</p>
								</div>
							</div>

							<img
								src={trend?.thumbnail?.trending?.large}
								className="block h-full mr-4 object-cover w-[280px] md:w-[460px] lg:w-[500px] rounded-lg"
							/>
						</div>
					))}
			</Carousel>
		</div>
	);
};

export default TrendingCarousel;
