import React, { useState, useEffect } from "react";
import Header from "./Header";
import Headline from "./Headline";

function PaginationSmall({
	apiData,
	setSearchTerm,
	resultsReturned,
	offset,
	setOffset,
	maxResults,
	page,
	searchTerm,
    setPage
}) {
	const [currentPagination, setCurrentPagination] = useState([
		1, 2, 3, 4, 5, 6, 7,
	]);
	function paginationArray(activePage, resultsReturned) {
		let maxPages = Math.ceil(resultsReturned / 100);
		let answer = [1];
		activePage < 4 && maxPages < 8
			? answer.push(2, 3, 4, 5, 6, 7)
			: answer.push(".");
		//less than 7 pages - no dots
        maxPages > 40 ? maxPages = 40 : null;
		maxPages < 8 ? (answer = [1, 2, 3, 4, 5, 6, 7]) : null;
		maxPages < 8 ? answer.splice(maxPages) : null;
		//greater than 7 pages dot at P2 and P6
		activePage > 3 &&
		maxPages > 7 &&
		activePage < maxPages - 2 &&
		answer[1] === "."
			? answer.push(activePage - 1, activePage, activePage + 1, ".", maxPages)
			: null;

		//dot at p3 when on mp-2
		maxPages > 7 && activePage === maxPages - 2
			? (answer = [
					1,
					2,
					".",
					maxPages - 3,
					maxPages - 2,
					maxPages - 1,
					maxPages,
			  ])
			: null;

		//dot at p4 when on p1,2 or mp or mp-1
		(maxPages > 7 && activePage < 3) || activePage > maxPages - 2
			? (answer = [1, 2, 3, ".", maxPages - 2, maxPages - 1, maxPages])
			: null;

		//dot at p5 when on p3 and mp=8 or greater
		maxPages > 7 && activePage === 3
			? (answer = [1, 2, 3, 4, ".", maxPages - 1, maxPages])
			: null;

		console.log(answer);
		return answer;
	}
	useEffect(() => {
		// Update the document title using the browser API
		setCurrentPagination(paginationArray(page, resultsReturned));
	}, [page, resultsReturned]);

	return (
		<div>
			<Header
				apiData={apiData}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				resultsReturned={resultsReturned}
				offset={offset}
				maxResults={maxResults}
				page={page}
                setPage={setPage}
                setOffset={setOffset}
			/>
			{/* <!-- we recommend showing no more than 7 pages at a time, for more  than 7 pages use the pagination ellipsis --> */}

			<div className="o-buttons-pagination">
				<a
					href="#"
					className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        "
					disabled
				>
					<span className="o-buttons-icon__label">Fewer results</span>
				</a>
				<button
					onClick={() => {
						setOffset((currentPagination[0] - 1) * maxResults);                        
                        setPage(currentPagination[0]);
					}}
					className="o-buttons o-buttons--secondary"
					aria-current="page"
				>
					{currentPagination[0]}
				</button>
				<button
					onClick={() => {
						setOffset((currentPagination[1] - 1) * maxResults);
                        setPage(currentPagination[1]);
					}}
					className="o-buttons o-buttons--secondary"
				>
					{currentPagination[1]}
				</button>
				<button
					onClick={() => {
						setOffset((currentPagination[2] - 1) * maxResults);                        
                        setPage(currentPagination[2]);
					}}
					className="o-buttons o-buttons--secondary"
				>
					{currentPagination[2]}
				</button>
				<button
					onClick={() => {
						setOffset((currentPagination[3] - 1) * maxResults);
                        
                        setPage(currentPagination[3]);
					}}
					className="o-buttons o-buttons--secondary"
				>
					{currentPagination[3]}
				</button>
				<button
					onClick={() => {
						setOffset((currentPagination[4] - 1) * maxResults);
                        
                        setPage(currentPagination[4]);
					}}
					className="o-buttons o-buttons--secondary"
				>
					{currentPagination[4]}
				</button>
				<button
					onClick={() => {
						setOffset((currentPagination[5] - 1) * maxResults);
                        
                        setPage(currentPagination[5]);
					}}
					className="o-buttons o-buttons--secondary"
				>
					{currentPagination[5]}
				</button>
				<button
					onClick={() => {
						setOffset((currentPagination[6] - 1) * maxResults);
                        
                        setPage(currentPagination[6]);
					}}
					className="o-buttons o-buttons--secondary"
				>
					{currentPagination[6]}
				</button>
				<a
					href="#"
					className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        "
					disabled
				>
					<span className="o-buttons-icon__label">More results</span>
				</a>
			</div>

			<br className="demo-break" />
			<Headline apiData={apiData} />
			{/* <!-- when the there are more than 7 pages, and the selected page is below 3, show ellipsis with 3 pages either side --> */}
		</div>
	);
}

export default PaginationSmall;
