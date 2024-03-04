import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img1 from "../../assets/Spaces-1.png";
import Img2 from "../../assets/Spaces-2.png";
import Img3 from "../../assets/Spaces-3.png";
import Img4 from "../../assets/Spaces-4.png";
import Img5 from "../../assets/Spaces-5.png";
import Img6 from "../../assets/Services-1.png";
import Img7 from "../../assets/Services-2.png";
import Img8 from "../../assets/Services-3.png";

const SpacesView = () => {
  return (
    <div className="spaces-view">
      <Container>
        <h1 className="section-title mt-5">
          5 pasos para tener el espacio que deseas...
        </h1>
        <Row className="steps-container my-3 mt-5">
          <Col md="3" className="step-container d-flex flex-column justify-content-center align-items-center">
            <div className="step-title">
              <h3 className='banner-tittle'>Buscamos</h3>
            </div>
            <div className="step-text">
              <p>La mejor opcion de tu presupuesto y expectativa.</p>
            </div>
          </Col>
          <Col md="3" className="step-container d-flex flex-column justify-content-center align-items-center">
            <div className="step-title">
              <h3 className='banner-tittle'>Encontramos</h3>
            </div>
            <div className="step-text">
              <p>Lo que buscas en nuestro inventario o en el mercado.</p>
            </div>
          </Col>
          <Col md="3" className="step-container d-flex flex-column justify-content-center align-items-center">
            <div className="step-title">
              <h3 className='banner-tittle'>Presentamos</h3>
            </div>
            <div className="step-text">
              <p>Las mejores opciones de compra, venta y arriendo.</p>
            </div>
          </Col>
          <Col md="3" className="step-container d-flex flex-column justify-content-center align-items-center">
            <div className="step-title">
              <h3 className='banner-tittle'>Seleccionas</h3>
            </div>
            <div className="step-text">
              <p>Lo que mas te guste y se acomode a tu presupuesto.</p>
            </div>
          </Col>
        </Row>

        <Row className="my-5 justify-content-center">
          <Col md="3" className="step-container last-step">
            <div className="step-title">
              <h3 className='banner-tittle'>Firmas</h3>
            </div>
            <div className="step-text">
              <p className="text-center">Y te mudas al espacio que te haga sonar y crecer.</p>
            </div>
          </Col>
        </Row>
        <h2 className="section-title mt-2">Como servimos...</h2>
        <div className="first-section">
          <Row className="my-2">
            <Col md="4">
              <div className="spaces-img-container">
                <img src={Img1} alt="Spaces Casas y Fincas" className="w-100" />
              </div>
            </Col>

            <Col md="4">
              <div className="spaces-img-container">
                <img
                  src={Img2}
                  alt="Spaces Locales comerciales"
                  className="w-100"
                />
              </div>
            </Col>

            <Col md="4">
              <div className="spaces-img-container">
                <img src={Img3} alt="Spaces Apartamentos" className="w-100" />
              </div>
            </Col>
          </Row>

          <Row className="my-4">
            <Col className="col-12">
              <div className="spaces-icons-container d-flex justify-content-center">
                <img src={Img6} alt="" className="" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="second-section mb-5">
          <Row className=" my-4">
            <Col md="4">
              <div className="spaces-img-container">
                <img src={Img4} alt="" className="w-100" />
              </div>
              <div className="spaces-icons-warehouses d-flex justify-content-center">
                <img src={Img7} alt="" srcset="" />
              </div>
            </Col>

            <Col md="8">
              <div className="spaces-img-container ">
                <img src={Img5} alt="" className="w-100" />
              </div>

              <div className="spaces-icons-office d-flex justify-content-center">
                <img src={Img8} alt="" srcset="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SpacesView;
