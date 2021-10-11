import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headline from "./Headline";
import "./Home.css";
import Search from "./Search";

export function Home() {
	const [apiData, setApiData] = useState(null);
	const api =
	"https://guarded-dusk-77491.herokuapp.com/https://api.ft.com/content/notifications?apiKey=59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0&since=2021-09-23T13:50:00.000Z";
	const api2 =
		"https://guarded-dusk-77491.herokuapp.com/https://api.ft.com/content/search/v1?";
	
	useEffect(() => {
		fetch(api)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		fetch(api2, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0",
			},
			body: JSON.stringify({
				queryString: "lastPublishDateTime:>2017-01-01T00:00:00Z",
				resultContext: {
					aspects: ["title", "lifecycle", "location", "summary", "editorial"],
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
	}, []);

	return (
		<main role="main" className="main">
			<header className="header"></header>
			<Search />
			<Headline apiData={apiData}/>
				<Link to="/about/this/site">About</Link>
		</main>
	);
}

export default Home;
