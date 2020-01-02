import * as types from '../constants/types';
import isEmpty from '../utils/is-empty';

const initialState = {
  isAuthenticated: false,
	user: {},
	username: '',
	email: '',
	password: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
	case types.SET_CURRENT_USER:
	  console.log('set current user');
	  return {
		...state,
		isAuthenticated: !isEmpty(action.payload),
		user: action.payload
	  }
	
		case types.CREATE_USERNAME:
			console.log('in create username', state.username);
		return {
			...state, 
			username: action.payload
		}

		case types.CREATE_EMAIL: 
		return {
			...state, 
			email: action.payload
		}

		case types.CREATE_PASSWORD: 
		return {
			...state, 
			password: action.payload
		}

		case types.FETCH_USER_DATA: 
		return {
			...state, 

		}

	default:
	  return state;
  }
};
