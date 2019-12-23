import React, { Component } from 'react';

/* Components */
import Enso from '../presentation/Enso';
import AddTrack from '../presentation/AddTrack';

class Turntable extends Component {

  render() {
	return (
	  <div id='turntable'>
		<Enso />
		<AddTrack />
	  </div>
	)
  }
}

export default Turntable;
