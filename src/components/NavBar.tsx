const NavBar = () => {
	return (
		<div className="flex flex-col justify-center items-center p-4 space-y-16 bg-MV-Semi-Black h-[98%] w-[100px] rounded-lg">
			<div className="flex justify-center h-fit w-[60%] items-center">
				<img alt="logo" src="./assets/logo.svg" />
			</div>
			<div className="flex flex-col justify-center space-y-8 h-fit w-[50%] items-center">
				<img alt="home" src="./assets/icon-nav-home.svg" />
				<img alt="movies" src="./assets/icon-nav-movies.svg" />
				<img alt="tv-series" src="./assets/icon-nav-tv-series.svg" />
				<img alt="bookmark" src="./assets/icon-nav-bookmark.svg" />
			</div>
			<div className="flex items-end">
				<img alt="profile-pic" src="./assets/image-avatar.png" />
			</div>
		</div>
	);
};

export default NavBar;
