import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useData } from "../../../../contexts/DataContext";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Badge,
} from "reactstrap";
import { FaBuilding, FaDollarSign, FaEdit } from "react-icons/fa";
import { createClientRequest } from "../../../../api/activo.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NewClient = ({ initialData }) => {
  const [selectedActivo, setSelectedActivo] = useState(null);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { getAsesors, asesors, clientsType, activosAdmin, getActivoByAdmin, clientToEdit } =
    useData();


    useEffect(() => {
        if (clientToEdit) {
            const formattedClientData = {
              ...clientToEdit,
              Fecha_Nacimiento: formatDate(clientToEdit.Fecha_Nacimiento),
            };
            reset(formattedClientData);
          }
    }, [clientToEdit]);

  useEffect(() => {
    getAsesors();
    getActivoByAdmin();
  }, []);

  const toggle = () => setModal(!modal);

  const renderFirstImage = (imagenes) => {
    // Asumiendo que imagenes es una cadena de URLs separadas por comas
    const imagesArray = imagenes.split(",");
    return imagesArray.length ? (
      <img
        src={imagesArray[0]}
        alt="Foto del Inmueble"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          verticalAlign: "middle",
          marginTop: "15px",
        }}
      />
    ) : null;
  };

  const formatDate = (isoString) => {
    return isoString.split('T')[0];
  };


  const selectFieldDefaultValue = (selectFieldName) => {
    return initialData && initialData[selectFieldName]
      ? initialData[selectFieldName]
      : "";
  };
  const handleLinkToActivo = (idActivo) => {
    setSelectedActivo(idActivo); // Guarda el idActivo del activo seleccionado
    toggle(); // Cierra la modal
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = {
      ...data,
      idActivo: selectedActivo, // Asegúrate de que esto corresponda a cómo tu backend espera recibir el idActivo
    };

    try {
      const response = await createClientRequest(formData);
      if (response.status === 201) {
        Swal.fire('Cliente registrado con Exito!');

        navigate('/admin-properties/clientes');
      } else {
        alert('Hubo un problema al crear el cliente.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar los datos.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="col-12 mb-3">
        <label htmlFor="Encargado_Del_Cliente" className="form-label">
          Encargado del Cliente
        </label>
        <select
          defaultValue={selectFieldDefaultValue("Encargado_Del_Cliente")}
          {...register("Encargado_Del_Cliente", { required: true })}
          className="form-select"
        >
          {asesors
            .filter((asesor) => asesor.availability === "Disponible")
            .map((asesor) => (
              <option value={asesor.code} key={asesor._id}>
                {asesor.firstName} {asesor.secondName} ({asesor.code})
              </option>
            ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="tipoCliente" className="form-label">
          Tipo de Cliente
        </label>
        <select
          className="form-select"
          id="tipoCliente"
          {...register("Tipo_Cliente")}
        >
          <option value="">Seleccione un tipo de cliente</option>
          {clientsType.map((tipo, index) => (
            <option key={index} value={tipo.idTipo_Cliente}>
              {tipo.Nombre_Tipo_Cliente}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="estadoCliente" className="form-label">
          Estado del Cliente
        </label>
        <select
          className="form-select"
          id="estadoCliente"
          {...register("Estado_Del_Cliente")}
        >
          <option value="">Seleccione un estado</option>
          <option value="Nuevo">Nuevo</option>
          <option value="En Proceso">En proceso</option>
          <option value="Perdido">Perdido</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          {...register("Nombre", { required: true })}
        />
        {errors.Nombre && (
          <p className="text-danger">Este campo es obligatorio.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="apellidos" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          className="form-control"
          id="apellidos"
          {...register("Apellidos", { required: true })}
        />
        {errors.Apellidos && (
          <p className="text-danger">Este campo es obligatorio.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          className="form-control"
          id="telefono"
          {...register("Telefono")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nIdentificacion" className="form-label">
          Número de Identificación
        </label>
        <input
          type="text"
          className="form-control"
          id="nIdentificacion"
          {...register("N_identificacion", { required: true })}
        />
        {errors.N_identificacion && (
          <p className="text-danger">Este campo es obligatorio.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="fechaNacimiento" className="form-label">
          Fecha de Nacimiento
        </label>
        <input
          type="date"
          className="form-control"
          id="fechaNacimiento"
          {...register("Fecha_Nacimiento", { required: true })}
        />
        {errors.Fecha_Nacimiento && (
          <p className="text-danger">Este campo es obligatorio.</p>
        )}
      </div>

      <button type="button" className="btn btn-primary" onClick={toggle}>
        Enlazar un Activo al cliente
      </button>
      <button type="submit" className="btn btn-success mx-2">
        Enviar
      </button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Enlazar Activo</ModalHeader>
        <ModalBody>
          <Table responsive className="px-5 property-list">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Datos Inmueble</th>
                <th>Estado</th>
                <th>Inmueble</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {activosAdmin.map((activo) => (
                <tr key={activo.idActivo} className="align-items-center">
                  <td className="photo-cell" data-label="Foto">
                    {renderFirstImage(activo.Imagenes)}
                  </td>
                  <td
                    className="property-data-cell"
                    data-label="Datos Inmueble"
                  >
                    <p>Asesor encargado: {activo.Encargado_Del_Activo}</p>
                    <p>Código: {activo.idActivo}</p>
                    <p>Matricula: {activo.Matricula_Inmobiliaria}</p>
                  </td>
                  <td className="property-data-cell" data-label="Estado">
                    <Badge color="primary" pill>
                      {activo.Estado_Activo}
                    </Badge>
                  </td>
                  <td className="property-data-cell" data-label="Inmueble">
                    <p>{activo.Titulo_Del_Inmueble}</p>
                    <p>
                      <FaBuilding /> {activo.Nombre_Tipo_Activo} en{" "}
                      {activo.Nombre_Tipo_De_Negocio}
                    </p>
                    <p>
                      {activo.Ciudad} / {activo.Departamento}
                    </p>
                    <p>
                      <FaDollarSign />
                      {activo.Precio_Venta || activo.Precio_Alquiler}
                    </p>
                  </td>
                  <td className="property-data-cell" data-label="Opciones">
                    <Button
                      color="primary"
                      onClick={() => handleLinkToActivo(activo.idActivo)}
                    >
                      Enlazar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </form>
  );
};

export default NewClient;
