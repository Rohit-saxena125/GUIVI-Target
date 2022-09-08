import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import Logo from '../constatnts/logo.png';
import '../CSS/signup.css';
import axios from "axios";
const Signup = () => {
  const history = useHistory();
  const [userRegister, setUserRegister] = useState({
    username: "",
    email : "",
    password: "",
    confirmpassword: "",
  });
  const handleInput = (e) => {
    const {name,value} = e.target;

    setUserRegister({ ...userRegister, [name]: value });
  };
  const signup = ()=>
  {
    const{username,email,password,confirmpassword} = userRegister;
    axios.post('http://localhost:9000/signup',userRegister).then((res)=>
      {
        alert(res.data.message);
        history.push('/');
      })
    }
  return (
    <>
    {console.log("User",userRegister)}
      <section className="loginsection register-section ">
        <div className="register">
          <div className="login-data register-data">
            <span>
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
              <div className="form">
                <label htmlFor="password" className="form__label">
                  Password
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
              <div className="form">
                <button className="btn btn-primary button"onClick={signup}>
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
