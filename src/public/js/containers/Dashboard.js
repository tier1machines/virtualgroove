import React, { Component } from 'react';

/* Components */
import Player from './Player';
import Controls from './Controls';

class Dashboard extends Component {

  render() {
	return (
	  <div id='dashboard'>
		<Player />
		<Controls />
	  </div>
	)
  }
}

export default Dashboard;
