import React, { useState } from "react";
import "./login.css";

import { HiCode } from "react-icons/hi";
import LoginForm from "./LoginForm";
import RegisterForm from "../Register/RegisterForm";

export const formState = React.createContext();

function Login() {
  const [Form, handleForm] = useState(true);

  return (
    <div className="login jc-between ">
      <div className="CoderBlog">
        <div className="d-flex coderBlogLogo">
          <HiCode className="coderBlogIcon tc-orange" />
          <h1>
            <span className="tc-orange">Coder </span>
            Blog
          </h1>
        </div>
        <p className="coderBlogtitle">
          A place for <span className="tc-orange">programmers</span> by a{" "}
          <span className="tc-orange">programmer.</span>
        </p>
      </div>

      {/* Forms*/}
      <formState.Provider value={{ Form, handleForm }}>
        {Form ? <LoginForm /> : <RegisterForm />}
      </formState.Provider>
    </div>
  );
}

export default Login;
