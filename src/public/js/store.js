import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/musicReducer';

// const applyMiddleware = redux.applyMiddleware;
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')

const store = createStore(
    reducers,
    // applyMiddleware(thunkMiddleware),
    composeWithDevTools()
);

export default store;