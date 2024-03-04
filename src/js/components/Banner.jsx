import React, { useEffect } from "react";
import bg from "../../assets/Banner_bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useData } from "../../contexts/DataContext";

const Banner = () => {
  const navigate = useNavigate();
  const { 
    data, 
    fetchData, 
    cities, 
    getAllCities,
    dataFiltered,
    filteringData
} = useData();

useEffect(()=>{
  getAllCities();
  fetchData();
},[])


  const handleChange = () => {
    const selectedService = 'Arriendo';
    navigate("/properties", { state: { dataFiltered, selectedService} });
  };
  const handleChanges = () => {
    const selectedService = 'Arriendo';
    navigate("/properties", { state: { dataFiltered, selectedService} });
  };

  return (
    <div className="banner">
      <img src={bg} alt="" className="img-banner" />
      <div className="banner-dark">
        <Container className="banner_content" fluid>
          <Row className="fixed-position-banner ">
            <Col className="d-flex flex-column justify-content-center align-items-center ">
              <div className="title-container m-3">
                <h1 className="banner-tittle">
                  {" "}
                  Find Real Estate <br /> That Suits You
                </h1>
                <p className="banner-text">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="buttons-container  m-3">
                <button
                  onClick={handleChange}
                  className="primary-button-xl mx-3"
                >
                  Arrienda
                </button>
                <button onClick={handleChanges} className="primary-button-xl mx-3">
                  Compra
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
