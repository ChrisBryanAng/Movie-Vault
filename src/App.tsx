import { Route, Routes } from "react-router-dom";

import { Home, Movies, Tvshows, Bookmarks } from "./pages";
import { SideNavBar, TopNavBar, Search } from "./components";

function App() {
	return (
		<div className="flex bg-MV-BLack h-full w-full">
			<SideNavBar />
			<div className="flec flex-col h-screen w-full">
				<TopNavBar />
				<Search />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Movies" element={<Movies />} />
					<Route path="/Tvshows" element={<Tvshows />} />
					<Route path="/Bookmarks" element={<Bookmarks />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
