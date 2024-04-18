import { useEffect, useState } from "react";
import CardActivo from "./subcomponents/CardActivo.jsx";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useData } from "../../contexts/DataContext.jsx";
import { getActivosRequest } from "../../api/activo.api.js";

const CardsActivos = () => {
  const [activos, setActivos] = useState([]);

  useEffect(() => {
    const loadActivo = async () => {
      const response = await getActivosRequest();
      const data = response.data;
      const shortData = data.slice(0, 3);
      setActivos(shortData);
    };

      loadActivo();

  }, []);

  const [selectedService, setSelectedService] = useState("");

  const navigate = useNavigate();
  const { data, fetchData, cities, dataFiltered, filteringData } = useData();


  const handleChange = (e) => {
    e.preventDefault();

    let parametros = {
      Ciudad: "",
      Tipo_Servicio: "",
      Tipo_Activo: "",
    };

    const { Ciudad, Tipo_Servicio, Tipo_Activo } = parametros;

    setSelectedService(Tipo_Servicio);

    filteringData(Ciudad, Tipo_Servicio, Tipo_Activo, data);
  };

  useEffect(() => {
    if (dataFiltered && dataFiltered.length > 0) {
      navigate("/properties", { state: { dataFiltered, selectedService } });
    } else if (dataFiltered && dataFiltered.length === 0) {
      navigate("/properties", { state: { dataFiltered, selectedService } });
    }
    // Esta dependencia asegura que el efecto se ejecute solo cuando `dataFiltered` cambie.
  }, [dataFiltered, navigate, selectedService]);

  return (
    <div className="populars">
      <Container className="my-5 py-5">
        <Row className="my-3 align-items-center">
          <Col>
            <h2 className="section-title my-2">Populares</h2>
          </Col>
          <Col className="text-end">
            <button className="my-2 populars__link" onClick={handleChange}>
              Explorar<i className="d-ibline-block ms-3 bi bi-arrow-right"></i>
            </button>
          </Col>
        </Row>
        <Row className="my-3">
          {activos.length > 0 &&
            activos.map((act, index) => {
              const items = act.Imagenes.split(", ");
              return (
                <Col key={index} sm="12" lg="4">
                  <CardActivo
                    items={items}
                    activo={act}
                    idActivo={act.idDetalle_Activos}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default CardsActivos;
