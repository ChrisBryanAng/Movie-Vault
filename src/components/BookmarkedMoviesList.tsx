import MovieCard from "./MovieCard";

const BookmarkedMoviesList = ({ movies }: { movies: any }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-10 h-full w-full">
			{movies
				?.filter(
					(mov: any) => mov.isBookmarked === true && mov.category === "Movie"
				)
				.map((movie: IShow) => (
					<MovieCard movie={movie} key={movie.title} />
				))}
		</div>
	);
};

export default BookmarkedMoviesList;
