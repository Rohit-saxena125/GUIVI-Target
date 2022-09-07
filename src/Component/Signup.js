import React, { useState } from "react";
const Signup = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    password: "",
    Confirmpassword: "",
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
            <label>
              Signup
            </label>
           </span>
            <form action="#">
              <div className="form">
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
                  name="E-mail"
                  value={userRegister.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form">
              <label htmlFor="pasword" className="form__label">
                  Pasword
                </label>
                <input
                  type="password"
                  id="pasword"
                  className="form__input"
                  placeholder="Enter your password"
                  name="Enter your password"
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
                  value={userRegister.Confirmpassword}
                  onChange={handleInput}
                  required
                />
              </div>
              <input
                type="submit"
                value="REGISTER"
                className="btn register-btn"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
