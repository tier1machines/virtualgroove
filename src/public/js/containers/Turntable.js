import React, { Component } from 'react';

/* Components */
import Search from '../presentation/Search';
import Enso from '../presentation/Enso';
import Results from '../presentation/Results';

class Turntable extends Component {

  render() {
	return (
	  <div id='turntable'>
		<Search />
		<Enso />
		<Results />
	  </div>
	)
  }
}

export default Turntable;
