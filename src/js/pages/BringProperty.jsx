import { Col, Container, Row, ListGroup } from "reactstrap";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { useParams } from "react-router-dom";
import {
  IoExpandOutline,
  IoHourglassOutline,
  IoLayers,
  IoHome,
  IoBed,
  IoBusiness,
  IoCashOutline,
  IoCarSportOutline,
  IoCheckmark,
} from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import SlickBig from "../components/subcomponents/slickBig";
import SideContact from "../components/subcomponents/sideContact";

const BringProperty = () => {
  const params = useParams();
  const [internalChars, setInternalChars] = useState([]);
  const [externalChars, setExternalChars] = useState([]);

  const idActivo = params.id;

  const { getOneActive, activo, setActivo } = useData();


  useEffect(() => {
    const loadActivo = async () => {
      if (idActivo) {
        await getOneActive(idActivo);
      }
    };

    loadActivo();
    window.scrollTo(0, 0);

    return () => {
      setActivo("");
    }

  }, [idActivo]);

  const prevActivoRef = useRef();

  useEffect(() => {
    // Comprobar si activo ha cambiado desde la última renderización
    if (prevActivoRef.current !== activo) {
      setInternalChars(activo?.Caracteristicas_Internas?.split(",") || []);
      setExternalChars(activo?.Caracteristicas_Externas?.split(",") || []);
      prevActivoRef.current = activo;
    }
  }, [activo]);

  return (
    <>
      <NavHeader isHome={false} />
      {activo != "" ? (
        <Container className="viewActive slider_active" fluid>
          <Container>
            <Row>
              <Col>
                <h1 className="section-title">
                  {activo.Titulo_Del_Inmueble} en {activo.Barrio},{" "}
                  {activo.Ciudad}
                </h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row className="slider-container my-4">
              <Col>
                <SlickBig data={activo} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg={9}>
                <Row className="my-5">
                  <Col>
                    <p className="mini-text">
                      Precio{" "}
                      {activo.Nombre_Tipo_De_Negocio === "Venta"
                        ? "de "
                        : "del "}
                      {activo.Nombre_Tipo_De_Negocio}
                    </p>
                    <p className="strong-text">
                      ${" "}
                      {activo.Precio_Venta === 0
                        ? activo.Precio_Alquiler
                        : activo.Precio_Venta}
                    </p>
                    <p className="mini-text">Pesos Colombianos</p>
                  </Col>
                </Row>
                <Row className="my-5">
                  <Col>
                    <h2 className="section-detalle my-2">
                      Descripción General
                    </h2>
                    <p className="map-text">{activo.Descripcion}</p>
                  </Col>
                </Row>
                <Row className="my-5">
                  <Col>
                    <h2 className="section-detalle my-2">
                      Detalles del inmueble
                    </h2>
                    <Row className="detallesIn">
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoHourglassOutline />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Antiguedad</p>
                          <p className="strong-text">
                            Construido en: {activo.Año_Construccion}
                          </p>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoLayers />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Estrato</p>
                          <p className="strong-text"> {activo.Estrato}</p>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoHome />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Estado</p>
                          <p className="strong-text">
                            {" "}
                            {activo.Estado_Propiedad}
                          </p>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoExpandOutline />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Area</p>
                          <p className="strong-text">
                            {" "}
                            {activo.Area_Total}m<sup>2</sup>
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="detallesIn">
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoBed />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">
                            {activo.Alcobas > 1 ? "Habitaciones" : "Habitación"}
                          </p>
                          <p className="strong-text"> {activo.Alcobas}</p>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <FaBath />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">
                            {activo.Baños > 1 ? "Baños" : "Baño"}
                          </p>
                          <p className="strong-text">{activo.Baños}</p>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoBusiness />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Piso</p>
                          <p className="strong-text">{activo.Piso}</p>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoCashOutline />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Administración</p>
                          <p className="strong-text">
                            {" "}
                            {activo.Valor_Administracion === 0
                              ? "Incluida"
                              : activo.Valor_Administracion}
                            $COP
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="detallesIn">
                      <Col xs={6} md={3} className="detallesIn__info my-4">
                        <div className="detallesIn__info_icon">
                          <IoCarSportOutline />
                        </div>
                        <div className="detallesIn__info_text">
                          <p className="mini-text">Parqueadero</p>
                          <p className="strong-text"> {activo.Garaje}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} className="my-5">
                <SideContact />
              </Col>
            </Row>
            <Row>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.3437994075741!2d-74.09062356779967!3d4.6093423474356126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f996d9feb8e01%3A0x4cf0f24645107ed9!2zQ3JhLiAyNiAjMTItMDEsIExvcyBNw6FydGlyZXMsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1707021384054!5m2!1ses!2sco"
                width="670"
                height="597"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Row>
            <Row className="my-2">
              <h2 className="section-detalle mb-2">Ubicación</h2>
              <Col>
                <ListGroup>
                  <li className="my-2">
                    <p className="strong-text">Ciudad</p>
                    <p>{activo.Ciudad}</p>
                  </li>
                  <li className="my-2">
                    <p className="strong-text">Dirección</p>
                    <p>{activo.Direccion}</p>
                  </li>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup>
                  <li className="my-2">
                    <p className="strong-text">Barrio</p>
                    <p>{activo.Barrio}</p>
                  </li>
                  <li className="my-2">
                    <p className="strong-text">Localidad</p>
                    <p>{activo.Localidad}</p>
                  </li>
                  {activo.conjunto ? (
                    <li className="my-2">
                      <p className="strong-text">Conjunto</p>
                      <p>{activo.Conjunto}</p>
                    </li>
                  ) : (
                    ""
                  )}
                </ListGroup>
              </Col>
            </Row>
            <Row className="features my-4">
              <h2 className="section-detalle my-5 text-center">
                Características
              </h2>
              <Col>
                <h2 className="section-detalle mb-3">
                  Caracteristicas Internas
                </h2>
                <ListGroup>
                  {internalChars.map((char, index) => (
                    <li key={index}>
                      <IoCheckmark /> {char}
                    </li>
                  ))}
                  {/* <li>
                    <IoCheckmark /> Acceso Pavimentado
                  </li>
                  <li>
                    <IoCheckmark /> Alcantarillado
                  </li>
                  <li>
                    <IoCheckmark /> Ascensor
                  </li>
                  <li>
                    <IoCheckmark /> Canchas Deportivas
                  </li>
                  <li>
                    <IoCheckmark /> En conjunto cerrado
                  </li>
                  <li>
                    <IoCheckmark /> Garaje / Parqueadero(s)
                  </li> */}
                </ListGroup>
              </Col>
              <Col>
                <h2 className="section-detalle mb-3">
                  Caracteristicas Externas
                </h2>
                <ListGroup>
                  {externalChars.map((char, index) => (
                    <li key={index}>
                      <IoCheckmark /> {char}
                    </li>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Container>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};
export default BringProperty;
