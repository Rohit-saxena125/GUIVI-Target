import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import Logo from '../constatnts/logo.png';
import axios from "axios";
import '../CSS/loginpage.css';
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const {name,value} = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  let history = useHistory();
  const login = ()=>
  {
    const{email,password} = userLogin;
    axios.post('http://localhost:9000/login',userLogin).then((res)=>
    {
      alert(res.data.message);
      setUserLogin(res.data.userLogin)
      history.push('/additionalDetails');
    })
  }
  return (
    <>
      <section className="loginsection section ">
        <div className="login">
          <div className="login-data">
            <form action="#" className="login-form">
            <span>
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
              <button className="btn btn-primary button"onClick={login}><strong>Login</strong></button>
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