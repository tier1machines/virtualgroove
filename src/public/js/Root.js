import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*** ACTIONS ***/



/*** COMPONENTS ***/
import Navbar from './containers/Navbar';
import Dashboard from './containers/Dashboard';

const Root = () => {
  return (
	<>
	  <Navbar />
	  <Router>
		<Route exact path='/' component={Dashboard} />
	  </Router>
	</>
  )
}

export default Root;
