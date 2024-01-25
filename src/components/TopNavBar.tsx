const TopNavBar = () => {
	return (
		<div className="sticky flex lg:hidden justify-between items-center px-4 bg-MV-Semi-Black w-full md:w-[96%] h-[80px] mb-5 md:ml-4 md:mt-5 md:rounded-lg">
			<div className="flex justify-center h-fit w-[30px] items-center">
				<img alt="logo" src="./assets/logo.svg" />
			</div>
			<div className="flex justify-center space-x-8 h-fit w-max items-center">
				<img alt="home" src="./assets/icon-nav-home.svg" />
				<img alt="movies" src="./assets/icon-nav-movies.svg" />
				<img alt="tv-series" src="./assets/icon-nav-tv-series.svg" />
				<img alt="bookmark" src="./assets/icon-nav-bookmark.svg" />
			</div>
			<div className="flex justify-end h-12 w-12">
				<img alt="profile-pic" src="./assets/image-avatar.png" />
			</div>
		</div>
	);
};

export default TopNavBar;
