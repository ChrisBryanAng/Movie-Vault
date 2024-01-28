import { useState } from "react";

import PlayButton from "./PlayButton";

interface IMovieCard {
	movie: IShow;
}

const MovieCard = ({ movie }: IMovieCard) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movieTitle, setMovieTitle] = useState("");

	const showPlay = (title: string) => {
		setIsHovered(true);
		setMovieTitle(title);
		// console.log("entered" + title);
	};

	const hidePlay = () => {
		setIsHovered(false);
		setMovieTitle("");
		// console.log("exit");
	};

	return (
		<div
			key={movie.title}
			className="relative flex flex-col m-auto w-full h-[200px] md:h-[250px] lg:h-[260px]"
		>
			<div className="absolute z-10 cursor-pointer flex justify-center items-center right-2 top-2 bg-black/40 rounded-full h-8 w-8">
				<img
					alt="bookmark"
					src={
						movie.isBookmarked
							? "assets/icon-bookmark-full.svg"
							: "assets/icon-bookmark-empty.svg"
					}
				/>
			</div>
			<div
				onMouseEnter={() => showPlay(movie.title)}
				onMouseLeave={() => hidePlay()}
				className="relative h-[450px]"
			>
				{isHovered && movieTitle === movie.title ? <PlayButton /> : ""}
				<img
					className="block h-full w-full rounded-lg object-cover"
					alt={movie.title}
					src={movie.thumbnail.regular?.large}
				/>
			</div>
			<div className="flex items-center space-x-2 mt-2 h-12 md:h-10 text-gray-400 text-xs">
				<p>{movie.year}</p>
				<p>•</p>
				<div className="flex justify-center items-center gap-2">
					<img
						alt={movie.category}
						src={
							movie.category === "Movie"
								? "./assets/icon-category-movie.svg"
								: "./assets/icon-category-tv.svg"
						}
						className="h-4 w-4"
					/>
					<p>{movie.category}</p>
				</div>
				<p>•</p>
				<p>{movie.rating}</p>
			</div>
			<p className="h-[90px] md:h-16 text-lg font-light text-white font-OutfitLight">
				{movie.title}
			</p>
		</div>
	);
};

export default MovieCard;
