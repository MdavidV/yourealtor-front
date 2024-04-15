import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const OwnerDetailsModal = ({ isOpen, toggle, owner }) => {
  const navigate = useNavigate();



  const handleEditClick = (activoId) => {
    navigate(`/admin-properties/editar-activo/${activoId}`)
  }

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} className="strong-text">
          Detalles del Propietario
        </ModalHeader>
        <ModalBody className="">
          <p className="m-2 mini-text">ID del Inmueble: {owner.idActivo}</p>
          <p className="m-2 mini-text">Tipo de Activo: {owner.Nombre_Tipo_Activo}</p>
          <p className="m-2 mini-text">{owner.Titulo_Del_Inmueble}</p>
          <p className="m-2 mini-text">
            Encargado del Inmueble: Asesor ({owner.Encargado_Del_Activo})
          </p>
          <p className="m-2 mini-text">Estado de la Publicacion: {owner.Estado_Activo}</p>
          <p className="m-2 mini-text">
            Nombre Propietario:{owner.Nombre_Propietario}{" "}
            {owner.Apellido_Propietario}
          </p>
          <p className="m-2 mini-text">
            Email Propietario:{" "}
            <a href={`mailto:${owner.Email_Propietario}`}>
              {owner.Email_Propietario}
            </a>
          </p>
          <p className="m-2 mini-text">
            Teléfono Propietario:{" "}
            <a href={`tel:+57${owner.Telefono_Propietario}`}>
              {owner.Telefono_Propietario}
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <td className="property-data-cell" data-label="Opciones">
            <Button
              color="warning"
              onClick={() => handleEditClick(owner.idActivo)}
            >
              <FaEdit />
            </Button>
          </td>
          <Button
            color="primary"
            onClick={() => {
              navigate(`/property/${owner.idActivo}`);
            }}
          >
            Ver Inmueble
          </Button>
          <Button color="danger" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OwnerDetailsModal;
