import React, { useState } from "react";

const Login = () =>{
  return(
    <section className = 'login-section flex column'>
      <form className = "login-form">
      <div className="form-control flex column">
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your Email"
        value=''
        //onChange={(e) => setText(e.target.value)}
      />
    </div>

    <div className="form-control flex column">
    <label>Password</label>
    <input
      type="password"
      placeholder="Enter password"
      value=''
      //onChange={(e) => setText(e.target.value)}
    />
  </div>
      </form>
    </section>
  );

};
export default Login;
