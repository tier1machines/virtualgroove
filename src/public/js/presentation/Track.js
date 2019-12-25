import React from 'react';

const Track = props => {
  return (
	<div className='track'>
	  <h3>{props.track.snippet.title}</h3>
	  <img src={props.track.snippet.thumbnails.default.url} />
	</div>
  )
}

export default Track;
