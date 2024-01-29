import React from 'react';
import Logo from '../../assets/Logo_Scrolled.png';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const ScrolledNavbar = () => {
  return (
    <Nav className='d-flex justify-content-between align-items-center scrolled nav-scrolled-text'>
    <div className="img-container">
      <NavItem className="mx-3">
        <Link to={"/"}>
          <img src={Logo} alt="" />
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
      <NavItem className="mx-3">
        <Link to={"/Login"}>
          <p>Ingresa</p>
        </Link>
      </NavItem>
    </div>

    <div className="mx-3">
        <Link to={'/'} className='primary-button-l'>
            Contactanos!
        </Link>
    </div>
  </Nav>
  )
}

export default ScrolledNavbar
