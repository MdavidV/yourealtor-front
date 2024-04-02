import {
  IoHeartCircle,
  IoBed,
  IoExpandOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  Carousel,
  Row,
  CarouselItem,
  CarouselControl,
  Col,
  Container,
  NavLink,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const CardActivo = ({  activo  }) => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((activeIndex) =>
    activeIndex === urlsArray.length - 1 ? 0 : activeIndex + 1
    );
  };
  
  const previous = () => {
    
    setActiveIndex((activeIndex) =>
    activeIndex === 0 ? urlsArray.length - 1 : activeIndex - 1
    );
  };

  const urlsArray = activo.Imagenes.split(",");

  


  const slides = urlsArray.map((url, index) => {
    return (
      <CarouselItem key={index}>
        <Button
          className="img_button"
          onClick={() => navigate(`/property/${activo.Activo_idActivo}`)}
        >
          <CardImg top width="100%" src={url} alt={`Imagen ${index + 1}`} />
        </Button>
      </CarouselItem>
    );
  });
  return (
    <Card className="buildingCards my-3">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="buildingCards__header"
      >
        <Container className="buildingCards__header--top" fluid>
          <Row>
            {activo.Estado_Propiedad === "nuevo" ? (
              <Col>
                <p className="new_tag">Nuevo</p>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Container>
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <CardBody>
        <Row className="mt-2 align-items-center">
          <Col sm="7">
            <p className="map-text">
              {activo.Tipo_Activo} en {activo.Tipo_Negocio}
            </p>
          </Col>
          <Col sm="5">
            <p className="map-text text-end">
              <IoLocationSharp /> {activo.Ciudad}
            </p>
          </Col>
        </Row>
        <Row className="my-4 align-items-center buildingCards__items">
          {activo.Alcobas ? (
            <Col className="buildingCards__items--item">
              <p className="map-text">
                <IoBed /> {activo.Alcobas}{" "}
                {activo.Alcobas === 1 ? " habitación" : "habitaciones"}
              </p>
            </Col>
          ) : (
            ""
          )}
          <Col className="buildingCards__items--item">
            <p className="map-text">
              <FaBath /> {activo.Baños}
              {activo.Baños === 1 ? " Baño" : " Baños"}{" "}
            </p>
          </Col>
          <Col className="buildingCards__items--item">
            <p className="map-text">
              <IoExpandOutline /> {activo.Area_Total}m<sup>2</sup>
            </p>
          </Col>
        </Row>
        <Row className="py-2 align-items-center">
          <Col>
            <Button
              className="secondary-button-l"
              onClick={() => navigate(`/property/${activo.Activo_idActivo}`)}
            >
              {activo.Tipo_Negocio === "Alquiler"
                ? "Arrienda Ya!"
                : "Compra Ya!"}
            </Button>
          </Col>
          <Col className="text-end">
            <p>{activo.Precio}$ COP </p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

CardActivo.propTypes = {
  items: PropTypes.array.isRequired,
  activo: PropTypes.object.isRequired,
  Activo_idActivo: PropTypes.number.isRequired,
};

export default CardActivo;
