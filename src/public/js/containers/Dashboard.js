import React, { Component } from 'react';

import axios from 'axios';

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
			queue: [],
		}
  };

	//login functions
	onChangeId = id => {
		this.setState({ id: id })
	}
	onChangePassword = password => {
		this.setState({ password: password })
	}
	handleLogin = () => {
		axios.post('/auth/login', {
			username: this.state.id,
			password: this.state.password
		})
			.then(resposnse => {
				console.log('response', resposnse)
			})
	}


	register = () => {
		axios.post('/auth/register', {
			username: this.state.username, 
			email: this.state.email, 
			password: this.state.password, 
		});
	}
	
  addTrack = e => {
	if (!this.state.queue.length) {
	  this.setState({ currentVideo: e.id.videoId });
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

	// registerName = (username) => {
	// 	this.setState({ username });
	// };
	
	// registerEmail = (email) => {
	// 	this.setState({ email });
	// };

	// registerPassword = (password) => {
	// 	this.setState({ password });
	// };

  render() {
	return (
	  <div id='dashboard' >
		<Player setStatus={this.setStatus} setCurrentVideo={this.setCurrentVideo}  />
		<Controls queue={this.state.queue} addTrack={this.addTrack} setCurrentVideo={this.setCurrentVideo} status={this.state.status} removeVideo={this.removeVideo} />
	  </div>
	)
  }
}

export default Dashboard;
