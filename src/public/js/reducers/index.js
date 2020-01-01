import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';

const reducers = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer
})

export default reducers;
