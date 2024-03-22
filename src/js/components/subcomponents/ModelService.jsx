import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img1 from "../../../assets/model-service.jpg";


const ModelService = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="12">
            <img src={Img1} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ModelService;
