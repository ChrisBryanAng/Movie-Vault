import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import {
	Home,
	Movies,
	Tvshows,
	Bookmarks,
	Searched,
	Login,
	SignUp,
} from "./pages";
import { SideNavBar, TopNavBar, Search } from "./components";

function App() {
	const location = useLocation();
	const [searched, setSearched] = useState("");

	const ifPathname =
		location.pathname !== "/Login" && location.pathname !== "/SignUp";

	return (
		<div className="flex bg-MV-BLack h-full w-full">
			{ifPathname && <SideNavBar />}
			<div className="flec flex-col h-screen w-full">
				{ifPathname && <TopNavBar />}
				{ifPathname && <Search searched={searched} setSearched={setSearched} />}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Movies" element={<Movies />} />
					<Route path="/Tvshows" element={<Tvshows />} />
					<Route path="/Bookmarks" element={<Bookmarks />} />
					<Route
						path="/SearchResults/:search"
						element={<Searched searched={searched} />}
					/>
					<Route path="/Login" element={<Login />} />
					<Route path="/SignUp" element={<SignUp />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
