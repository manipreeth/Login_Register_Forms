import React, { useState, useContext } from "react";

import { formState } from "../Login/Login";

function Register() {
  const { Form, handleForm } = useContext(formState);

  const [registerDetails, handleregisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });

  const handleRegisterForm = (e) => {
    handleregisterDetails({
      ...registerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const Register = () => {
    alert(
      `Name is ${registerDetails.name}email is ${registerDetails.email} and password is ${registerDetails.password} and confirmPassword is ${registerDetails.confirmPassword} and mobile is ${registerDetails.mobile}`
    );
  };

  const userClick = () => {
    handleForm(!Form);
  };

  return (
    <div className="registerDiv">
      <h1 className="loginH tc-orange">Register</h1>
      <form className="loginForm">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={registerDetails.name}
          name="name"
          onChange={(e) => handleRegisterForm(e)}
          placeholder="Manipreeth"
          className="mb-30"
          id="name"
        />
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          value={registerDetails.email}
          name="email"
          onChange={(e) => handleRegisterForm(e)}
          placeholder="exmaple@xyz.com"
          className="mb-30"
          id="email"
        />
        <label htmlFor="pswd">Password</label>
        <input
          type="password"
          value={registerDetails.password}
          name="password"
          onChange={(e) => handleRegisterForm(e)}
          placeholder="***************"
          id="pswd"
          className="mb-30"
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="text"
          value={registerDetails.confirmPassword}
          name="confirmPassword"
          onChange={(e) => handleRegisterForm(e)}
          placeholder="Re-type your password"
          id="confirmPassword"
          className="mb-30"
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="number"
          value={registerDetails.mobile}
          name="mobile"
          onChange={(e) => handleRegisterForm(e)}
          placeholder="9876543210"
          id="mobile"
          className="mb-30"
        />
      </form>

      <button onClick={Register}>Register</button>
      <p className="regLink">
        Have an account?&nbsp;
        <a onClick={userClick}>Login</a>
      </p>
    </div>
  );
}

export default Register;
