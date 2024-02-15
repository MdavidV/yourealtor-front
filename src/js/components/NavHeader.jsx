import React, { useState, useEffect } from 'react';
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
} from 'reactstrap';

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="md" fixed="top" light className={`mynavbar ${isTop ? "navbar__collapse" : "navbar__fixed"}`}>
      <NavbarBrand href="/"><img src={isTop ? MainLogo : Logo} alt="" /></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto mynavbarItems" navbar>
          <NavItem>
            <NavLink href="/componente/"><p>Compra</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/"><p>Renta</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/"><p>Vende</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/"><p>Arrienda</p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/componente/"><p>Contacta un agente Inmobiliario</p></NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto myLogin" navbar>
          <NavItem>
            <NavLink href="/componente/"><p>Ingresa</p></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavHeader;
