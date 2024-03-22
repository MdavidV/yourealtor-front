import React, { useEffect, useState } from "react";
import {
  deleteAsesorRequest,
  getAsesorsRequest,
  updateAvailabilityAsesorRequest,
} from "../../../api/admin";
import { Alert, Button, Col, Container, Input, Row } from "reactstrap";
import { format, isValid } from "date-fns";
import { BsFillPencilFill, BsSaveFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import AsesorFilter from "./SubComponents/AsesorFilter";

const GetAsesors = () => {
  const [asesors, setAsesors] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [editingAsesorId, setEditingAsesorId] = useState(null); // Estado para el modo de edición
  const [newAvailability, setNewAvailability] = useState("");
  const [filteredAsesors, setFilteredAsesors] = useState([]);

  const showMessage = () => {
    setShowAlert(true);

    // Limpiar timeout previo si existe
    if (timeoutId) clearTimeout(timeoutId);

    // Establecer nuevo timeout para ocultar el mensaje después de 5 segundos
    const id = setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Ajusta el tiempo según necesites

    setTimeoutId(id);
  };

  const formatCreatedAt = (createdAt) => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), "dd/MM/yyyy"); // Formato de fecha personalizado
    } else {
      return "Fecha no disponible"; // O cualquier otro mensaje que desees mostrar
    }
  };

  const fetchData = async () => {
    const response = await getAsesorsRequest();

    const sortedAsesors = response.data.sort((a, b) =>
      a.availability === "Disponible" ? -1 : 1
    );

    setAsesors(sortedAsesors);
    setFilteredAsesors(sortedAsesors);
  };

  const handleFilter = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredAsesors(asesors);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = asesors.filter((item) => {
        return (
          item.secondName.toLowerCase().includes(lowercasedFilter) ||
          item.code.toString().includes(lowercasedFilter)
        );
      });
      setFilteredAsesors(filteredData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Limpieza en caso de que el componente se desmonte antes de tiempo
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const deleteAsesor = async (asesorId) => {
    try {
      const response = await deleteAsesorRequest(asesorId);
      console.log(response);
      if (response) {
        fetchData();
        showMessage();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editAsesor = (asesorId, currentAvailability) => {
    setEditingAsesorId(asesorId);
    setNewAvailability(currentAvailability); // Configura la disponibilidad actual como el valor inicial del select
  };

  const saveChanges = async () => {
    if (editingAsesorId && newAvailability) {
      try {
        const response = await updateAvailabilityAsesorRequest(
          editingAsesorId,
          { availability: newAvailability }
        );
        console.log(response);
        setEditingAsesorId(null); // Salir del modo de edición
        fetchData(); // Recargar la lista de asesores
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container>
      {showAlert && <Alert color="success"> Asesor eliminado con exito</Alert>}
      <h1 className="section-title my-3 text-center">Asesores Vinculados</h1>
      <AsesorFilter onFilter={handleFilter} />
      <div className="asesors-container">
        {filteredAsesors.map((asesor) => (
          <Row
            key={asesor._id}
            className={`asesor-row ${
              asesor.availability === "Inactivo" ? "asesor-inactivo" : ""
            }`}
          >
            <Col xxl={4} xl={8} lg={12}>
              <p>
                {asesor.firstName} {asesor.secondName} ({asesor.code})
              </p>
              <p>{asesor.email}</p>
            </Col>

            {editingAsesorId === asesor._id ? (
              <>
                <Col>
                  <Input
                    className="mt-3"
                    type="select"
                    value={newAvailability}
                    onChange={(e) => setNewAvailability(e.target.value)}
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="Inactivo">Inactivo</option>
                  </Input>
                </Col>
                <Col>
                  <Button color="primary" onClick={saveChanges}>
                    <BsSaveFill /> Guardar
                  </Button>
                </Col>
              </>
            ) : (
              <>
                <Col xxl={4} xl={8} lg={12} className="text-center ps-5">
                  <p>Asesor: {asesor.availability}</p>
                  <p className="date-asesor text-center">
                    {formatCreatedAt(asesor.updatedAt)}
                  </p>
                </Col>

                <Col className="text-center">
                  <Button
                    color="danger"
                    onClick={() => deleteAsesor(asesor._id)}
                  >
                    <FaTrashAlt />
                  </Button>
                  <Button
                    color="warning"
                    onClick={() => editAsesor(asesor._id, asesor.availability)}
                  >
                    <BsFillPencilFill />
                  </Button>
                </Col>
              </>
            )}
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default GetAsesors;
