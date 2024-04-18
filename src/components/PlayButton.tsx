import PlayIcon from "/assets/icon-play.svg";

const PlayButton = () => {
	return (
		<div className="flex absolute inset-0 h-full w-full justify-center items-center bg-black/50">
			<div className="flex z-10 space-x-4 cursor-pointer bg-white/30 rounded-full py-2 px-4">
				<img alt="play-button" src={PlayIcon} />
				<p className="text-lg text-white font-OutfitLight w-12 text-center">
					Play
				</p>
			</div>
		</div>
	);
};

export default PlayButton;
