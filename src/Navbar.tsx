import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "./config/AuthContext";
import "./sytles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link to={"/"} className="link">
          <a className="navbar-brand">Pokedex</a>
        </Link>
        <div className="d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row-reverse">
            {user && (
              <li className="nav-item">
                <Link to={"/register"} className="link">
                  <a className="nav-link" onClick={handleLogout}>
                    Logout
                  </a>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/login" className="link">
                <a className="nav-link brand" aria-current="page" href="#">
                  {user ? "" : "Login"}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="link">
                <a className="nav-link">
                  {user ? (
                    `Welcome ${user.email}`
                  ) : (
                    <Link to="/register " className="link">
                      Register
                    </Link>
                  )}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
