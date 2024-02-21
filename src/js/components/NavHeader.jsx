import React, { useState, useEffect } from "react";
import MainLogo from "../../assets/logo_unScrolled.png";
import Logo from "../../assets/Logo_Scrolled.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NavHeader = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [dropDownOpen, setdropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const toggleDropDown = () => {
    setdropDownOpen(!dropDownOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      light
      className={`mynavbar ${isTop ? "navbar__collapse" : "navbar__fixed"}`}
    >
      <NavbarBrand href="/">
        <img src={isTop ? MainLogo : Logo} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto mynavbarItems" navbar>
          <NavItem>
            <NavLink href="/componente/">
              <p>Compra</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/">
              <p>Renta</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/">
              <p>Vende</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/">
              <p>Arrienda</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/">
              <p>Contacta un agente Inmobiliario</p>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto myLogin" navbar>
          {isAuthenticated ? (
            <>
              <NavItem
                className="mx-5 "
                onMouseEnter={toggleDropDown}
                onMouseLeave={toggleDropDown}
              >
                <NavLink>
                  <Link to={"/profile"}>
                    <i className="bi bi-person-fill mx-1"></i>{" "}
                    <p>
                      {user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)}
                    </p>
                  </Link>
                </NavLink>

                <Dropdown isOpen={dropDownOpen} toggle={toggleDropDown}>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to={"/profile"}>Ir a mi perfil</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to="/"
                        onClick={() => {
                          logout();
                        }}
                      >
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
                <NavLink>
                  <Link to={"/Login"}>
                    <p>Ingresa</p>
                  </Link>
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavHeader;
