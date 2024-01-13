import { Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import { NavBar, Search } from "./components";

function App() {
	return (
		<div className="flex bg-MV-BLack h-full w-full pl-4 pt-4">
			<NavBar />
			<div className="flec flex-col">
				<Search />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
