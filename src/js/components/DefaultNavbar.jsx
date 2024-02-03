import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_unScrolled.png";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const DefaultNavbar = () => {
  const {user, isAuthenticated, logout} = useAuth();
  const [dropDownOpen, setdropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setdropDownOpen(!dropDownOpen);
  };


  return (
    <Nav className="d-flex nav-fixed-text justify-content-between align-items-center default-navbar w-100">
      <div className="">
        <NavItem className="mx-3">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </NavItem>
      </div>
      <div className="d-flex mx-5 ">
        <NavItem className="mx-3">
          <Link to={"/"}>
            <p>Compra</p>
          </Link>
        </NavItem>

        <NavItem className="mx-3">
          <Link to={"/"}>
            <p>Renta</p>
          </Link>
        </NavItem>

        <NavItem className="mx-3">
          <Link to={"/"}>
            <p>Vende</p>
          </Link>
        </NavItem>

        <NavItem className="mx-3">
          <Link to={"/"}>
            <p>Arrienda</p>
          </Link>
        </NavItem>

        <NavItem className="mx-3">
          <Link to={"/"}>
            <p>Contacta un agente Inmobiliario</p>
          </Link>
        </NavItem>

        {isAuthenticated ? (
          <>
            <NavItem
              className="mx-5 "
              onMouseEnter={toggleDropDown}
              onMouseLeave={toggleDropDown}
            >
              <Link to={"/profile"}>
                <p>
                  <i className="bi bi-person-fill mx-1"></i> {user.username.charAt(0).toUpperCase() + user.username.slice(1) }
                </p>
              </Link>
              <Dropdown isOpen={dropDownOpen} toggle={toggleDropDown}>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to={"/profile"}>Ir a mi perfil</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/' onClick={() => {
                      logout();
                    }}>
                      Cerrar sesion
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem className="mx-3">
              <Link to={"/Login"}>
                <p>Ingresa</p>
              </Link>
            </NavItem>
          </>
        )}
      </div>
    </Nav>
  );
};

export default DefaultNavbar;
