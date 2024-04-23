import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../../index.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 ">
        <div className="container">
          <Link to={"/"} className="navbar-brand text-white">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item  mx-3">
                <NavLink
                  to={"about"}
                  className={({ isActive }) =>
                    isActive ? "active nav-link text-white" : "nav-link"
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item  mx-3">
                <NavLink
                  to={"portfolio"}
                  className={({ isActive }) =>
                    isActive ? "active nav-link text-white" : "nav-link"
                  }
                >
                  PORTFOILO
                </NavLink>
              </li>
              <li className="nav-item  mx-3">
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    isActive ? "active nav-link text-white" : "nav-link"
                  }
                >
                  CONTACT
                </NavLink>
              </li>
              {/* <li className="nav-item mx-3">
          <Link to={"portfolio"} className='nav-link '>PORTFOILO</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to={"contact"} className='nav-link '>CONTACT</Link>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
