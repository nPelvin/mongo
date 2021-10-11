import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}
	function handleSubmit(event) {}

	return (
		<div>
			<form>
				<div className="search-row">
					<input
						className="input"
						value={searchInput}
						onChange={handleSearchInput}
						type="text"
						placeholder="Search for an article"
					/>
					{/* <Link
						to={{
							pathname: "/results",
							searchRes: searchInput,
						}}
					> */}
					<button className="submit" onClick={handleSubmit}>Search</button>
					{/* </Link> */}
				</div>
			</form>
		</div>
	);
};

export default Search;
