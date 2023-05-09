import React, { useState, useContext } from "react";
import { formState } from "./Login";

function LoginForm() {
  const { Form, handleForm } = useContext(formState);

  const [loginDetails, handleLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleLoginForm = (e) => {
    handleLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    alert(`${loginDetails.email} and password is ${loginDetails.password}`);
  };

  const userClick = () => {
    handleForm(!Form);
  };

  return (
    <div className="loginDiv">
      <h1 className="loginH tc-orange">Login</h1>
      <form className="loginForm">
        <label>Email Id</label>
        <input
          type="email"
          value={loginDetails.email}
          name="email"
          onChange={(e) => handleLoginForm(e)}
          placeholder="exmaple@xyz.com"
          className="mb-30"
        />
        <label className="pswdLabel">Password</label>
        <input
          type="password"
          value={loginDetails.password}
          name="password"
          onChange={(e) => handleLoginForm(e)}
          placeholder="***************"
        />
      </form>
      <button onClick={login} className="">
        Login
      </button>
      <p className="regLink">
        Doesn't have an account? <a onClick={userClick}>Register</a>
      </p>
    </div>
  );
}

export default LoginForm;
