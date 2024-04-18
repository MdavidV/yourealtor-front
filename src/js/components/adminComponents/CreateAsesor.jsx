import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signupAsesorRequest } from "../../../api/admin.js";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Modal, ModalFooter, ModalHeader } from "reactstrap";

const CreateAsesor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMesasage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values); // Verificar los valores capturados del formulario
    try {
      const response = await signupAsesorRequest(values); // Asumiendo que 'signupAsesorRequest' es una función que acepta los valores del formulario
      if (response) {
        setModal(true);
        setErrorMesasage("");
      }
    } catch (error) {
      setErrorMesasage(error.response.data.message); // Asegúrate de ajustar esto según cómo estés manejando errores en tus peticiones HTTP
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <div className="container">
      {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)} className="my-form">
        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Juan"
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            {...register("firstName", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="secondName">Apellido</label>
          <input
            id="secondName"
            name="secondName"
            placeholder="Pérez"
            type="text"
            className={`form-control ${errors.secondName ? "is-invalid" : ""}`}
            {...register("secondName", {
              required: "Este campo es obligatorio",
            })}
          />
          {errors.secondName && (
            <div className="invalid-feedback">{errors.secondName.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            placeholder="1234567890"
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            {...register("phone", { required: "Este campo es obligatorio" })}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="availability">Disponibilidad</label>
          <select
            id="availability"
            name="availability"
            className={`form-control ${
              errors.availability ? "is-invalid" : ""
            }`}
            {...register("availability", {
              required: "Este campo es obligatorio",
            })}
          >
            <option value="Disponible">Disponible</option>
            <option value="Inactivo">Inactivo</option>
          </select>
          {errors.availability && (
            <div className="invalid-feedback">
              {errors.availability.message}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="code">Código</label>
          <input
            id="code"
            name="code"
            placeholder="5678"
            type="number"
            className={`form-control ${errors.code ? "is-invalid" : ""}`}
            {...register("code", { required: "Este campo es obligatorio" })}
          />
          {errors.code && (
            <div className="invalid-feedback">{errors.code.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="juan.perez@example.com"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email", { required: "Este campo es obligatorio" })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", { required: "Este campo es obligatorio" })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader>Asesor Creado Con Exito</ModalHeader>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                navigate("/admin-properties/asesores-disponibles");
              }}
            >
              Ver Asesores
            </Button>
            <Button color="success" onClick={() => {
              toggle();
              reset();
            }}>Crear Otro Asesor</Button>
          </ModalFooter>
        </Modal>

        <button type="submit" className="btn btn-success my-3">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default CreateAsesor;
