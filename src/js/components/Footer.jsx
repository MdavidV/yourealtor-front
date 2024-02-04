import React from "react";
import { Col, Container, Row } from "reactstrap";
import Logo from "../../assets/Logo_Scrolled.png";
import SocialMedia1 from "../../assets/Facebook_logo.png";
import SocialMedia2 from "../../assets/Instagram_logo.png";
import SocialMedia3 from "../../assets/Linkedin_logo.png";
import SocialMedia4 from "../../assets/Whatsapp_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-cont form-paragraph">
      <Container>
        <Row className="py-4">
          <Col xs="2">
            <Link to={'/'}>
              <img src={Logo} />
            </Link>
          </Col>

          <Col xs="3">
            <div className="contact-list d-flex flex-column">
              <h3 className="footer-title">Contacto</h3>
              <a href="#" className="mt-2">
                {" "}
                <i class="bi bi-geo-alt-fill"></i> Av. 26 # 12 - 01
              </a>
              <a href="#" className="mt-2">
                {" "}
                <i class="bi bi-envelope-fill"></i> info@yourealtor.co
              </a>
            </div>
          </Col>

          <Col xs="4">
            <div className="quick-links d-flex flex-column">
              <h3 className="footer-title">Enlaces Rapidos</h3>
              <div className="links-cont">
                <div className="links-cont1 mt-2">
                  <a href="#">
                    <i class="bi bi-arrow-right-circle-fill me-2"></i>FAQ
                  </a>
                  <a href="#" className="mx-4">
                    <i class="bi bi-arrow-right-circle-fill me-2"></i>Acerca de
                  </a>
                </div>
                <div className="links-cont2 mt-2">
                  <a href="#">
                    <i class="bi bi-arrow-right-circle-fill me-2"></i>Buscar
                    apartamento
                  </a>
                  <a href="#" className="mx-4">
                    <i class="bi bi-arrow-right-circle-fill me-2"></i>Contactanos
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col xs="3">
            <h3 className="footer-title">Redes Sociales</h3>
            <div className="social-media-icons mt-2">
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
            <p className="mt-3">Yourealtor Brocker © 2024 All rights reserved</p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
