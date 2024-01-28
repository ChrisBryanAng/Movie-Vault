const Search = () => {
	return (
		<div className="flex items-center h-[50px] md:w-[96%] mt-6 lg:mt-8 mb-4 mx-4 lg:mx-0 space-x-4">
			<img alt="search" src="./assets/icon-search.svg" className="h-6 w-6" />
			<input
				placeholder="Search for Movies or Tv Series"
				className="placeholder-gray-400 focus:border-b-[1px] focus:border-b-MV-Blue py-2 w-full bg-transparent outline-none text-white caret-MV-Red"
			/>
		</div>
	);
};

export default Search;
