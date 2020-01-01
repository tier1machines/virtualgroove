import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loginUser } from '../actions/authActions';
import { dispatch } from 'rxjs/internal/observable/pairs';

const Login = props => (
  <div id=''>
    <div id='login-box'>
      <input id='email' type='text' onChange={e => null}  placeholder='ID'></input>
      <input id='password' type='password' onChange={e => null} placeholder='Password'></input>
      <button id='login-btn' onClick={() => props.loginUser()}>Log in</button>
      <a id='signup-btn' onClick={() => { }}>Sign up</a>
    </div>
  </div>
)

const mapStateToProps = reducers => ({
  auth: reducers.auth
})

export default connect(mapStateToProps, { loginUser })(Login);