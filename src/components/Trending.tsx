import Trends from "../utils/data.json";

const Trending = () => {
	return (
		<div className="flex flex-col w-full space-y-4 text-2xl font-OutfitLight font-light text-white">
			<p>Trending</p>
			<div className="flex w-max space-x-4">
				{Trends?.map((trend, idx: number) => (
					<div className="inline h-[200px] w-[410px]">
						<img
							className="h-full w-full rounded-lg"
							alt={`trend ${idx}`}
							src={trend.thumbnail.trending?.small}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Trending;
