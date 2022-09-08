import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import Logo from '../constatnts/logo.png';
const Signup = () => {
  let history = useHistory();
  const [userRegister, setUserRegister] = useState({
    username: "",
    email : "",
    password: "",
    confirmpassword: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };
  return (
    <>
      <section className="loginsection register-section ">
        <div className="container grid grid-two-column">
          <div className="login-data register-data">
            <span>
              <label>Signup</label>
              <a class="navbar-brand" href="#">
         <img src={Logo} />
        </a>
            </span>
            <form action="#">
              <div className="form" >
                <label htmlFor="username" className="form__label">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="form__input"
                  placeholder="Enter your name"
                  name="username"
                  value={userRegister.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <div className="form">
                <label htmlFor="email" className="form__label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  placeholder="Enter your email"
                  name="email"
                  value={userRegister.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <div className="form">
                <label htmlFor="pasword" className="form__label">
                  Pasword
                </label>
                <input
                  type="password"
                  id="pasword"
                  className="form__input"
                  placeholder="Enter your password"
                  name="password"
                  value={userRegister.password}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <div className="form">
                <label htmlFor="Confirm password" className="form__label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm password"
                  className="form__input"
                  placeholder="Enter your password"
                  name="confirmpassword"
                  value={userRegister.confirmpassword}
                  onChange={handleInput}
                  required
                />
              </div>
              <br />
              <div className="form">
                <button className="btn btn-primary"onClick={()=>{history.push("/")}}>
                  <strong>Signup</strong>
                </button>
              </div>
              <div>
                <p>account already exist?<a href="/">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
