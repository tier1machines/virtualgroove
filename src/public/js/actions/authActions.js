import axios from 'axios';
import * as types from '../constants/types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
// Log in a user
export const loginUser = (userData, history) => dispatch => {
  console.log('im in loginuser', userData)
  // Login
  const EBLink = 'http://Gatekeeper-dev.7p72xx2fze.us-east-2.elasticbeanstalk.com/graphql';
  const query = `mutation { login( email: \"${userData.email}\" password: \"${userData.password}\" ) { auth token }}`
  // const query2 = `mutation login($email: String! $password: String! ) { auth token }`
  // console.log('query2: ', query2)
  // \"${userData.email}\"
  // \"${userData.password}\"
  const headers = {
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": "*"
  }
  // axios({ method: 'POST', url: EBLink, data: { query: query } })
  axios.post(EBLink,
    {
      query: query
      // uery2, variables: {
      //   email: userData.email,
      //   password: userData.password
      // }
    }
    , { headers: headers })
    .then(res => {
      console.log('this is res', res)
      console.log('this is res.data', res.data)
      const { token } = res.data.data.login;
      // Save bearer token to localStorage
      localStorage.setItem('jwtToken', token);
      // Set token to auth header
      if (token) {
        setAuthToken(token);
      }
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log('Decoded = ', decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .then(res => {
      history.push('/')
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
// Login onChange
export const onChangeEmail = email => {
  return {
    type: types.EMAIL_INPUT,
    payload: email
  }
}
// Password onChange
export const onChangePassword = password => {
  return {
    type: types.PASSWORD_INPUT,
    payload: password
  }
}
// import axios from 'axios';
// import * as types from '../constants/types';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../utils/setAuthToken';

// // Log in a user
// export const loginUser = (userData, history) => dispatch => {
//   console.log('im in loginuser', userData)
//   axios.post('/auth/login', userData)
//     .then(res => {
//       const { token } = res.data;
//       // Save bearer token to localStorage
//       localStorage.setItem('jwtToken', token);
//       // Set token to auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       console.log('Decoded = ', decoded);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .then(res => {
//       console.log('im redirect')
//       history.push('/')
//     })
//     .catch(err => console.log('error', err))
// }

// export const setCurrentUser = decodedUser => {
//   return {
//     type: types.SET_CURRENT_USER,
//     payload: decodedUser,
//   }
// }

// // Register a new user then redirect back to login page
// export const registerUser = (userData, history) => dispatch => {
//   axios.post('/auth/register', userData)

//     .then(res => history.push('/login'))
//     .catch(err =>
//       dispatch({
//         type: types.FETCH_USER_DATA,
//         payload: userData
//       })
//         .catch(err => console.log('error', err))
//     );
// };

// export const registerName = (name) => {
//   return {
//     type: types.CREATE_USERNAME,
//     payload: name
//   }
// }

// export const registerEmail = (email) => {
//   return {
//     type: types.CREATE_EMAIL,
//     payload: email
//   }
// }

// export const registerPassword = (password) => {
//   return {
//     type: types.CREATE_PASSWORD,
//     payload: password
//   }
// }

// // Log out user
// export const logoutUser = () => dispatch => {
//   // Remove token from localStorage
//   localStorage.removeItem('jwtToken');
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to an empty object which will toggle isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };

// // Login onChange
// export const onChangeId = id => {
//   return {
//     type: types.ID_INPUT,
//     payload: id
//   }
// }
// // Password onChange
// export const onChangePassword = password => {
//   return {
//     type: types.PASSWORD_INPUT,
//     payload: password
//   }
// }