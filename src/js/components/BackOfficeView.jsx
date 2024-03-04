import React from "react";
import Img1 from "../../assets/BPO-1.png";
import { Col, Container, Row } from "reactstrap";

const BackOfficeView = () => {
  return (
    <div className="back-office-container">
      <Container>
        <Row className="my-4">
          <Col md="12">
            <img src={Img1} className="w-100 bpo-img" />
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <h1 className="section-title">
              ¿Qué es y por qué externalizar el servicio de back office?
            </h1>
            <p className="bpo-text mt-2">
              El Back Office de una compañía engloba las tareas de gestión de
              los procesos administrativos, la contabilidad, seguimiento de
              clientes, gestión de recursos humanos… etc. En definitiva, las
              cuestiones internas orientadas a gestionar la propia empresa.
            </p>
          </Col>
        </Row>

        <Row className="my-5 justify-content-between">
          <Col md="5">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="bpo-services-list">
              <ul className="left-list">
                <li className="bpo-text">
                  Digitalización, gestión e indexación de documentación
                  electrónica.
                </li>
                <li className="bpo-text">Verificación de datos</li>
                <li className="bpo-text">Tramitación y custodia documental</li>
                <li className="bpo-text">Gestión de archivo temporal.</li>
                <li className="bpo-text">Tratamiento de facturación.</li>
                <li className="bpo-text">Supervisión del cumplimiento de la normativa FATCA.</li>
                <li className="bpo-text">Gestión de Cuentas Por Cobrar.</li>
              </ul>
            </div>
          </Col>

          <Col md="5">
            <h2 className="section-title">Te garantizamos</h2>
            <ul className="checked-list">
                <li className="bpo-text">Minimizar tiempos en la gestion de diferentes departamentos.</li>
                <li className="bpo-text">Reducir costes administrativos notablemente.</li>
                <li className="bpo-text">Optimizar el tiempo al ejecutar las tareas asignadas.</li>
                <li className="bpo-text">Mejorar en los tiempos de respuesta para potencias la experiencia de usuario</li>
                <li className="bpo-text">Enfoque en lo esencial al delegar tareas administrativas.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BackOfficeView;
