import React from "react";

function Headline({ apiData }) {
	return (
		<div>
			{apiData
				? apiData.results[0].results.map((x, index) => (
						<div key={index}>
							
							<h3>{x.title.title}</h3>
					
							<br />
							<p>{x.editorial.subheading}{` - `}<a href={x.location.uri}>Link</a></p>
							<br />
						</div>
				  ))
				: null}
			{apiData ? console.log(apiData.results[0].results) : null}
		</div>
	);
}

export default Headline;
