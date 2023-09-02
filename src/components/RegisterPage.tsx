import React, { useState } from "react";
import { UserAuth } from "../config/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(email, password);

    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/");

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card col-md-5">
        <div className="card-body">
          <h2 className="card-title text-center">Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
              Register
            </button>
          </form>
          <div className="mt-3">
            <p>
              Already have an account?{" "}
              <Link to="/login">Click here to log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;