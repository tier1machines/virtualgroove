import React from 'react';
import { connect } from 'react-redux';
import { registerName, registerEmail, registerPassword, registerUser } from './actions/authActions';

const Register = (props) => {
  return (
    <>
      <div className="register-wrapper">
        <input className="register-inputfield" type="text" placeholder="Name" onChange={(e) => props.registerName(e.target.value)}></input>
        <input className="register-inputfield" type="text" placeholder="Email" onChange={(e) => props.registerEmail(e.target.value)}></input>
        <input className="register-inputfield" type="password" placeholder="Password" onChange={(e) => props.registerPassword(e.target.value)}></input>
        <input id="sign-up-btn" type='submit' value='Sign Up' className='searchBtn' onClick={() => registerUser()}></input>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  email: state.auth.email
});

const mapDispatchToProps = (dispatch) => ({
  registerName,
  registerEmail, 
  registerPassword,
  registerUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);