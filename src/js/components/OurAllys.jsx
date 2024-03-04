import React from "react";
import Logo from "../../assets/Allys-1.png";
import { Link } from "react-router-dom";
import PdfUrl from '../../assets/polizas.pdf'

import { Col, Container, Row } from "reactstrap";

const OurAllys = () => {
  return (
    <div className=" d-flex justify-content-evenly">
      <Row className=" align-items-center justify-content-evenly w-100">
        <Col md="12" className="our-allys-cont d-flex flex-column align-items-center justify-content-center">
          <h1 className="banner-tittle mx-5 text-center">
            Descubre Como Adquirir tu Poliza
          </h1>
          <a href={PdfUrl} download="polizas.pdf" className="primary-button-l mt-5">
              Descubrelo Aqui!
            </a>
        </Col>
      </Row>
    </div>

  );
};

export default OurAllys;
