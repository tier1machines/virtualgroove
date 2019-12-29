import React, { Component } from 'react';

/* Components */
import Track from '../presentation/Track';
import Turntable from './Turntable';

class Queue extends Component {
  constructor() {
	super();
	this.state = {
	  tracks: [],
	}
  }

  render() {
	const tracks = this.props.queue.map( (track, i) => (
	  <div className='trackContainer' onClick={() => this.props.setCurrentVideo(track)} key={i}>
		<Track track={track} />
	  </div>
	));

	return (
	  <div id='queue'>
		<Turntable addTrack={this.props.addTrack} />
		<div id='trackList'>
		  {tracks}
		</div>
	  </div>
	)
  }
}

export default Queue;
