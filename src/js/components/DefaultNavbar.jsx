import React from 'react';
import logo from "../../assets/logo_unScrolled.png";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const DefaultNavbar = () => {
  return (
    <Nav className='d-flex nav-fixed-text justify-content-between align-items-center default-navbar w-100'>
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
        <NavItem className="mx-3">
          <Link to={"/Login"}>
            <p>Ingresa</p>
          </Link>
        </NavItem>
      </div>
    </Nav>

  )
}

export default DefaultNavbar
