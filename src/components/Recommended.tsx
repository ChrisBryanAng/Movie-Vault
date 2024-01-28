import Recommends from "../utils/data.json";
import RecommendedList from "./RecommendedList";

const Recommended = () => {
	return (
		<div className="flex flex-col space-y-8 text-white font-OutfitLight font-light pr-8">
			<p className="text-2xl md:text-3xl overflow-hidden">
				Recommended for you
			</p>
			<RecommendedList recs={Recommends} />
		</div>
	);
};

export default Recommended;
