import React from 'react';

const Search = props => {
  return (
	<div id='search'>

	  <div className='void'> </div>

	  <div id='addTrackContainer'>
		<input name='searchTerm' value={props.searchTerm} onChange={props.onChange} className='input' id='addTrackInput' placeholder='Search for Tracks' />
		<input type='submit' value='Search' className='searchBtn' onClick={props.onSubmit} />
	  </div>

	  <div className='void'> </div>

	</div>
  )
}

export default Search;
