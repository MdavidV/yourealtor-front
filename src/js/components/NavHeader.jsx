import { useState, useEffect } from "react";
import Logo from "../../assets/Logo_Fixed.jpg";
import MainLogo from "../../assets/Logo_Fixed_NoBG.png";
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
import PropTypes from 'prop-types';

const NavHeader = ({ isHome }) => {
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
    <>
      {
        !isHome ? <div className="reserved__space"></div> : ''
      }
      <Navbar
      expand="md"
      fixed="top"
      light
      className={`mynavbar
      ${isTop
          ? "navbar__collapse nav-fixed-text"
          : "navbar__fixed nav-scrolled-text"
      }`}
    >
      <NavbarBrand href="/">
        <img src={isTop ? MainLogo : Logo} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto mynavbarItems" navbar>
          <NavItem>
            <NavLink href="/our-services">
              <p>Servicios</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about-us">
              <p>Quienes Somos?</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">
              <p>Oferta tu Inmueble</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contactanos">
              <p>Contactanos</p>
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
                <NavLink className="nav_user">
                  <Link to={"/profile"}>
                    <i className="bi bi-person-fill mx-1"></i>{" "}
                    <span className="nav_user_name">
                      {user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)}
                    </span>
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
                <NavItem>
                  <Link to={"/Login"}>
                    <p>Ingresa</p>
                  </Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
    
  );
              
};

NavHeader.propTypes = {
  isHome: PropTypes.bool.isRequired
};

export default NavHeader;
