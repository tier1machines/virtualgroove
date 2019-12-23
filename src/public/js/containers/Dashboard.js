import React, { Component } from 'react';

/* Components */
import Player from './Player';
import Queue from './Queue';

class Dashboard extends Component {

  render() {
	return (
	  <div id='dashboard'>
		<Player />
		<Queue />
	  </div>
	)
  }
}

export default Dashboard;
