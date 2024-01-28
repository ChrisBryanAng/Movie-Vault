import data from "../utils/data.json";
import BookmarkedMoviesList from "./BookmarkedMoviesList";

const BookmarkedMovies = () => {
	return (
		<div className="flex flex-col space-y-6">
			<p className="text-white text-2xl font-OutfitLight font-light">
				Bookmarked Movies
			</p>
			<BookmarkedMoviesList movies={data} />
		</div>
	);
};

export default BookmarkedMovies;
