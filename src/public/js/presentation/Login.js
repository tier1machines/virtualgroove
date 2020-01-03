import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loginUser, onChangeEmail, onChangePassword } from '../actions/authActions';

const Login = props => (
  <div id='login-box-parent'>
    <div id='login-box'>
      <input id='email' type='text' onChange={e => props.onChangeEmail(e.target.value)} placeholder='Email'></input>
      <input id='password' type='password' onChange={e => props.onChangePassword(e.target.value)} placeholder='Password'></input>
      <button id='login-btn' onClick={() => props.loginUser({ email: props.auth.email, password: props.auth.password }, props.history)}>Log in</button>
      <a id='signup-btn' onClick={() => { }}>Sign up</a>
    </div>
  </div>
)

const mapStateToProps = reducers => ({
  auth: reducers.auth
})
const mapDispatchToProps = {
  loginUser,
  onChangeEmail,
  onChangePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);