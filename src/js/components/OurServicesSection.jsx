import React from "react";
import { Col, Container, Row } from "reactstrap";
import Image from "../../assets/Footer_Img_Section.jpg";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="our-services-container d-flex ">
      <Container>
        <Row className="cont d-flex justify-content-center align-items-center">
          <Col md="6">
            <div className="services-icon-container">
              <i className="bi bi-house"></i>
            </div>

            <div className="services-text-container">
              <h2 className="section-title text-center">Nuestros Servicios</h2>
              <p className="services-text ">
                En YOUREALTOR, nos distinguimos por nuestro innovador ecosistema
                inmobiliario, diseñado para proporcionar una experiencia
                integral y sin precedentes en el sector. Nuestra propuesta de
                valor radica en la creación de un entorno único que combina
                servicios tradicionales con soluciones tecnológicas avanzadas,
                garantizando resultados excepcionales para compradores,
                vendedores y arrendatarios.
              </p>
              <Link
                to="/our-services"
                className="text-center d-block mt-4 secondary-button-sm"
              >
                Descubre Nuestros Servicios
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Col xl="6" md="12">
        <div className="services-img-container">
          <div className="img-effect d-flex flex-column justify-content-center align-items-center">
            <div className="img-effect-text col-8 ">
              <h2 className="services-title">
                Busca vender o arrendar su inmueble?
              </h2>
              <p className=" text-white mt-3 services-text">
                Establecemos relaciones de confianza para arrendar o vender su
                inmueble con el mejor trato.
              </p>
            </div>
            <Link className="services-btn text-center ">Ofertar!</Link>
          </div>
          <img src={Image} alt="Deal Image" className="services-img" />
        </div>
      </Col>
    </div>
  );
};

export default OurServices;
