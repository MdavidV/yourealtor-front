import React from "react";
import Asset1 from "../../assets/About_Us1.jpg";
import Asset2 from "../../assets/About_Us2.jpg";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Container className="my-5 aboutUs">
      <Row>
        <Col>
          <h1 className="section-title my-2 text-center">Quienes Somos?</h1>
        </Col>
      </Row>
      <Row className="mt-5 aboutUs__section">
        <Col className="aboutUs__content aboutUs__content--images" sm="12" md="6">
          <Row>
            <Col sm="6">
              <img src={Asset1} className="aboutUs__content--image1" />
            </Col>
            <Col sm="6">
              <img src={Asset2} className="aboutUs__content--image2" />
            </Col>
          </Row>          
        </Col>
        <Col className="aboutUs__content aboutUs__content--texts" sm="12" md="6">
            <div className="aboutUs__content--text1">
              <h2 className="section-title my-4">Nuestro Equipo De Trabajo.</h2>
              <p className="aboutUs__content--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                repudiandae quam culpa illum reprehenderit quis molestias,
              </p>
            </div>

            <div className="aboutUs__content--text2">
              <h2 className="section-title ">CEO</h2>
              <p className="aboutUs__content--text">
                Lorem ipsum
              </p>
            </div>
            <div className="aboutUs__content--text3">
              <h2 className="section-title ">COO</h2>
              <p className="aboutUs__content--text">
                Lorem ipsum
              </p>
            </div>

            <div className="aboutUs__content--button">
                <Link to='/about-us' className="secondary-button-xl">
                    Conoce mas!
                </Link>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
