import * as types from '../constants/types';
import isEmpty from '../utils/is-empty';

const initialState = {
	isAuthenticated: false,
	user: {},
	id: '',
	password: '',
}

export default function (state = initialState, action) {
	switch (action.type) {
		case types.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}

		case types.ID_INPUT:
			return {
				...state,
				id: action.payload
			}

		case types.PASSWORD_INPUT:
			return {
				...state,
				password: action.payload
			}

		default:
			return state;
	}
};
