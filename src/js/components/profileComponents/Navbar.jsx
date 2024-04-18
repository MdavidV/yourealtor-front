import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext.jsx";

const Navbar = () => {
  
  const [userName, setUserName] = useState('');

  const {user} = useAuth();

  useEffect(() => {
    if(user) {
      setUserName(user.username);
    }

  }, [user])
  




  return (
    <header>
      <nav className="nav-profile">
        <div className="nav-cont d-flex justify-content-between align-items-center">
          <div className="logo my-2 mx-4">
            <Link to="/">
              <img src={Logo} className="logo-img" />
            </Link>
          </div>

          <div className="user mx-4">
            <p>
              {" "}
              <i className="bi bi-person-fill m-1"></i>{" "}
              {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
