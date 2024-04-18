import { useNavigate } from "react-router-dom";

import SearchIcon from "/assets/icon-search.svg";

const Search = ({
	searched,
	setSearched,
}: {
	searched: string;
	setSearched: (value: string) => void;
}) => {
	const navigate = useNavigate();

	return (
		<div className="flex items-center h-[50px] md:w-[96%] mt-6 lg:mt-8 md:mb-4 mx-4 lg:mx-0 space-x-4">
			<img alt="search" src={SearchIcon} className="h-6 w-6" />
			<input
				id="search-term"
				value={searched}
				onChange={(e) => {
					setSearched(e.target.value);
				}}
				onKeyDown={(e) => {
					if (searched !== "" && e.key === "Enter") {
						e.preventDefault();
						navigate({
							pathname: `/SearchResults/${searched}`,
						});
					}
				}}
				placeholder="Search for Movies or Tv Series"
				className="placeholder-gray-400 focus:border-b-[1px] focus:border-b-MV-Blue py-2 w-full bg-transparent outline-none text-white caret-MV-Red"
			/>
		</div>
	);
};

export default Search;
