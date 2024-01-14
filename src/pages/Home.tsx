import { Trending, Recommended } from "../components";

const Home = () => {
	return (
		<div className="flex flex-col gap-8 h-max w-[89vw]">
			<Trending />
			<Recommended />
		</div>
	);
};

export default Home;
