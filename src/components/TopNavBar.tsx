import { Link, useLocation } from "react-router-dom";

import { HomeSvg, MoviesSvg, TvshowsSvg, BookmarkSvg } from "../components";

const TopNavBar = () => {
	const location = useLocation();

	const routes = [
		{
			name: "Home",
			icon: <HomeSvg />,
			path: "/",
		},
		{
			name: "Movies",
			icon: <MoviesSvg />,
			path: "/Movies",
		},
		{
			name: "Tv Shows",
			icon: <TvshowsSvg />,
			path: "/Tvshows",
		},
		{
			name: "Bookmarks",
			icon: <BookmarkSvg />,
			path: "/Bookmarks",
		},
	];

	return (
		<div className="sticky flex lg:hidden justify-between items-center px-4 bg-MV-Semi-Black w-full md:w-[96%] h-[80px] mb-5 md:ml-4 md:mt-5 md:rounded-lg">
			<div className="flex justify-center h-fit w-[30px] items-center">
				<img alt="logo" src="./assets/logo.svg" />
			</div>
			<div className="flex justify-center space-x-8 h-fit w-max items-center">
				{routes.map((route) => (
					<Link
						key={route.name}
						to={route.path}
						className={`cursor-pointer hover:fill-MV-Red ${
							location.pathname === route.path
								? "fill-[#fff]"
								: "fill-[#5A698F]"
						}`}
					>
						{route?.icon}
					</Link>
				))}
			</div>
			<div className="flex justify-end h-12 w-12">
				<img alt="profile-pic" src="./assets/image-avatar.png" />
			</div>
		</div>
	);
};

export default TopNavBar;
