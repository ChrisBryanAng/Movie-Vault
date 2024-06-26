import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "/assets/logo.svg";
import Avatar from "/assets/image-avatar.png";
import { HomeSvg, MoviesSvg, TvshowsSvg, BookmarkSvg } from "../components";
import ProfileDropdown from "./ProfileDropdown";

const SideNavBar = () => {
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
		<div className="sticky z-50 top-4 overflow-visible hidden lg:flex flex-col justify-between items-center px-4 py-6 bg-MV-Semi-Black h-[690px] w-[100px] mx-8 my-6 rounded-lg">
			<div className="flex flex-col justify-center items-center space-y-16">
				<div className="flex justify-center h-fit w-[30px] items-center">
					<img alt="logo" src={Logo} />
				</div>
				<div className="flex flex-col justify-center space-y-8 h-fit w-max items-center">
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
			</div>
			<div
				tabIndex={0}
				onBlur={handleDivBlur}
				onClick={handleIsOpen}
				className="flex justify-end h-12 w-12 border-[1px] border-white rounded-full"
			>
				<img alt="profile-pic" src={Avatar} className="block h-full w-full" />
				{isOpen && <ProfileDropdown />}
			</div>
		</div>
	);
};

export default SideNavBar;
