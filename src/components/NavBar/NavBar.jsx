import Cart from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/src/assets/logo.jpeg" alt="Logo" width="30" height="30" />
        </a>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Link 3
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <Cart></Cart>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
