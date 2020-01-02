import axios from 'axios';
import * as types from '../constants/types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

// Log in a user
export const loginUser = userData => dispatch => {
    axios.post('/auth/login', userData)
      .then(res => {
		const { token } = res.data;
		// Save bearer token to localStorage
		localStorage.setItem('jwtToken', token);
		// Set token to auth header
		setAuthToken(token);
		// Decode token to get user data
		const decoded = jwt_decode(token);
		console.log('Decoded = ', decoded);
		// Set current user
		dispatch(setCurrentUser(decoded));
      })
      .catch(err => dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      }))
}

export const setCurrentUser = decodedUser => {
    return {
        type: types.SET_CURRENT_USER,
        payload: decodedUser,
    }
}

// Register a new user then redirect back to login page
export const registerUser = (userData, history) => {
  axios.post('/auth/register', userData)
	.then(res => history.push('/login'))
  	.catch(err =>
	  dispatch({
		type: types.GET_ERRORS,
		payload: err.response.data
	  })
	);
};

// Log out user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to an empty object which will toggle isAuthenticated to false
  dispatch(setCurrentUser({}));
};

