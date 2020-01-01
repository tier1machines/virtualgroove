import React, { Component } from 'react';
import axios from 'axios';

/* Components */
import Player from './Player';
import Controls from './Controls';
import Login from './Login';

class Dashboard extends Component {

	constructor() {
		super();
		this.state = {
			currentVideo: '',
			index: '',
			status: '',
			queue: [],
			//
			id: '',
			password: '',
			loginSuccess: false
			//
		}
	};
	//
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
	//

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
		console.log('Removing video');
		const queueCopy = Object.assign([], this.state.queue);
		queueCopy.splice(index, 1);
		this.setState({ queue: queueCopy });
	};

	render() {
		return (
			<div id='dashboard'>
				<Player currentVideo={this.state.currentVideo} setStatus={this.setStatus} setCurrentVideo={this.setCurrentVideo} queue={this.state.queue} />
				<Controls queue={this.state.queue} addTrack={this.addTrack} setCurrentVideo={this.setCurrentVideo} status={this.state.status} removeVideo={this.removeVideo} />
			</div>
		)
	}
}

export default Dashboard;
