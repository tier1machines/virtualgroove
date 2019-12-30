import React, { Component } from 'react';

/* Components */
import Track from '../presentation/Track';
import Turntable from './Turntable';

class Queue extends Component {

  render() {
	const tracks = this.props.queue.map( (track, i) => (
	  <div className='trackContainer' onClick={() => this.props.setCurrentVideo(track, i)} key={i}>
		<Track track={track} removeVideo={this.props.removeVideo} index={i} />
	  </div>
	));

	return (
	  <div id='queue'>
		<Turntable addTrack={this.props.addTrack} status={this.props.status}/>
		<div id='trackList'>
		  {tracks}
		</div>
	  </div>
	)
  }
}

export default Queue;
