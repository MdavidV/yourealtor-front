import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Col, Container, Row } from "reactstrap";
import { PiPaintBrushHouseholdBold } from "react-icons/pi"; // Verifica que este import sea correcto
import { Link } from "react-router-dom";

const ServicesCard = () => {
  const [flippedStates, setFlippedStates] = useState(Array(4).fill(false));

  const flipCard = (index) => {
    setFlippedStates(
      flippedStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const glowX = e.clientX - cardRect.left; // posición x dentro del elemento.
    const glowY = e.clientY - cardRect.top; // posición y dentro del elemento.
    // Actualiza el estilo de brillo para seguir el mouse, manteniendo la imagen de fondo
    const glowStyle = `radial-gradient(circle at ${glowX}px ${glowY}px, #ffffff55, #00000000)`;
    card.style.backgroundImage = glowStyle;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.backgroundImage = 'none';
    // Restablece solo el efecto de brillo, manteniendo la imagen de fondo
  };

  const cards = [
    {
      frontIcon: <i className="bi bi-houses-fill"></i>,
      frontTitle: "Spaces",
      backTexts: ["Ventas", "Arrendamientos", "Hipotecas"],
      to: '/our-services/spaces-info'
    },
    {
      frontIcon: <i className="bi bi-buildings"></i>,
      frontTitle: "Property",
      backTexts: ["Administracion", "Operacion", "Auditorias Externas"],
      to: '/our-services/property-info'
      
    },
    {
      frontIcon: <PiPaintBrushHouseholdBold />,
      frontTitle: "Flipping Houses",
      backTexts: ["Apartamentos", "Casas", "Locales", "Oficinas"],

    },
    {
      frontIcon: <i className="bi bi-clipboard-data"></i>,
      frontTitle: "Back Office",
      backTexts: ["BPO", "Gestion documental Inmobiliaria"],
      to: '/our-services/back-office-info'

    },
  ];

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center services-cont">
      {cards.map((item, index) => (
        <Col
          xxl="2"
          lg="3"
          md="6"
          key={index}
          className="d-flex flex-column justify-content-center align-items-center my-2"
        >
          <ReactCardFlip
            isFlipped={flippedStates[index]}
            flipDirection="horizontal"
          >
            <div
              className="services-card "
              onClick={() => flipCard(index)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="services-card-icon">{item.frontIcon}</div>
              <h3 className="spaces-card-text">{item.frontTitle}</h3>
            </div>
            <div
              className="services-card card-back"
              onClick={() => flipCard(index)}
            >
              <div className="services-card-icon">{item.frontIcon}</div>
              {item.backTexts.map((text, textIndex) => (
                <p key={textIndex} className="spaces-card-text">{text}</p>
              ))}
              <Link to={item.to} className="services-card-link">
                Ver Mas
              </Link>
            </div>
          </ReactCardFlip>
        </Col>
      ))}
      </Row>
    </>
  );
};

export default ServicesCard;
