import React from "react";
import Img1 from "../../assets/Services_Img_1.jpg";
import Img2 from "../../assets/Services_Img_2.jpg";
import { Col, Container, Row } from "reactstrap";
import { FaBuilding } from "react-icons/fa";

const ServicesInfo = () => {
  return (
    <div className="services-info">
      <Container>
        <Row className="justify-content-center align-items-center my-3">
          <Col md="6">
            <h1 className="section-title my-2 text-center">
              Nuestros Servicios
            </h1>
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
          <Col xs={{ order: 2 }} lg={{ order: 1, size: 6 }}>
            <div className="services-img-container-2 d-flex justify-content-center align-items-center">
              <img src={Img2} alt="" className="services-img" />
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center  "
            xs={{ order: 1 }}
            lg={{ order: 2, size: 6 }}
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

        <Row className="my-5 last-section-services">
          <Col md="6" className="all-services d-flex justify-content-end">
            <FaBuilding />
          </Col>

          <Col md="6">
            <div className="all-services-cont">
              <div className="service-field">
                <p className="service-field-text">
                  {" "}
                  Administración y operación de inmuebles en cualquier ubicación
                  del Colombia.
                </p>
              </div>
              <div className="service-field">
                <p className="service-field-text">
                  {" "}
                  Operación, mantenimiento y remodelación de propiedades.
                </p>
              </div>
              <div className="service-field">
                <p className="service-field-text">
                  Gestión de permisos, licencias, Impuestos al día y tramites
                  inmobiliarios en todo el país.
                </p>
              </div>
              <div className="service-field">
                <p className="service-field-text">
                  {" "}
                  Administración de Contratos.
                </p>
              </div>
              <div className="service-field">
                <p className="service-field-text">
                  {" "}
                  Administración de la remodelación.
                </p>
              </div>
              <div className="service-field">
                <p className="service-field-text">
                  Reportes Financieros de la propiedad.
                </p>
              </div>
              <div className="service-field">
                <p className="service-field-text">BPO de Gestión Documental Inmobiliaria.</p>
              </div>
              <div className="service-field">
                <p className="service-field-text">Consultoría en administración Inmobiliaria.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesInfo;
