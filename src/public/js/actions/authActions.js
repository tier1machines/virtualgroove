import axios from 'axios';
import * as types from '../constants/types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const loginUser = userData => dispatch => {
    axios.post('/auth/login', userData)
      .then(res => {
          const { token } = res.data;
          // Save token to auth header
          setAuthToken(token);
          // Decode token to get user data
          const decoded = jwt_decode(token);
          console.log('Decoded = ', decoded);
          // Set current user
          dispatch(setCurrentUser(decoded));
      })
      .catch(err => console.log('Error: ', err));
    //     dispatch({
    //       type: types.GET_ERRORS,
    //       payload: err.response.data
    //   }))
}

export const setCurrentUser = decodedUser => {
    return {
        type: types.SET_CURRENT_USER,
        payload: decodedUser,
    }
}