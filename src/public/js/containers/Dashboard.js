import React, { Component } from 'react';

/* Components */
import Player from './Player';
import Controls from './Controls';

class Dashboard extends Component {

  constructor() {
	super();
	this.state = {
	  currentVideo: '',
	  changeTracks: false,
	  queue: [],
	}
  };

  addTrack = e => {
	if (!this.state.queue.length) {
	  this.setState({ currentVideo : e.id.videoId });
	};
	const queueCopy = Object.assign([], this.state.queue);
	queueCopy.push(e);
	this.setState({ queue: queueCopy });
  }

  

  render() {
	return (
	  <div id='dashboard'>
		<Player currentVideo={this.state.currentVideo} />
		<Controls queue={this.state.queue} addTrack={this.addTrack} />
	  </div>
	)
  }
}

export default Dashboard;
