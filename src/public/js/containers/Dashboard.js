import React, { Component } from 'react';

/* Components */
import Player from './Player';
import Controls from './Controls';

class Dashboard extends Component {

  render() {
	return (
	  <div id='dashboard'>
		<Player id='50JJZIKdj0s'/>
		<Controls />
	  </div>
	)
  }
}

export default Dashboard;
