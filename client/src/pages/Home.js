import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from "./Search";

export function Home() {
	const [searchTerm, setSearchTerm] = useState(null);
	const [apiData, setApiData] = useState("");
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
					searchTerm ? `title:\"${searchTerm}\" AND lastPublishDateTime:>2017-01-01T00:00:00Z` : `lastPublishDateTime:>2017-01-01T00:00:00Z`
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
			})
			.catch((err) => {
				console.error(err);
			});
	}, [searchTerm]);

	return (
		<main role="main" className="main">
			<header className="header"></header>
			<Search
				apiData={apiData}
				setApiData={setApiData}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<Link to="/about/this/site">About</Link>
		</main>
	);
}

export default Home;
