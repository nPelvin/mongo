import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import Search from "./Search";
import PaginationSmall from "./PaginationSmall";

export function Home() {
	const [searchTerm, setSearchTerm] = useState(null);
	const [apiData, setApiData] = useState("");
	//pagination variables
	const [offset, setOffset] = useState(0);
	const [maxResults, setMaxResults] = useState(100);
	const [resultsReturned, setResultsReturned] = useState(0);
	const [page, setPage] = useState(1);

	const api2 =
		"https://guarded-dusk-77491.herokuapp.com/https://api.ft.com/content/search/v1?";

	useEffect(() => {
		fetch(api2, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0",
			},
			body: JSON.stringify({
				queryString: `${
					searchTerm
						? `title:\"${searchTerm}\" AND lastPublishDateTime:>2017-01-01T00:00:00Z`
						: `lastPublishDateTime:>2017-01-01T00:00:00Z`
				} `,
				resultContext: {
					aspects: [
						"title",
						"lifecycle",
						"location",
						"summary",
						"editorial",
						"images",
					],
					offset: `${offset}`,
					sortOrder: "DESC",
					sortField: "initialPublishDateTime",
				},
			}),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setApiData(body);
				console.log(body);
				setResultsReturned(body.results[0].indexCount);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [searchTerm, offset]);

	return (
		<main role="main" className="o-colors-page-background">
			<PaginationSmall
				apiData={apiData}
				setApiData={setApiData}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				resultsReturned={resultsReturned}
				offset={offset}
				setOffset={setOffset}
				maxResults={maxResults}
				page={page}
				setPage={setPage}
			/>
			{/* <header className="header"></header> */}
			<div className="o-colors-page-background o-grid-container o-typography-wrapper">
				{/* <Search
					apiData={apiData}
					setApiData={setApiData}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/> */}
				{/* <Link to="/about/this/site">About</Link> */}
			</div>
		</main>
	);
}

export default Home;
