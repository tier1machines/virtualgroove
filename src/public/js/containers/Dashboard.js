import React, { Component } from 'react';
import axios from 'axios';
/* Components */
import Player from './Player';
import Controls from './Controls';
import Register from '../Register';

class Dashboard extends Component {

  constructor() {
		super();
		this.state = {
			currentVideo: '',
			index: 0,
			status: '',
			queue: [],
			username: '',
			email: '',
			password: '',
		}
  };

	register = () => {
		axios.post('/auth/register', {
			username: this.state.username, 
			email: this.state.email, 
			password: this.state.password, 
		});
	}
	
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

  removeVideo = index => {
	const queueCopy = Object.assign([], this.state.queue);
	queueCopy.splice(index, 1);
	this.setState({ queue: queueCopy });
  };

	registerName = (username) => {
		this.setState({ username });
	};
	
	registerEmail = (email) => {
		this.setState({ email });
	};

	registerPassword = (password) => {
		this.setState({ password });
	};

  render() {
	return (
	  <div id='dashboard'>
		<Player currentVideo={this.state.currentVideo} setStatus={this.setStatus} setCurrentVideo={this.setCurrentVideo} queue={this.state.queue} index={this.state.index} />
		<Register registerName={this.registerName} registerEmail={this.registerName} registerPassword={this.registerPassword}/>
		<Controls queue={this.state.queue} addTrack={this.addTrack} setCurrentVideo={this.setCurrentVideo} status={this.state.status} removeVideo={this.removeVideo} />
	  </div>
	)
  }
}

export default Dashboard;
