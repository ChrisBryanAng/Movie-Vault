import { Trending, Recommended } from "../components";

const Home = () => {
	return (
		<div className="flex flex-col gap-8 lg:gap-10 h-max w-full ml-4 lg:ml-0">
			<Trending />
			<Recommended />
		</div>
	);
};

export default Home;
