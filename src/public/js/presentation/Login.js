import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loginUser, onChangeId, onChangePassword } from '../actions/authActions';

const Login = props => (
  <div id='login-box-parent'>
    <div id='login-box'>
      <input id='email' type='text' onChange={e => props.onChangeId(e.target.value)} placeholder='ID'></input>
      <input id='password' type='password' onChange={e => props.onChangePassword(e.target.value)} placeholder='Password'></input>
      <button id='login-btn' onClick={() => props.loginUser({ id: props.auth.id, password: props.auth.password }, props.history)}>Log in</button>
      <a id='signup-btn' onClick={() => { }}>Sign up</a>
    </div>
  </div>
)

const mapStateToProps = reducers => ({
  auth: reducers.auth
})
const mapDispatchToProps = {
  loginUser,
  onChangeId,
  onChangePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);