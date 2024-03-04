import React from "react";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Col, Container, Row } from "reactstrap";
import Img1 from '../../assets/Spaces-1.png';
import Img2 from '../../assets/Spaces-2.png';
import Img3 from '../../assets/Spaces-3.png';
import Img4 from '../../assets/Spaces-4.png';
import Img5 from '../../assets/Spaces-5.png';


const SpacesView = () => {
  return (
    <div className="spaces-view">
      <NavHeader />
      <Banner />

      <Container>
        <Row>
          <Col md='4'>
              <div className="spaces-img-container">
                <img src={Img1} alt="Spaces Casas y Fincas" className="w-100"/>
              </div>
          </Col>


          <Col md='4'>
              <div className="spaces-img-container">
                <img src={Img2} alt="Spaces Locales comerciales" className="w-100"/>
              </div>
          </Col>


          <Col md='4'>
              <div className="spaces-img-container">
                <img src={Img3} alt="Spaces Apartamentos" className="w-100"/>
              </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <h2>Como servimos...</h2>
            <div className="spaces-icons-container">
              
            </div>
          </Col>
        </Row>

        <Row>
          <Col md='4'>
            <div className="spaces-img-container">
              <img src={Img4} alt="" className="w-100"/>
            </div>
            <div className="spaces-icons-warehouses">
            <h2>Como servimos...</h2>
            </div>
          </Col>

          <Col md='8'>
            <div className="spaces-img-container">
              <img src={Img5} alt="" className="w-100"/>
            </div>

            <div className="spaces-icons-office">
            <h2>Como servimos...</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SpacesView;
