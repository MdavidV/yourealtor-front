import React, { useState } from "react";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import Img1 from "../../assets/About_us3.png";
import Img2 from "../../assets/About_us4.png";
import CountUp from "react-countup";
import { PiHandshakeFill } from "react-icons/pi";
import ModelService from "../components/subcomponents/ModelService";

const AboutUsView = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <NavHeader isHome={false} />
      {/* <Banner /> */}

      <Container className="my-5">
        <Nav tabs className="about-us-menu">
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => toggle("1")}
            >
              Yourealtor
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggle("2")}
            >
              Contamos Con...
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => toggle("3")}
            >
              Nuestro Alcance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "4" ? "active" : ""}
              onClick={() => toggle("4")}
            >
              Modelo de Servicio
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="justify-content-center my-3">
              <Col className="py-3" md="9">
                <h1 className="section-title my-2">Quienes Somos ?</h1>
                <p>
                  En YOUREALTOR, somos una firma líder en el mercado
                  inmobiliario colombiano, comprometidos con la excelencia y la
                  satisfacción total de nuestros clientes. Nuestro equipo de
                  expertos, liderado por Héctor Gallego, se especializa en
                  entender y superar las expectativas de nuestros clientes
                  mediante soluciones personalizadas y un servicio de alta
                  calidad. Con el respaldo de importantes certificaciones,
                  aseguramos una experiencia inmobiliaria confiable y de primer
                  nivel. Contáctanos para descubrir cómo podemos guiarte hacia
                  el éxito inmobiliario con profesionalismo y precisión.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center my-3">
              <Col md="9">
                <h2 className="section-title my-2">Nos especializamos...</h2>
                <p>
                  En ejecutar las estrategias de Trade marketing para la
                  búsqueda de Inmuebles para nuestros clientes en las
                  principales ciudades y centros urbanos donde administramos a
                  nuestro equipo de realtors.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center my-5">
              <Col md="9">
                <img src={Img1} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row className="my-5">
              {activeTab === "2" ? (
                <>
                  <Col md="4" className="text-center">
                    <CountUp
                      start={0}
                      end={1200}
                      duration={2.75}
                      prefix="+"
                      className="countup"
                    />
                    <h4 className="section-title">Inmuebles</h4>
                  </Col>

                  <Col md="4" className="text-center">
                    <CountUp
                      start={0}
                      end={90}
                      duration={2.75}
                      prefix="+"
                      className="countup"
                    />
                    <h4 className="section-title">Realtors</h4>
                  </Col>

                  <Col md="4" className="text-center">
                    <CountUp
                      start={0}
                      end={150}
                      duration={2.75}
                      prefix="+"
                      className="countup"
                    />
                    <h4 className="section-title">Ciudades y Municipios</h4>
                  </Col>
                </>
              ) : (
                ""
              )}
            </Row>

            <Row className="my-5">
              <Col>
                <img src={Img2} alt="" className="w-100" />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row className="about-us-range my-5">
              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-person"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>Representamos Propietarios</h3>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-binoculars"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>Representamos Arrendatarios</h3>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>Administramos tu Propiedad</h3>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>Investigacion de Mercados</h3>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="about-us-range  mt-5">
              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-journal-check"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>Administramos Contratos</h3>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-gear"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>BPO Gestion Inmobiliaria</h3>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <i class="bi bi-hammer"></i>
                  </div>
                  <div className="range-text-container">
                    <h3>Flipping Houses</h3>
                  </div>
                </div>
              </Col>

              <Col md="3">
                <div className="range-container d-flex flex-column justify-content-center align-items-center ">
                  <div className="range-icon-container">
                    <PiHandshakeFill />
                  </div>
                  <div className="range-text-container">
                    <h3>Consultamos y evaluamos tu nmueble</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId='4'>
            <ModelService />
          </TabPane>
        </TabContent>
      </Container>

      <Footer />
    </>
  );
};

export default AboutUsView;
