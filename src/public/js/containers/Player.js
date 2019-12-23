import React, { Component } from 'react';

class Player extends Component {

  constructor() {
	super();
	this.state = {
	  //source: 'https://www.youtube.com/embed/50JJZIKdj0s',
	}
  }

  render() {
	return (
	  <div id='player'>
		<div id='iframe-container'>
		  <iframe id='iframe' src={this.state.source}></iframe>
		</div>
	  </div>
	)
  }
}

export default Player;
