import { IoHeartCircle , IoBed, IoExpandOutline, IoLocationSharp} from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, NavLink, Carousel, Row,
  CarouselItem, CarouselControl, Col, Container
} from 'reactstrap';

const CardActivo = ({ items, activo }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const slides = items.map((url, index) => (
    <CarouselItem key={index}>
      <NavLink>
        <CardImg top width="100%" src={url} alt={`Imagen ${index + 1}`} />
      </NavLink>
    </CarouselItem>
  ));

  return (
    <Card className="Home_cards my-3">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="Home_cards__header">
        <Container className="Home_cards__header--top" fluid>
            <Row>
                {activo.Antiguedad === "Nuevo" ? <Col><p className="new_tag">Nuevo</p></Col> : ''}                
                <Col className="text-end Home_cards__header--top--icon" >
                    <NavLink>
                        <IoHeartCircle/>
                    </NavLink>
                </Col>
            </Row>
        </Container>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <CardBody>
        <Row className="mt-2 align-items-center">
            <Col><p className="map-text">Apartamento en {activo.Tipo_Servicio}</p></Col>
            <Col className="text-end"><p className="map-text"><IoLocationSharp/> {activo.Ciudad
}</p></Col>
        </Row>
        <Row className="my-4 align-items-center Home_cards__items">
            <Col className="Home_cards__items--item"><p className="map-text"><IoBed/> {activo.Habitaciones} habitaciones</p></Col>
            <Col className="Home_cards__items--item"><p className="map-text"><FaBath />
             {activo.Baños === 1 ? ' baño' : ' baños'} </p></Col>
            <Col className="Home_cards__items--item"><p className="map-text"><IoExpandOutline /> {activo.Area}m<sup>2</sup></p></Col>
        </Row>
        <Row className="py-2 align-items-center">
            <Col><NavLink className="secondary-button-l">
              { activo.Tipo_Servicio === "Arriendo" ? 'Arrienda Ya!' : 'Compra Ya!'}              
            </NavLink></Col>
            <Col className="text-end"><p>{activo.Precio}</p></Col>
        </Row>
      </CardBody>
    </Card>
  );
};

CardActivo.propTypes = {
  items: PropTypes.array.isRequired,
  activo: PropTypes.object
};

export default CardActivo;