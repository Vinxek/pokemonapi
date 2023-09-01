import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <a className="navbar-brand">Pokedex</a>
        </Link>
        <div className="d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row-reverse">
            <li className="nav-item">
              <a className="nav-link brand" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/register"}>
                <a className="nav-link">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
