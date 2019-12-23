import React, { Component } from 'react';

/* Components */
import Queue from './Queue';
import Turntable from './Turntable';

class Controls extends Component {

  render() {
	return (
	  <div id='controls'>
		<Queue />
		<Turntable />
	  </div>
	)
  }
}

export default Controls;


