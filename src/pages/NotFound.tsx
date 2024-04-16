import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="absolute inset-0 z-50 bg-MV-BLack h-full w-full flex flex-col justify-center items-center font-OutfitLight font-bold text-white">
			<p className="text-lg">404 Page Not Found</p>
			<p>
				Back to{" "}
				<Link to="/" className="underline text-MV-Red">
					Home
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
