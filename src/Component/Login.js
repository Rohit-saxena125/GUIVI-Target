import React, { useState } from "react";
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
                />
              </div>
              <div className="forgotPassword">
                <a
                  className="common-para"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Forgot Password?
                </a>
              </div>
              <input type="submit" value="Login" className="btn" />
            </form>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;