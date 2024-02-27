import React, { useEffect, useState } from "react";
import { format, isValid } from "date-fns";

import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const ProfileInfoFields = ({ user, onOpenChangePassword }) => {
  function capitalize(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const formatCreatedAt = (createdAt) => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), "dd/MM/yyyy"); // Formato de fecha personalizado
    } else {
      return "Fecha no disponible"; // O cualquier otro mensaje que desees mostrar
    }
  };

  return (
    <div className="info-profile">
      <Container>
        <Row className="mt-5">
          <h1 className="section-title text-center ">Informacion Personal</h1>
        </Row>

        <Row className="mt-5 name-field">
          <Col xs="6" className="user-info ms-5">
            <h2 className="about-us-text">
              {" "}
              {capitalize(user.username) + " " + capitalize(user.secondname)}
            </h2>

            {user.created && (
              <p className="sm-profile-info">
                Con nosotros desde: {formatCreatedAt(user.created)}
              </p>
            )}
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs="4" className="ms-5 info-field">
            <h3 className="paragraph-info">Contrasena</h3>
            <a
              className="d-block sm-profile-info mt-4 mb-2"
              onClick={onOpenChangePassword}
            >
              Cambiar Contrasena
            </a>
          </Col>

          <Col xs="4" className="mx-5 info-field">
            <h3 className="paragraph-info">Correo Electronico</h3>
            <p className="sm-profile-info mt-4">{user.email}</p>
          </Col>
        </Row>

        <Row className=" d-flex justify-content-center">
          <Col xs="4" className="ms-5 info-field">
            <h3 className="paragraph-info">Numero Telefonico</h3>
            <p className="sm-profile-info mt-4 mb-2">+57 300 000 0000</p>
          </Col>

          <Col xs="4" className="mx-5 info-field">
            <h3 className="paragraph-info">Nombre a Mostrar</h3>
            <p className="sm-profile-info mt-4">{user.username}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileInfoFields;
