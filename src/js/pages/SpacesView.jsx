import React from "react";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Col, Container, Row } from "reactstrap";
import { FaRegCreditCard } from "react-icons/fa6";
import { TfiDirectionAlt } from "react-icons/tfi";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineAndroid } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsHouse, BsHouseHeart, BsBarChart } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";

const SpacesView = () => {
  return (
    <div className="spaces-view">
      <NavHeader />
      <Banner />

      <Container>
        <Row className="justify-content-center align-items-center my-3">
          <Col md="9">
            <h1 className="section-title text-center">Spaces</h1>
            <h2 className="map-subheading text-center">
              Encontrar y rentar espacio
            </h2>
            <p className="mt-3 about-us-text ">
              Encontrar y rentar espacio Buscamos tu primer espacio de trabajo,
              encuentra el que te permita crecer, o desarrolla una estrategia
              integral de ubicación en trabajo o en familia
            </p>
          </Col>

          <Col md='9'>
            <h3 className="form-title-sign ">Servicios</h3>
            <p className="about-us-text">
              Todas las posibles perspectivas con inteligencia de mercado y
              tecnología para ayudarte a tomar las decisiones correctas.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col>
            <h4 className="form-title-sign text-center">Evaluamos</h4>
          </Col>
        </Row>

        <Row>
          <Col md="3" className="d-flex flex-column  align-items-center">
            <FaRegCreditCard />
            <h4 className="spaces-subheading text-center my-3">
              Administracion de toda transaccion
            </h4>
            <p className="map-text">
              Evaluamos las obligaciones de arrendamiento y todos los
              requerimientos que necesitan nuestros inmuebles para crear una
              estrategia de portafolio integral.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <TfiDirectionAlt />
            <h4 className="spaces-subheading text-center my-3">
              Analisis de Ubicaciones Estrategicas
            </h4>
            <p className="map-text">
              Analizamos cientos de variables para ayudarle en buscar la mejor
              ubicación.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <IoDocumentsOutline />
            <h4 className="spaces-subheading text-center my-3">
              Representacion de Arrendatarios
            </h4>
            <p className="map-text">
              Encontramos tu espacio correcto para tu personal y tu empresa.
              Firma o renueva contrato de arrendamiento negociando los mejores
              términos del mercado.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <BsBarChart />
            <h4 className="spaces-subheading text-center my-3">
              Estrategia de Analisis
            </h4>
            <p className="map-text">
              Analizamos los datos del sector y la industria inmobiliaria.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col>
            <h4 className="form-title-sign text-center">Buscamos</h4>
          </Col>
        </Row>

        <Row>
          <Col md="3" className="d-flex flex-column  align-items-center">
            <GrMapLocation />
            <h4 className="spaces-subheading text-center my-3">
              Busqueda de Espacios
            </h4>
            <p className="map-text">
              Gestionamos consultas Online de inmuebles que cumplan con sus
              necesidades, donde le permitimos hacer comparaciones entre
              espacios y comodidades.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <IoIosGitCompare />
            <h4 className="spaces-subheading text-center my-3">
              Analisis y Comparaciones
            </h4>
            <p className="map-text">
              Analizamos tu propiedad o portafolio de servicios con empresas del
              sector del país y de otras regiones.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <AiOutlineAndroid />
            <h4 className="spaces-subheading text-center my-3">
              Inteligencia Inmobiliaria
            </h4>
            <p className="map-text">
              Conminamos todos los datos en forma predictiva para visualizar las
              tendencias y generar perspectivas del mercado.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <GiReceiveMoney />
            <h4 className="spaces-subheading text-center my-3">
              Incentivos Monetarios y Negocios
            </h4>
            <p className="map-text">
              Identificamos y acudimos a incentivos de industria y así reducir
              costos por servir.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col>
            <h4 className="form-title-sign text-center">Avanzamos</h4>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col md="3" className="d-flex flex-column  align-items-center">
            <BsHouse />
            <h4 className="spaces-subheading text-center my-3">Experiencia de Lugares de Trabajo o Vivienda</h4>
            <p className="map-text">
              Analizar tu propiedad o portafolio de servicios con empresas del
              sector del país y de otras regiones.
            </p>
          </Col>

          <Col md="3" className="d-flex flex-column  align-items-center">
            <BsHouseHeart />
            <h4 className="spaces-subheading text-center my-3">Flipping Housing (Remodelaciones)</h4>
            <p className="map-text">
              Proyectamos nuevos y remodelados espacios perfectos para su
              negocio o vivienda.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col>
            <h4 className="form-title-sign text-center">Cerramos Negocios</h4>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-3">
          <Col md="3">
            <FaRegBuilding />
            <h4>Administracion de Arrendamientos</h4>
            <p>
              Centralizamos la administración de arrendamientos para mitigar el
              riesgo y asegurar que se cumplan con las normas legales.
            </p>
          </Col>

          <Col md="3">
            <SlPeople />
            <h4>Representacion de Arrendatarios</h4>
            <p>
              Encontramos el lugar perfecto para tu empresa y familia. Renueva
              el contrato de arrendamiento con la mejor negociación.
            </p>
          </Col>

          <Col md="3">
            <IoDocumentsOutline />
            <h4>Subarrendamiento</h4>
            <p>
              Rentamos espacios subutilizados a arrendatarios adecuados bajo los
              términos, flexibles, fáciles, rápidos y seguros.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SpacesView;
