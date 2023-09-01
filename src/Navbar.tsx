export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pokedex
        </a>
        <div className="d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row-reverse">
            <li className="nav-item">
              <a className="nav-link brand" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
