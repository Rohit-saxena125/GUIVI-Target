import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import Logo from '../constatnts/logo.png';
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value });
  };
  let history = useHistory();

  return (
    <>
      <section className="loginsection section ">
        <div className="container grid grid-two-column">
          <div className="login-data">
            <form action="#" className="login-form">
            <span>
            <label>
              Login
            </label>
            <a class="navbar-brand" href="#">
         <img src={Logo} />
        </a>
           </span>
              <div className="form">
              <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Enter your email"
                  name="email"
                  value={userLogin.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <div className="form">
              <label htmlFor="pasword" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form__input"
                  placeholder="Enter password"
                  name="password"
                  value={userLogin.password}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <div className="forgotPassword">
                <a
                  className="common-para"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Forgot Password?
                </a>
              </div>
              <br />
              <button className="btn btn-primary"onClick={()=>{history.push("/additionalDetails")}}><strong>Login</strong></button>
            <div>
            <br />
            <p className="common-para">
              Don't have an account? <a href="/signup">Signup</a>
            </p>
            </div>
            </form>    

          </div>
        </div>
      </section>
    </>
  );
};
export default Login;