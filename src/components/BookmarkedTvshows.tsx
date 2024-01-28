import data from "../utils/data.json";
import BookmarkedTvshowsList from "./BookmarkedTvshowsList";

const BookmarkedTvshows = () => {
	return (
		<div className="flex flex-col space-y-6">
			<p className="text-white text-2xl font-OutfitLight font-light">
				Bookmarked TV Series
			</p>
			<BookmarkedTvshowsList movies={data} />
		</div>
	);
};

export default BookmarkedTvshows;
