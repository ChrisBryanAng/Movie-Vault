import { Trending, Recommended } from "../components";

const Home = () => {
	return (
		<div className="flex flex-col gap-8 h-max w-full ml-4">
			<Trending />
			<Recommended />
		</div>
	);
};

export default Home;
