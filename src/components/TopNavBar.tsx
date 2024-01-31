import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import { HomeSvg, MoviesSvg, TvshowsSvg, BookmarkSvg } from "../components";
import ProfileDropdown from "./ProfileDropdown";

const TopNavBar = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

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

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleDivBlur = (event: any) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<div className="sticky top-0 z-50 overflow-visible flex lg:hidden justify-between items-center px-4 bg-MV-Semi-Black w-full md:w-[96%] h-[80px] mb-5 md:ml-4 md:mt-5 md:rounded-lg">
			<div className="flex justify-center h-fit w-[30px] items-center">
				<img alt="logo" src={Logo} />
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
			<div
				tabIndex={0}
				onBlur={handleDivBlur}
				onClick={handleIsOpen}
				className="flex cursor-pointer justify-end h-12 w-12 border-[1px] border-white rounded-full"
			>
				<img alt="profile-pic" src={Avatar} />
				{isOpen && <ProfileDropdown />}
			</div>
		</div>
	);
};

export default TopNavBar;
