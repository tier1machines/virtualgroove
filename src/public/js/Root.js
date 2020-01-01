import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

/*** ACTIONS ***/



/*** COMPONENTS ***/
import Navbar from './containers/Navbar';
import Dashboard from './containers/Dashboard';
import Login from './presentation/Login';


/*** Token Validation ***/
if (localStorage.jwtToken) {
  // Set token to auth header
  setAuthToken(localStorage.jwtToken);
  // Decode token to get user data
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated in app state
  store.dispatch(setCurrentUser(decoded));

  // TODO: Check for expired tokens
}
	

const Root = () => {
	return (
	  <>

	    <Provider store={store}>
		  <Navbar />

		  <Router>
			  <Route exact path='/' component={Dashboard} />
			  <Route exact path='/login' component={Login} />
		  </Router>

		</Provider>

	  </>
	)
}

export default Root;
