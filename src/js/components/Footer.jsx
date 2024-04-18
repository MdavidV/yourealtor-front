import { Col, Container, Row } from "reactstrap";
import Logo from "../../assets/Logo.png";
import WhatsappApi from "../components/subcomponents/whatsappIcon.jsx";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <> 
      <Container
        className='whastapp_api' >
        <WhatsappApi />
      </Container>
      <Container className="footer-cont form-paragraph" fluid>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <Row className="mt-5">
            <Col xs="4" className="logo-footer">
              <Link to={"/"}>
                <img src={Logo} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="footer-links-list">
                <li className="footer-link">
                  <Link to='/properties'>Ventas</Link>
                </li>
                <li className="footer-link">
                  <Link>Arriendos</Link>
                </li>
                <li className="footer-link">
                  <Link>Permutar</Link>
                </li>
                <li className="footer-link">
                  <a href='#ourTeam'>Conocenos</a>
                </li>
                <li className="footer-link">
                  <Link to='/about-us'>Nuestra Historia</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="footer-links-list">
                <li className="footer-link">
                  <Link to='/privacy'>Politicas de Privacidad</Link>
                </li>
                <li className="footer-link">
                  <Link to='/contact'>Comienza tu carrera</Link>
                </li>
                <li className="footer-link">
                  <Link>FAQS</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="social-media-icons mt-2 ">
                <a
                  href="https://www.facebook.com/profile.php?id=61556430376948"
                  className="d-inline-block"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/yourealtor2/" className=" d-inline-block">
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/yourealtor/"
                  className=" d-inline-block"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className=" d-inline-block">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="py-4">
            <Col className="copy-rigth text-center">
              <p className="mt-3 footer-copy-text">
                Yourealtor Worldwide © 2024 All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
    
  );
};

export default Footer;
