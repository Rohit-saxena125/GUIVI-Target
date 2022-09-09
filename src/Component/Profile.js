import React ,{useState}from "react";
import { useHistory } from "react-router-dom";
import Logo from "../constatnts/logo.png";
import "../CSS/loginpage.css";
import log from '../Component/Login';

import axios from "axios";
const AdditionalDetails =()=> {
  let username = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    username:username,
    age:"",
    dob:"",
    gender:"",
    phone:""});
    const handleInput = (e) => {
      const {name,value} = e.target;
  
      setUserDetails({ ...userDetails, [name]: value });
    };
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  const submit = () => {
    const {username,age,dob,gender,phone} = userDetails;
    console.log(userDetails);
      axios.post("http://localhost:9000/additionalDetails", userDetails).then((res) => {
        alert(res.data.message);
        history.push("/additionalDetails");
      });
  };
  return (
    <section className="login">
      <div >
        <span>
          <a class="navbar-brand" href="#">
            <img src={Logo} />
          </a>
        </span>
        <h1>Profile Page</h1>
        <button className="btn btn-primary button" onClick={logout}>Logout</button>
      </div>
      <div className="AdditionalDetails">
        <h1>Additional Details</h1>
        <form action="/AdditionalDetails" method="POST">
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={userDetails.age}
              onChange={handleInput}
              placeholder="Enter your age"
            />
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={userDetails.dob}
              onChange={handleInput}
              placeholder="Enter your date of birth"
            />
            <label htmlFor="gender">Gender</label>
            <div>
              <span>
                <input type="text" id="gender" 
                className="form-control"
                name="gender"value={userDetails.gender}
                onChange={handleInput} />
              </span>
            </div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInput}
              placeholder="Enter your phone number"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default AdditionalDetails;
