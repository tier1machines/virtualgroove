import React from 'react';

const Register = () => {
  return (
    <>
      <div>Create Account</div>
      <input type="text" placeholder="name" onChange={(e) => registerName(e.target.value)}></input>
      <input type="text" placeholder="email" onChange={(e) => registerEmail(e.target.value)}></input>
      <input type="password" placeholder="password" onChange={(e) => registerPassword(e.target.value)}></input>
      <button id="searchBtn">Sign Up</button>
    </>
  );
};

export default Register;