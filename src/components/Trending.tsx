import Trends from "../utils/data.json";

const Trending = () => {
	return (
		<div className="flex flex-col w-full space-y-4 font-OutfitLight font-light text-white">
			<p className="text-2xl md:text-3xl">Trending</p>
			<div className="flex w-max space-x-4 md:space-x-10">
				{Trends?.map((trend, idx: number) => (
					<div className="relative h-[150px] w-[280px] md:h-[220px] md:w-[460px]">
						<div className="absolute flex flex-col p-2 justify-between h-full w-full">
							<div className="flex justify-center items-center self-end bg-black/40 rounded-full h-8 w-8">
								<img alt="bookmark" src="assets/icon-bookmark-empty.svg" />
							</div>
							<div className="pl-2 pb-1">
								<div className="flex items-center space-x-2 mb-1 text-gray-300 text-sm">
									<p>{trend.year}</p>
									<p>•</p>
									<div className="flex justify-center items-center gap-2">
										<img
											alt={trend.category}
											src={
												trend.category === "Movie"
													? "./assets/icon-category-movie.svg"
													: "./assets/icon-category-tv.svg"
											}
											className="h-4 w-4"
										/>
										<p>{trend.category}</p>
									</div>
									<p>•</p>
									<p>{trend.rating}</p>
								</div>
								<p className="text-lg md:text-2xl font-normal">{trend.title}</p>
							</div>
						</div>
						<img
							className="block h-full w-full rounded-lg"
							alt={`trend ${idx}`}
							src={trend.thumbnail.trending?.large}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Trending;
