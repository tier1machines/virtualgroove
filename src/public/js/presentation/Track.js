import React from 'react';

const Track = props => {
  return (
	<div className='track'>
	  <img src={props.track.snippet.thumbnails.default.url} className='trackCover' />
	  <p className='trackTitle'>{props.track.snippet.title}</p>
	</div>
  )
}

export default Track;
