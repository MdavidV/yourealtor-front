import React from "react";
import Logo from "../../../assets/Logo_Fixed.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => {
  return (
    <header>
      <nav className="nav-profile">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo my-2 mx-4">
            <Link to="/">
              <img src={Logo} className="logo-img" />
            </Link>
          </div>

          <div className="user mx-4">
            <p>
              {" "}
              <i className="bi bi-person-fill m-1"></i>{" "}
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
