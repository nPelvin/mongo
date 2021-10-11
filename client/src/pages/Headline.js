import React from 'react';

function Headline({ apiData }) {
    return (
			<div>
				{apiData
					? apiData.results[0].results.map((x, index) => (
							<div key={index}>
								<a href={x.location.url}>{x.title.title}</a>
							</div>
					  ))
					: null}
				{apiData
					? console.log(apiData.results[0].results)
					: null}
			</div>
		);
}

export default Headline;