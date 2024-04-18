import React, { useState, useEffect } from "react";
import { confirmRequest } from "../../api/auth.js";
import { useParams } from "react-router-dom";
import Bg from "../../assets/Bg_Form_View.jpg";
import CheckVideo from "../../assets/system-regular-31-check.webp";
import CrossVideo from "../../assets/system-solid-29-cross.webp";
import { Col, Container, Row, Spinner } from "reactstrap";

const ConfirmView = () => {
  const [message, setMessage] = useState("Validando y confirmando la cuenta.");
  const [confirmState, setConfirmState] = useState("validando");
  const { token } = useParams();

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await confirmRequest(token);
        const { data } = response;

        if (data.redirectUrl) {
          setTimeout(() => {
            setMessage("Cuenta confirmada con éxito. Redirigiendo...");
            setConfirmState("redirigiendo");
          }, 5000); // Cambiado a 5 segundos para redirigir después de 5 segundos de espera
          setTimeout(() => {
            window.location.href = data.redirectUrl;
          }, 10000); // Redirigir después de 10 segundos en total
        } else {
          setTimeout(() => {
            setMessage(
              "No se proporcionó una URL de redirección en la respuesta."
            );
            setConfirmState("error");
          }, 5000); // Establecer estado de error después de 5 segundos
        }
      } catch (error) {
        setTimeout(() => {
          setMessage("Error al confirmar la cuenta");
          setConfirmState("error");
        }, 5000); // Establecer estado de error después de 5 segundos
        console.log(error);
      }
    };

    // Iniciar confirmación después de 5 segundos
    const confirmationTimeout = setTimeout(() => {
      confirmAccount();
    }, 5000);

    return () => clearTimeout(confirmationTimeout); // Limpiar el timeout al desmontar el componente
  }, []);


  return (
   
    <>
      <img src={Bg} alt="" className="bg-cont" />
      <div className="verify-cont ">
        <Container className="about-us-text">
          <Row className="cont ">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              {confirmState === "validando" && (
                <Spinner color="primary" className="spinner" />
              )}

              {confirmState === "redirigiendo" && (
                <img src={CheckVideo} className="check-video" />
              )}

              {confirmState === "error" &&  <img src={CrossVideo} className="check-video" />}

              <p className="text-center">{message}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ConfirmView;
