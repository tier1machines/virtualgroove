import React from 'react';

const Results = props => {

  const results = props.searchResults.map( (item, i) => (
	<div key={i} className='trackContainer'>
	  <img src={item.snippet.thumbnails.default.url} className='trackCover' />
	  <p className='trackTitle'>{item.snippet.title}</p>
	</div>
  ))

  return (
	<div id='results'>
	  <div id='resultsContainer'>
		{results}
	  </div>
	</div>
  )
}

export default Results;
