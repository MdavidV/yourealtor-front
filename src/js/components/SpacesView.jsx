import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img1 from "../../assets/Spaces-1.png";
import Img2 from "../../assets/Spaces-2.png";
import Img3 from "../../assets/Spaces-3.png";
import Img4 from "../../assets/Spaces-4.png";
import Img5 from "../../assets/Spaces-5.png";
import Img6 from "../../assets/Services-1.png";
import Img7 from "../../assets/Services-2.png";
import Img8 from "../../assets/Services-2.png";

const SpacesView = () => {
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
