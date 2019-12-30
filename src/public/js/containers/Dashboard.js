import React, { Component } from 'react';

/* Components */
import Player from './Player';
import Controls from './Controls';

class Dashboard extends Component {

  constructor() {
	super();
	this.state = {
	  currentVideo: '',
	  index: '',
	  status: '',
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
  };

  setCurrentVideo = (selectedVideo, index) => {
	this.setState({ currentVideo: selectedVideo.id.videoId, index });
  };

  setStatus = status => {
	this.setState({ status });
  };

  loadNextVideo = () => {
	// Copy current queue
	const queueCopy = Object.assign([], this.state.queue);

  };
  

  render() {
	return (
	  <div id='dashboard'>
		<Player currentVideo={this.state.currentVideo} loadNextVideo={this.loadNextVideo} setStatus={this.setStatus} setCurrentVideo={this.setCurrentVideo} queue={this.state.queue} />
		<Controls queue={this.state.queue} addTrack={this.addTrack} setCurrentVideo={this.setCurrentVideo} status={this.state.status} />
	  </div>
	)
  }
}

export default Dashboard;
