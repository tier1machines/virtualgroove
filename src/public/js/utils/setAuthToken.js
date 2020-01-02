import axios from 'axios';

// Set auth token headers if passed a token, otherwise delete current token in headers
const setAuthToken = token => {
    console.log('Setting auth token')
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
};

export default setAuthToken;