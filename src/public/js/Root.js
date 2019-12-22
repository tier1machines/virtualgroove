import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*** ACTIONS ***/



/*** COMPONENTS ***/
import Dashboard from './containers/Dashboard';

const Root = () => {
  return (
	<>
	  <h1>Virtual Groove!!</h1>
 	  	<Router>
		  <Route exact path='/' component={Dashboard} />
		</Router>
	</>
  )
}

export default Root;
