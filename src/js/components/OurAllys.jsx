import React from "react";
import Logo from "../../assets/Logo_Allys.png";
import { Link } from "react-router-dom";

const OurAllys = () => {
  return (
    <>
      <h1 className="section-title mx-5 text-center">Nuestros Aliados</h1>
      <div className="our-allys-cont d-flex align-items-center justify-content-evenly">
        <div className="logo-cont d-flex flex-column align-items-center">
          <img src={Logo} alt="" />
          <a href="#" className="primary-button-l my-3">
            Descubre Mas!
          </a>
        </div>

        <div className="logo-cont d-flex flex-column align-items-center middle">
          <img src={Logo} alt="" />
          <a href="#" className="primary-button-l my-3">
            Descubre Mas!
          </a>
        </div>

        <div className="logo-cont d-flex flex-column align-items-center">
          <img src={Logo} alt="" />

          <Link to={'/confirmVIew'}>
            <a href="#" className="primary-button-l my-3">
              Descubre Mas!
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurAllys;
