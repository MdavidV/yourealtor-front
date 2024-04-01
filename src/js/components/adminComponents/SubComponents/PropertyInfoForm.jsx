import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useData } from "../../../../contexts/DataContext";
const PropertyInfoForm = ({ setBasicInfo }) => {
  const {
    getAsesors,
    asesors,
    fetchPropertyType,
    dataPropertyType,
    dataType,
    fetchType,
    fetchPeriodicity,
    dataPeriodicity,
  } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchPropertyType("Tipo_Activo");
    getAsesors();
    fetchType("Tipo_De_Negocio");
    fetchPeriodicity("Periodizidad");
  }, []);

  const onSubmit = (data) => {
    setBasicInfo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="Encargado_Del_Activo" className="form-label">
            Encargado del inmueble
          </label>
          <select
            {...register("Encargado_Del_Activo", { required: true })}
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
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="Titulo_Del_Inmueble" className="form-label">
            Título del Inmueble
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.Titulo_Del_Inmueble ? "is-invalid" : ""
            }`}
            {...register("Titulo_Del_Inmueble", { required: true })}
          />
          {errors.Titulo_Del_Inmueble && (
            <div className="invalid-feedback">Este campo es obligatorio</div>
          )}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-6 col-12">
          <label htmlFor="Matricula_Inmobiliaria" className="form-label">
            Matricula Inmobiliaria
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.Matricula_Inmobiliaria ? "is-invalid" : ""
            }`}
            {...register("Matricula_Inmobiliaria", { required: true })}
          />
          {errors.Titulo_Del_Inmueble && (
            <div className="invalid-feedback">Este campo es obligatorio</div>
          )}
        </div>

        <div className="col-lg-6 col-12">
          <label htmlFor="estadoActivo" className="form-label">Estado del Activo</label>
          <select
            className="form-select"
            id="estadoActivo"
            {...register("Estado_Activo", { required: true })}
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Vendido">Vendido</option>
            <option value="Arrendado">Arrendado</option>
          </select>
          {errors.Estado_Activo && <span>Este campo es obligatorio.</span>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-6 col-12">
          <label htmlFor="Nombre_Tipo_Activo" className="form-label">
            Tipo de Inmueble:
          </label>
          <select
            {...register("Nombre_Tipo_Activo", { required: true })}
            className="form-select"
          >
            {dataPropertyType.map((type) => (
              <option value={type.idTipo_Activo} key={type.idTipo_Activo}>
                {type.Nombre_Tipo_Activo}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-6 col-12">
          <label htmlFor="Nombre_Tipo_De_Negocio" className="form-label">
            Tipo de Negocio:
          </label>
          <select
            {...register("Nombre_Tipo_De_Negocio", { required: true })}
            className="form-select"
          >
            {dataType.map((type) => (
              <option
                value={type.idTipo_De_Negocio}
                key={type.idTipo_De_Negocio}
              >
                {type.Nombre_Tipo_De_Negocio}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Repetir la estructura para otros campos */}

      <div className="row mb-3">
        <div className="col-lg-6 col-12">
          <label htmlFor="Precio_Venta" className="form-label">
            Precio de Venta
          </label>
          <input
            min="0"
            type="number"
            className={`form-control ${
              errors.Precio_Venta ? "is-invalid" : ""
            }`}
            placeholder="Solo Numeros"
            {...register("Precio_Venta", { required: true })}
          />
          {errors.Precio_Venta && (
            <div className="invalid-feedback">Este campo es obligatorio</div>
          )}
        </div>

        <div className="col-lg-4 col-12">
          <label htmlFor="Precio_Alquiler" className="form-label">
            Precio de Alquiler
          </label>
          <input
            min="0"
            type="number"
            className={`form-control ${
              errors.Precio_Alquiler ? "is-invalid" : ""
            }`}
            placeholder="Solo Numeros"
            {...register("Precio_Alquiler", { required: true })}
          />
          {errors.Precio_Alquiler && (
            <div className="invalid-feedback">Este campo es obligatorio</div>
          )}
        </div>

        <div className="col-lg-2 col-12">
          <label htmlFor="Tipo_De_Periodo" className="form-label">
            Tiempo
          </label>
          <select
            {...register("Tipo_De_Periodo", { required: true })}
            className="form-select"
          >
            {dataPeriodicity.map((periodicity) => (
              <option
                value={periodicity.Tipo_De_Periodo}
                key={periodicity.idPeriodizidad}
              >
                {periodicity.Tipo_De_Periodo}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-6 col-12">
          <label htmlFor="Valor_Administracion" className="form-label">
            Valor Administracion
          </label>
          <input
            min="0"
            type="number"
            className={`form-control ${
              errors.Valor_Administracion ? "is-invalid" : ""
            }`}
            placeholder="Solo Numeros"
            {...register("Valor_Administracion", {
              required: "Este campo es obligatorio.",
            })}
          />
          {errors.Valor_Administracion && (
            <div className="invalid-feedback">Este campo es obligatorio</div>
          )}
        </div>

        <div className="col-lg-6 col-12">
          <label htmlFor="Estado_Propiedad" className="form-label">
            Estado fisico de la propiedad
          </label>
          <select
            className="form-select"
            {...register("Estado_Propiedad", { required: true })}
          >
            <option value="usado">Usado</option>
            <option value="nuevo">Nuevo</option>
            <option value="proyecto">En Proyecto</option>
            <option value="construccion">En construccion</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-3 col-12">
          <label htmlFor="Año_Construccion" className="form-label">
            Año construcción
          </label>
          <input
            min="0"
            type="number"
            placeholder="Ejemplo: 2024"
            className={`form-control ${
              errors.Año_Construccion ? "is-invalid" : ""
            }`}
            {...register("Año_Construccion", {
              required: "Este campo es obligatorio.",
            })}
          />
        </div>

        <div className="col-lg-3 col-12">
          <label htmlFor="Alcobas" className="form-label">
            Alcobas
          </label>
          <input
          {...register("Alcobas", {
            required: "Este campo es obligatorio.",
          })}
            min="0"
            type="number"
            className={`form-control ${errors.Alcobas ? "is-invalid" : ""}`}
          />
        </div>

        <div className="col-lg-3 col-12">
          <label htmlFor="Baños" className="form-label">
            Baños
          </label>
          <input
          {...register("Baños", {
            required: "Este campo es obligatorio.",
          })}
            min="0"
            type="number"
            className={`form-control ${errors.Baños ? "is-invalid" : ""}`}
          />
        </div>

        <div className="col-lg-3 col-12">
          <label htmlFor="Garaje" className="form-label">
            Garaje
          </label>
          <input
            min="0"
            type="number"
            className={`form-control ${errors.Garaje ? "is-invalid" : ""}`}
            {...register("Garaje", { required: "Este campo es obligatorio." })}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-3 col-12">
          <label htmlFor="Estrato" className="form-label">
            Estrato
          </label>
          <select
            {...register("Estrato", { required: true })}
            className="form-select"
          >
            <option value="0">N/D</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">Rural</option>
            <option value="8">Comercial</option>
          </select>
        </div>

        <div className="col-lg-3 col-12">
          <label htmlFor="Piso" className="form-label">
            Piso
          </label>
          <input
            min="0"
            type="number"
            placeholder="Deje 0 Si es Indefinido"
            className={`form-control ${errors.Piso ? "is-invalid" : ""}`}
            {...register("Piso", { required: "Este campo es obligatorio." })}
          />
        </div>

        <div className="col-lg-2 col-12">
          <label htmlFor="Area_Privada" className="form-label">
            Area Privada
          </label>
          <input
            min="1"
            type="number"
            placeholder="m²"
            className={`form-control ${
              errors.Area_Privada ? "is-invalid" : ""
            }`}
            {...register("Area_Privada", {
              required: "Este campo es obligatorio.",
            })}
          />
        </div>

        <div className="col-lg-2 col-12">
          <label htmlFor="Area_Construida" className="form-label">
            Area Construida
          </label>
          <input
            min="1"
            type="number"
            placeholder="m²"
            className={`form-control ${
              errors.Area_Construida ? "is-invalid" : ""
            }`}
            {...register("Area_Construida", {
              required: "Este campo es obligatorio.",
            })}
          />
        </div>

        <div className="col-lg-2 col-12">
          <label htmlFor="Area_Total" className="form-label">
            Area Total
          </label>
          <input
            min="1"
            type="number"
            placeholder="m²"
            className={`form-control ${errors.Area_Total ? "is-invalid" : ""}`}
            {...register("Area_Total", {
              required: "Este campo es obligatorio.",
            })}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <label htmlFor="Video">Video de Youtube </label>
          <input
            type="text"
            {...register("Video")}
            className={`form-control ${errors.Area_Total ? "is-invalid" : ""}`}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary my-3 py-3">
        Guardar Información Básica
      </button>
    </form>
  );
};

export default PropertyInfoForm;
