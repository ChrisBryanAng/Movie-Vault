import { Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { SideNavBar, TopNavBar, Search } from "./components";

function App() {
	return (
		<div className="flex bg-MV-BLack h-full w-full">
			<SideNavBar />
			<div className="flec flex-col w-full">
				<TopNavBar />
				<Search />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
