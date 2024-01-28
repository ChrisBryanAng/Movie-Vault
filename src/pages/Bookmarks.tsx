import { BookmarkedMovies, BookmarkedTvshows } from "../components";

const Bookmarks = () => {
	return (
		<div className="flex flex-col space-y-8 p-4 lg:pr-6 md:pt-0 md:p-4 lg:p-0">
			<BookmarkedMovies />
			<BookmarkedTvshows />
		</div>
	);
};

export default Bookmarks;
