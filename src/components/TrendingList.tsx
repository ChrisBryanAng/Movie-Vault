import { useState } from "react";

import PlayButton from "./PlayButton";
import BookmarkFull from "../assets/icon-bookmark-full.svg";
import BookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import MovieIcon from "../assets/icon-category-movie.svg";
import TvIcon from "../assets/icon-category-tv.svg";

interface ITrendingList {
	trends: any;
}

const TrendingList = ({ trends }: ITrendingList) => {
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

	return (
		<div className="flex w-max space-x-4 md:space-x-10">
			{trends
				?.filter((isTrending: any) => isTrending.isTrending === true)
				.map((trend: IShow, idx: number) => (
					<div
						key={trend.title}
						onMouseEnter={() => showPlay(trend.title)}
						onMouseLeave={() => hidePlay()}
						className="relative h-[150px] w-[280px] md:h-[220px] md:w-[460px] lg:h-[250px] lg:w-[500px]"
					>
						{isHovered && movieTitle === trend.title ? <PlayButton /> : ""}

						<div className="absolute flex flex-col p-2 justify-between h-full w-full">
							<div className="flex justify-center items-center self-end cursor-pointer bg-black/40 rounded-full h-8 w-8">
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
								<p className="text-lg md:text-2xl font-normal">{trend.title}</p>
							</div>
						</div>
						<img
							className="block h-full w-full rounded-lg"
							alt={`trend ${idx}`}
							src={trend.thumbnail.trending?.large}
						/>
					</div>
				))}
		</div>
	);
};

export default TrendingList;
