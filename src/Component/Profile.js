import React from "react";
import {useHistory } from "react-router-dom";
export default function AdditionalDetails() {
  let username = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
    const logout = () => {
      localStorage.clear();
      history.push("/");
    };
  return (
    <section>
    <div>
      <h1>Profile Page</h1>
      <div>
        {/* fetch username from database */}
        <form action="">
          <label htmlFor="username">Username</label>
          {/* print username from database */}
          <label htmlFor="email">Email</label>
          {/* print username from database */}
          </form>
      </div>
      <button onClick={logout}>Logout</button>
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
            placeholder="Enter your age"
          />
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            placeholder="Enter your date of birth"
            />
          <label htmlFor="gender">Gender</label>
          <div>
            <span>
              <label>Male</label>
              <input type="radio" id="gender" name="gender" />
            </span>
            <span>
              <label>Female</label>
              <input type="radio" id="gender" name="gender" />
            </span>
            <span>
              <label>Other</label>
              <input type="radio" id="gender" name="gender" />
            </span>
          </div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter your address"
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Enter your city"
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            placeholder="Enter your state"
          />
          <label htmlFor="pincode">Pincode</label>
          <input
            type="number"
            className="form-control"
            id="pincode"
            name="pincode"
            placeholder="Enter your pincode"
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            placeholder="Enter your country"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </section>
  );
}
