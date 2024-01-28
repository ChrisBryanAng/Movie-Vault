import MovieCard from "./MovieCard";

interface IRecommendedList {
	recs: any;
}

const RecommendedList = ({ recs }: IRecommendedList) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-10 h-full w-full">
			{recs?.map((rec: IShow) => (
				<MovieCard movie={rec} key={rec.title} />
			))}
		</div>
	);
};

export default RecommendedList;
