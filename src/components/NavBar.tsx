const NavBar = () => {
	return (
		<div className="sticky flex flex-col justify-between items-center px-4 py-6 bg-MV-Semi-Black h-[690px] w-[100px] mx-8 my-6 rounded-lg">
			<div className="flex flex-col justify-center items-center space-y-16">
				<div className="flex justify-center h-fit w-[30px] items-center">
					<img alt="logo" src="./assets/logo.svg" />
				</div>
				<div className="flex flex-col justify-center space-y-8 h-fit w-max items-center">
					<img alt="home" src="./assets/icon-nav-home.svg" />
					<img alt="movies" src="./assets/icon-nav-movies.svg" />
					<img alt="tv-series" src="./assets/icon-nav-tv-series.svg" />
					<img alt="bookmark" src="./assets/icon-nav-bookmark.svg" />
				</div>
			</div>
			<div className="flex justify-end">
				<img alt="profile-pic" src="./assets/image-avatar.png" />
			</div>
		</div>
	);
};

export default NavBar;
