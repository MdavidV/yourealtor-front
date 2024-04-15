import React, { useEffect, useState } from "react";
import bg from "../../assets/Banner_bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useData } from "../../contexts/DataContext";

const Banner = () => {
  
  const [selectedService, setSelectedService] = useState('');
  
  const navigate = useNavigate();
  const { 
    data,
    fetchData, 
    cities, 
    dataFiltered,
    filteringData
} = useData();

useEffect(()=>{
  fetchData();
},[])

  const handleChangeArriendo = (e) => {
    e.preventDefault();

    let parametros = {
        Ciudad: '',
        Tipo_Servicio: 'Alquiler',
        Tipo_Activo: '',
    };

    const { Ciudad, Tipo_Servicio, Tipo_Activo } = parametros;

    setSelectedService(Tipo_Servicio);

    filteringData(Ciudad, Tipo_Servicio, Tipo_Activo, data);
  };

  const handleChanges = (e) => {
    e.preventDefault();

    let parametros = {
        Ciudad: '',
        Tipo_Servicio: 'Venta',
        Tipo_Activo: '',
    };

    const { Ciudad, Tipo_Servicio, Tipo_Activo } = parametros;

    setSelectedService(Tipo_Servicio);

    filteringData(Ciudad, Tipo_Servicio, Tipo_Activo, data);
  };

  useEffect(() => {
    if (dataFiltered && dataFiltered.length > 0) {
      navigate('/properties', { state: { dataFiltered,  selectedService} });
    }else if(dataFiltered && dataFiltered.length === 0){
        navigate('/properties', { state: { dataFiltered,  selectedService} });
    }
    // Esta dependencia asegura que el efecto se ejecute solo cuando `dataFiltered` cambie.
  }, [dataFiltered, navigate, selectedService]);

  return (
    <div className="banner">
      <img src={bg} alt="" className="img-banner" />
      <div className="banner-dark">
        <Container className="banner_content" fluid>
          <Row className="fixed-position-banner ">
            <Col xxl={5} lg={8} xs={12}className="d-flex flex-column align-items-center justify-content-center fixed-position-banner-cont">
              <div className="title-container m-3">
                <h1 className="banner-tittle">
                  {" "}
                  ¡Un mundo de soluciones <br /> inmobiliarias!
                </h1>
              </div>
              <div className="buttons-container  mx-5 my-3" >
                <button
                  onClick={handleChangeArriendo}
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
