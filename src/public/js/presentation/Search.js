import React from 'react';

const Search = () => {
  return (
	<div id='search'>

	  <div className='void'> </div>

	  <div id='addTrackContainer'>
		<input className='input' id='addTrackInput' placeholder='Search for Tracks' />
		<button>Add Track</button>
	  </div>

	  <div className='void'> </div>

	</div>
  )
}

export default Search;
