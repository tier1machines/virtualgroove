import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from '../utils/is-empty';

class Player extends Component {

  constructor() {
	super();
	this.state = {
	  //source: 'https://www.youtube.com/embed/50JJZIKdj0s',
	}

  }

  componentDidMount = () => {
	// check if API script is loaded, if not begin loading async
	if (!window.YT) {
	  const tag = document.createElement('script');
	  // Load script locally
	  tag.src = 'http://localhost:7000/dist/youtube_api.js';
	  // Option to load file directly from youtube
	  //tag.src = 'https://www.youtube.com/iframe_api';

	  // onYoutubeIframeAPIReady will load the video after the script is loaded
	  if (!isEmpty(this.props.dashboard.currentVideo)) {
		window.onYouTubeIframeAPIReady = this.loadVideo;
	  }

	  const firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	} else { // if script is already there, immediately load video
	  this.loadVideo();
	}
  };

  // Load next video on prop change
  componentDidUpdate = prevProps => {
	if (this.props.dashboard.currentVideo  && this.props.dashboard.currentVideo !== prevProps.dashboard.currentVideo && prevProps.dashboard.currentVideo === '') {
	  console.log('Initializing', this.props.dashboard.currentVideo);
	  this.loadVideo();
	} else if (this.props.dashboard.currentVideo && this.props.dashboard.currentVideo !== prevProps.dashboard.currentVideo) {
	  console.log('Booting next video');
	  this.player.loadVideoById(this.props.dashboard.currentVideo);
	}
  };

  // Create a new YT player object
  loadVideo = () => {
	const { currentVideo } = this.props.dashboard;
	console.log('Current video ', currentVideo);
	// The Player object is created uniquely based on the id passed as props
	this.player = new window.YT.Player(`youtube-player-main`, {
	  height: '100%',
	  width: '100%',
	  videoId: currentVideo,
	  events: {
		onReady: this.onPlayerReady,
		onStateChange: this.onPlayerStateChange,
	  },
	});
  };

  onPlayerReady = event => {
	//console.log('Event: ', event.target.getDuration());
	event.target.playVideo();
  };

  onPlayerStateChange = event => {
	// event.data properties:
	// -1 (unstarted)
	// 0 (ended)
	// 1 (playing)
	// 2 (paused)
	// 3 (buffering)
	// 5 (video cued)
	this.props.setStatus(event.data);
	console.log('Player status: ', event.data);
	if (event.data === 0) {
	  // check if next song exists in queue
	  console.log('Index: ',this.props.index, 'Queue len: ', this.props.queue.length)
	  let nextSongIndex = this.props.index + 1;
	  if (this.props.queue[nextSongIndex]) {
		// set next video as current video and update index
		const nextIndex = this.props.index + 1;
		this.props.setCurrentVideo(queue[nextIndex], nextIndex);
	  };
	} else {
	  console.log('Player status changed: ', event.data);
	}
  };

  render() {
	return (
	  <div id='player'>
		<div id='youtube-player-main'>
		</div>
	  </div>
	)
  }
}

const mapStateToProps = reducers => ({
  dashboard: reducers.dashboard,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
