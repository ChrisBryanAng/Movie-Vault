import { TvshowsList } from "../components";
import data from "../utils/data.json";

const Tvshows = () => {
	return (
		<div className="flex flex-col space-y-6 p-4 lg:pr-6 md:pt-0 md:p-4 lg:p-0">
			<p className="text-2xl text-white font-OutfitLight font-light">
				Tv Series
			</p>
			<TvshowsList movies={data} />
		</div>
	);
};

export default Tvshows;
