import { useState } from "react";

import PlayButton from "./PlayButton";

useState;

interface IRecommendedList {
	recs: any;
}

const RecommendedList = ({ recs }: IRecommendedList) => {
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
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-10 h-full w-full">
			{recs?.map((rec: IShow, idx: number) => (
				<div
					key={rec.title}
					className="relative flex flex-col m-auto w-full h-[200px] md:h-[240px]"
				>
					<div className="absolute z-10 cursor-pointer flex justify-center items-center right-2 top-2 bg-black/40 rounded-full h-8 w-8">
						<img alt="bookmark" src="assets/icon-bookmark-empty.svg" />
					</div>
					<div
						onMouseEnter={() => showPlay(rec.title)}
						onMouseLeave={() => hidePlay()}
						className="relative h-[350px]"
					>
						{isHovered && movieTitle === rec.title ? <PlayButton /> : ""}
						<img
							className="block h-full w-full rounded-lg object-cover"
							alt={`trend ${idx}`}
							src={rec.thumbnail.regular?.large}
						/>
					</div>
					<div className="flex items-center space-x-2 mt-2 h-10 text-gray-400 text-xs">
						<p>{rec.year}</p>
						<p>•</p>
						<div className="flex justify-center items-center gap-2">
							<img
								alt={rec.category}
								src={
									rec.category === "Movie"
										? "./assets/icon-category-movie.svg"
										: "./assets/icon-category-tv.svg"
								}
								className="h-4 w-4"
							/>
							<p>{rec.category}</p>
						</div>
						<p>•</p>
						<p>{rec.rating}</p>
					</div>
					<p className="h-16 text-lg font-light">{rec.title}</p>
				</div>
			))}
		</div>
	);
};

export default RecommendedList;
