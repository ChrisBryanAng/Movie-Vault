import Recommends from "../utils/data.json";

const Recommended = () => {
	return (
		<div className="flex flex-col space-y-8 text-white font-OutfitLight font-light text-2xl pr-8">
			<p>Recommended for you</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-y-16 h-full w-full">
				{Recommends?.map((rec, idx: number) => (
					<div
						key={rec.title}
						className="relative flex flex-col m-auto w-[190px] h-[200px]"
					>
						<div className="absolute flex justify-center items-center right-2 top-2 bg-black/40 rounded-full h-8 w-8">
							<img alt="bookmark" src="assets/icon-bookmark-empty.svg" />
						</div>
						<img
							className="h-full w-full rounded-lg object-cover"
							alt={`trend ${idx}`}
							src={rec.thumbnail.regular?.large}
						/>
						<div className="flex items-center space-x-2 mt-2 h-10 text-gray-400 text-sm">
							<p>{rec.year}</p>
							<p>•</p>
							<div className="flex justify-center items-center gap-2">
								<img
									alt={rec.category}
									src={
										rec.category === "Movie"
											? "./assets/icon-category-movie.svg"
											: "./assets/icon-category-tv.svg"
									}
									className="h-4 w-4"
								/>
								<p>{rec.category}</p>
							</div>
							<p>•</p>
							<p>{rec.rating}</p>
						</div>
						<p className="h-16 text-lg">{rec.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recommended;
