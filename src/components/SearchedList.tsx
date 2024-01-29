import MovieCard from "./MovieCard";

const SearchedList = ({ movies, query }: { movies: any; query: string }) => {
	const searchedMovies = movies?.filter((mov: any) =>
		mov.title?.toLowerCase().includes(query.toLowerCase())
	);
	return (
		<>
			{searchedMovies.length === 0 ? (
				<div className="h-[500px] w-screen pr-6 flex justify-center items-center">
					<p className="text-xl text-white font-OutfitLight text-center">
						Found No Results for "{query}" keyword
					</p>
				</div>
			) : (
				<div className="flex flex-col space-y-6">
					<p className="font-OutfitLight text-2xl text-white font-light">
						Found {searchedMovies?.length} results for '{query}'
					</p>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-10 h-full w-full">
						{searchedMovies.map((movie: IShow) => (
							<MovieCard movie={movie} key={movie.title} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default SearchedList;
