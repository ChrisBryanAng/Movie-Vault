import Trends from "../utils/data.json";
import TrendingCarousel from "./TrendingCarousel";

const Trending = () => {
	return (
		<div className="flex flex-col w-full space-y-4 font-OutfitLight font-light text-white">
			<p className="text-2xl md:text-3xl overflow-hidden">Trending</p>
			<div className="">
				<TrendingCarousel trends={Trends} />
			</div>
		</div>
	);
};

export default Trending;
