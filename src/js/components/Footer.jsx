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
                <Link>Compra</Link>
              </li>
              <li className="footer-link">
                <Link>Venta</Link>
              </li>
              <li className="footer-link">
                <Link>Renta</Link>
              </li>
              <li className="footer-link">
                <Link>Conocenos</Link>
              </li>
              <li className="footer-link">
                <Link>Nuestra Historia</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="footer-links-list">
              <li className="footer-link">
                <Link>Testimonios</Link>
              </li>
              <li className="footer-link">
                <Link>Comienza tu carrera</Link>
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
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/yourealtor2/" className=" d-inline-block">
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/yourealtor/"
                className=" d-inline-block"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#" className=" d-inline-block">
                <i class="bi bi-whatsapp"></i>
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
