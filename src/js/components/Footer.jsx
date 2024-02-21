import React from "react";
import { Col, Container, Row } from "reactstrap";
import Logo from "../../assets/Logo_Fixed.jpg";
import SocialMedia1 from "../../assets/Facebook_logo.png";
import SocialMedia2 from "../../assets/Instagram_logo.png";
import SocialMedia3 from "../../assets/Linkedin_logo.png";
import SocialMedia4 from "../../assets/Whatsapp_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-cont form-paragraph">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Row className="mt-5">
          <Col xs="4">
            <Link to={"/"}>
              <img src={Logo} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Compra</li>
              <li>Venta</li>
              <li>Renta</li>
              <li>Conocenos</li>
              <li>Nuestra Historia</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Testimonios</li>
              <li>Comienza tu carrera</li>
              <li>FAQS</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="social-media-icons mt-2 text-center">
              <a href="#" className="">
                <img src={SocialMedia1} alt="" />
              </a>
              <a href="#" className="ms-3">
                <img src={SocialMedia2} alt="" />
              </a>
              <a href="#" className="ms-3">
                <img src={SocialMedia3} alt="" />
              </a>
              <a href="#" className="ms-3">
                <img src={SocialMedia4} alt="" />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="py-4">
          <div className="copy-rigth text-center">
            <p className="mt-3 footer-copy-text">
              Yourealtor Worldwide © 2024 All rights reserved
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
