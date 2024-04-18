import { useState, useEffect } from "react";
import MainLogo from "../../assets/Logo.png";
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
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import PropTypes from 'prop-types';

const NavHeader = ({ isHome }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [dropDownOpen, setdropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggle = () => setIsOpen(!isOpen); 
  const toggleDropDown = () => setdropDownOpen(!dropDownOpen);

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
      <Container fluid className="navbarfluid_home">
        <Row
          className={`${isOpen ? 'mynavbar__mobile' : ''}`}
        >
          <Col>
          <Navbar
          expand="lg"
          fixed="top"
          light
          className={`mynavbar ${isTop
              ? "navbar__collapse nav-fixed-text"
              : "navbar__fixed nav-scrolled-text"
          } ${!isHome? 'same_bar' : ''}`}
        >
          <NavbarBrand href="/" className="">
            <img src={ MainLogo } alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="mobile_collapse">
            <Nav className="ml-auto mynavbarItems" navbar>
              <NavItem>
                <NavLink href="/our-services">
                  <p>Servicios</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to="/about-us">
                  <p>Quienes Somos?</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/offer">
                  <p>Oferta tu Inmueble</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/blogs">
                  <p>Blog</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="#contactanos">
                  <p>Contactanos</p>
                </Link>
              </NavItem>
              <NavItem
                onMouseEnter={toggleDropDown}
                onMouseLeave={toggleDropDown}
              >
                {isAuthenticated ? (
                  <>
                    <NavLink href="/profile">
                      <i className="bi bi-person-fill mx-1"></i>{" "}
                      <span className="nav_user_name">
                        {user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)}
                      </span>
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
                  </>
                ) : (
                  <>
                    <Link href="/Login">
                      <p>Ingresa</p>
                    </Link>
                  </>
                )}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          </Col>
        </Row>
      </Container>
    </>
    
  );
              
};

NavHeader.propTypes = {
  isHome: PropTypes.bool.isRequired
};

export default NavHeader;
