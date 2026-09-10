import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <div className="navbar-brand">
        <h4>My Website</h4>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">

          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "active" : "")
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "active" : "")
              }
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-link " + (isActive ? "active" : "")
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;