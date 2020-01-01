import React, { Component } from 'react';

/* Components */
import Queue from './Queue';

class Controls extends Component {

  render() {
	return (
	  <div id='controls'>
		<Queue queue={this.props.queue} addTrack={this.props.addTrack} status={this.props.status} removeVideo={this.props.removeVideo} />
	  </div>
	)
  }
}

export default Controls;


