import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img1 from "../../assets/Properties-1.png";
import Img2 from "../../assets/Properties-2.png";
import Img3 from "../../assets/Properties-3.png";
import Img4 from "../../assets/Properties-4.png";

const PropertyView = () => {
  return (
    <div className="spaces-view">
      <Container>
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
                <img src={Img4} alt="" className="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PropertyView;
