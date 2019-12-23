import React, { Component } from 'react';

/* Components */
import Track from '../presentation/Track';
import InfoBar from './InfoBar';

class Queue extends Component {
  constructor() {
	super();
	this.state = {
	  tracks: [1, 2],
	}
  }

  render() {
	const tracks = this.state.tracks.map( (track, i) => (
	  <div className='trackContainer' key={i}>
		<Track />
	  </div>
	));

	return (
	  <div id='queue'>
		<InfoBar />
		<div id='trackList'>
		  {tracks}
		</div>
	  </div>
	)
  }
}

export default Queue;
