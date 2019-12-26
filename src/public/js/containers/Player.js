import React, { Component } from 'react';

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
	  tag.src = 'https://www.youtube.com/iframe_api';

	  // onYoutubeIframeAPIReady will load the video after the script is loaded
	  if (this.props.currentVideo !== '') {
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
	if (this.props.currentVideo !== prevProps.currentVideo) {
	  this.loadVideo();
	}
  }

  // Create a new YT player object
  loadVideo = () => {
	const { currentVideo } = this.props;
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
  }

  onPlayerReady = event => {
	//console.log('Event: ', event.target.getDuration());
	event.target.playVideo();
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

export default Player;
