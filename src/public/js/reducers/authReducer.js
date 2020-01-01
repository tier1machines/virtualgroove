import * as types from '../constants/types';
import isEmpty from '../utils/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
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

	default:
	  return state;
  }
};
