import React from "react";
import image1 from "../../assets/pngwing.com.png";
import image2 from "../../assets/libertadorLogo.png";

import { Col, Container, Row } from "reactstrap";

const OurAllys = () => {
  return (
    <div className="our-allys-cont">
      <Row className=" flex-column align-items-center justify-content-evenly w-100 ">
        <Col md="12">
          <h1 className="banner-tittle mx-5 text-center">
            Descubre Como Adquirir tu Poliza con nuestros Aliados
          </h1>
        </Col>

        <Col md="12" lg={6} className="d-flex justify-content-center allys-ally-cont">
          <Col className="ally-container">
            <img src={image1} alt="" />
            <a
              href="https://www.segurossura.com.co/paginas/hogar/inicio.aspx"
              download="polizas.pdf"
              className="primary-button-l mt-5"
            >
              Descubrelo Aqui!
            </a>
          </Col>
          <Col className="ally-container">
            <img src={image2} alt="" />
            <a
              href="https://www.ellibertador.co/"
              className="primary-button-l mt-5"
            >
              Descubrelo Aqui!
            </a>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default OurAllys;
