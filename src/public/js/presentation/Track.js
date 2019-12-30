import React from 'react';

const Track = props => {
  return (
	<div className='track'>
	  <div className='remove' onClick={() => props.removeVideo(props.index)} >X</div>
	  <img src={props.track.snippet.thumbnails.default.url} className='trackCover' />
	  <p className='trackTitle'>{props.track.snippet.title}</p>
	</div>
  )
}

export default Track;
