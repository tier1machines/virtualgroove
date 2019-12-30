import React, { Component } from 'react';

/* Components */
import Queue from './Queue';

class Controls extends Component {

  render() {
	return (
	  <div id='controls'>
		<Queue queue={this.props.queue} addTrack={this.props.addTrack} setCurrentVideo={this.props.setCurrentVideo} status={this.props.status} />
	  </div>
	)
  }
}

export default Controls;


