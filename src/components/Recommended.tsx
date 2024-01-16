import Recommends from "../utils/data.json";

const Recommended = () => {
	return (
		<div className="flex flex-col space-y-4 text-white font-OutfitLight font-light text-2xl">
			<p>Recommended for you</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 w-full">
				{Recommends?.map((rec, idx: number) => (
					<div className="flex flex-col w-[300px] h-[280px]">
						<img
							className="h-full w-full rounded-lg object-cover"
							alt={`trend ${idx}`}
							src={rec.thumbnail.regular?.large}
						/>
						<div className="flex space-x-2 mt-2 h-8 text-gray-400 text-sm">
							<p>{rec.year}</p>
							<p>•</p>
							<p>{rec.category}</p>
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
