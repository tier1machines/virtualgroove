import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*** ACTIONS ***/



/*** COMPONENTS ***/
import Navbar from './containers/Navbar';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';

const Root = () => {
	return (
		<>
			<Navbar />
			<Router>
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/login' component={Login} />

			</Router>
		</>
	)
}

export default Root;
