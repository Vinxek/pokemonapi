import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "./config/AuthContext";
import "./sytles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/pokemonapi");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link to={"/pokemonapi/"} className="link">
          <a className="navbar-brand">Pokedex</a>
        </Link>
        <div className="d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row-reverse">
            {user && (
              <li className="navbar-brand">
                <Link to={"pokemonapi/register"} className="link">
                  <a className="navbar-brand" onClick={handleLogout}>
                    Logout
                  </a>
                </Link>
              </li>
            )}
            <li className="navbar-brand">
              {user ? (
                ""
              ) : (
                <Link to="/pokemonapi/login" className="link">
                  <a className="navbar-brand" aria-current="page">
                    Login
                  </a>
                </Link>
              )}
            </li>
            <li className="navbar-brand">
              {user ? (
                `Welcome`
              ) : (
                <Link to="pokemonapi/register " className="link">
                  <a className="navbar-brand" aria-current="page">
                    Register
                  </a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
