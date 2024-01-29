import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Movies, Tvshows, Bookmarks, Searched } from "./pages";
import { SideNavBar, TopNavBar, Search } from "./components";

function App() {
	const [searched, setSearched] = useState("");

	return (
		<div className="flex bg-MV-BLack h-full w-full">
			<SideNavBar />
			<div className="flec flex-col h-screen w-full">
				<TopNavBar />
				<Search searched={searched} setSearched={setSearched} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Movies" element={<Movies />} />
					<Route path="/Tvshows" element={<Tvshows />} />
					<Route path="/Bookmarks" element={<Bookmarks />} />
					<Route
						path="/SearchResults/:search"
						element={<Searched searched={searched} />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
