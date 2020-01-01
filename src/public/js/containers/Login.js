import React from 'react'

const Login = ({ onChangeId, onChangePassword, handleLogin }) => (
  <div id=''>
    <div id='login-box'>
      <input id='login' type='text' onChange={e => onChangeId(e.target.value)} placeholder='ID'></input>
      <input id='login' type='password' onChange={e => onChangePassword(e.target.value)} placeholder='Password'></input>
      <button id='login-btn' onClick={() => handleLogin}>Log in</button>
      <a id='signup-btn' onClick={() => { }}>Sign up</a>
    </div>
  </div>
)

export default Login;