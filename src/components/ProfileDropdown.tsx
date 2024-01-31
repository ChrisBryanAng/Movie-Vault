import { Link } from "react-router-dom";

const ProfileDropdown = () => {
	return (
		<div className="absolute z-50 right-4 top-20 lg:top-auto lg:left-24 lg:bottom-0 flex flex-col space-y-4 bg-MV-Semi-Black text-white font-OutfitLight font-normal h-fit w-[150px] p-4 rounded-lg">
			<Link to="/Login">
				<button
					type="button"
					className="text-left w-full rounded-md p-1 px-2 hover:bg-MV-Red"
				>
					Log In
				</button>
			</Link>
			<Link to="/SignUp">
				<button
					type="button"
					className="text-left w-full rounded-md p-1 px-2 hover:bg-MV-Red"
				>
					Sign Up
				</button>
			</Link>
		</div>
	);
};

export default ProfileDropdown;
