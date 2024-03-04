import React from "react";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import { Col, Container, Row } from "reactstrap";
import Banner from "../components/Banner";
import ServicesCard from "../components/subcomponents/ServicesCard";
import Img1 from "../../assets/Services_Img_1.jpg";
import Img2 from "../../assets/Services_Img_2.jpg";

const ServicesView = () => {
  return (
    <div className="services-view">
      <NavHeader />
      <Banner />

      <ServicesCard />

      <Container>
        <Row className="justify-content-center align-items-center my-3">
          <Col md="6">
            <h1 className="section-title my-2 text-center">
              Nuestros Servicios
            </h1>
            {/* <p className="map-text">
              <strong> YOUREALTOR </strong> presenta un amplio espectro de
              servicios inmobiliarios, diseñados meticulosamente para cubrir
              cada una de tus necesidades. Desde la valoración precisa de
              propiedades hasta la implementación de estrategias personalizadas
              y la ejecución profesional de transacciones, cada servicio es una
              pieza clave en nuestra promesa de brindarte un soporte integral.
              Nos dedicamos a la gestión eficiente de inmuebles, adaptando
              nuestros servicios a las necesidades específicas de cada cliente y
              asegurando una experiencia inmobiliaria integral que aporte valor
              significativo a cada interacción.
            </p> */}
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col lg="6">
            <div className="services-text">
              <p className="about-us-text my-3">
                En YOUREALTOR, nos distinguimos por nuestro innovador ecosistema
                inmobiliario, diseñado para proporcionar una experiencia
                integral y sin precedentes en el sector. Nuestra propuesta de
                valor radica en la creación de un entorno único que combina
                servicios tradicionales con soluciones tecnológicas avanzadas,
                garantizando resultados excepcionales para compradores,
                vendedores y arrendatarios.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="services-img-container d-flex justify-content-center align-items-center">
              <img
                src={Img1}
                alt="Ecosistema Inmobiliario"
                className="services-img"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col  xs={{order: 2}} lg={{order:1, size: 6}} >
            <div className="services-img-container-2 d-flex justify-content-center align-items-center">
              <img src={Img2} alt="" className="services-img" />
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center  "
            xs={{order: 1}}  lg={{order:2, size: 6}}
          >
            <div className="services-text">
              <p className="about-us-text mt-3">
                Nuestro ecosistema inmobiliario no solo representa una propuesta
                de valor única en el mercado, sino también una promesa de
                confianza, innovación y excelencia en el servicio. Contáctanos
                para experimentar la diferencia YOUREALTOR y transformar tus
                objetivos inmobiliarios en realidades exitosas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ServicesView;
