import React from "react";

function Headline({ apiData }) {
	return (
		<div>
			{apiData
				? apiData.results[0].results.map((x, index) => (
						<div key={index}>
							{/* <a href={x.location.uri}> */}
							<h3>{x.title.title}</h3>
							{/* </a> */}
							<br />
							<p>{x.editorial.subheading}</p>
							<br />
						</div>
				  ))
				: null}
			{apiData ? console.log(apiData.results[0].results) : null}
		</div>
	);
}

export default Headline;
