import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img1 from "../../../assets/model-1.png";
import Img2 from "../../../assets/model-2.png";
const ModelService = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <img src={Img1} alt="" className="w-100" />
          </Col>
          <Col md="6">
            <img src={Img2} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ModelService;
