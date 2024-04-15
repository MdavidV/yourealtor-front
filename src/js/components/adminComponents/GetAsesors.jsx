import React, { useEffect, useState } from "react";
import {
  deleteAsesorRequest,
  updateAvailabilityAsesorRequest,
} from "../../../api/admin";
import { Alert, Button, Col, Container, Input, Row } from "reactstrap";
import { format, isValid } from "date-fns";
import { BsFillPencilFill, BsSaveFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import AsesorFilter from "./SubComponents/AsesorFilter";
import { useData } from "../../../contexts/DataContext";

const GetAsesors = () => {
  const { asesors, getAsesors } = useData();
  const [shouldFetch, setShouldFetch] = useState(true);
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
  useEffect(() => {
    if (shouldFetch) {
      getAsesors();
      setShouldFetch(false);
    }
  }, [shouldFetch, getAsesors]);

  // Actualiza `filteredAsesors` cada vez que cambia `asesors`
  useEffect(() => {
    const sortedAsesors = asesors.sort((a, b) =>
      a.availability === "Disponible" ? -1 : 1
    );
    setFilteredAsesors(sortedAsesors);
  }, [asesors]);

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
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const deleteAsesor = async (asesorId) => {
    try {
      await deleteAsesorRequest(asesorId);
      setShouldFetch(true);
      showMessage();
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
        await updateAvailabilityAsesorRequest(editingAsesorId, { availability: newAvailability });
        setEditingAsesorId(null); // Sale del modo de edición
        setShouldFetch(true); // Esto provocará una recarga de la lista de asesores desde el servidor
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
