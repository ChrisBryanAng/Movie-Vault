import { useParams } from "react-router";

import data from "../utils/data.json";
import { SearchedList } from "../components";

const Searched = ({ searched }: { searched: string }) => {
	const { search } = useParams();

	return (
		<div className="flex flex-col space-y-6 p-4 lg:pr-6 md:pt-0 md:p-4 lg:p-0">
			<SearchedList movies={data} query={search} searched={searched} />
		</div>
	);
};

export default Searched;
