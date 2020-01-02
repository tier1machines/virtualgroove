import React from 'react';

const Register = () => {
  return (
    <>
      <div className="register-wrapper">
        <input className="register-inputfield" type="text" placeholder="Name" onChange={(e) => registerName(e.target.value)}></input>
        <input className="register-inputfield" type="text" placeholder="Email" onChange={(e) => registerEmail(e.target.value)}></input>
        <input className="register-inputfield" type="password" placeholder="Password" onChange={(e) => registerPassword(e.target.value)}></input>
        <input id="sign-up-btn" type='submit' value='Sign Up' className='searchBtn'></input>
      </div>
    </>
  );
};

export default Register;