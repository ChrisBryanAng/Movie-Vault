const Search = () => {
	return (
		<div className="flex items-center h-fit w-full mt-8 lg:mt-12 mb-6 mx-8 lg:mx-0 space-x-4">
			<img alt="search" src="./assets/icon-search.svg" className="h-6 w-6" />
			<input
				placeholder="Search for Movies or Tv Series"
				className="placeholder-slate-600 w-full bg-transparent outline-none text-white flex items-center"
			/>
		</div>
	);
};

export default Search;
