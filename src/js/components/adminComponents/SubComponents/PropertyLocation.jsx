import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useData } from "../../../../contexts/DataContext.jsx";

const PropertyLocation = ({ setLocation, initialData}) => {
  const { cities, loadData } = useData();

  useEffect(() => {
    if (!cities) {
      loadData();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() =>{
    console.log(initialData);
    Object.keys(initialData).forEach(key => {
      setValue(key, initialData[key]);
    });
  }, [initialData, setValue]);

  const onSubmit = (data) => {
    // Crear un objeto FormData para enviar la información del formulario
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // Aquí harías la solicitud al servidor/API para enviar 'formData'
    setLocation(Object.fromEntries(formData)); // Para propósitos de demostración en la consola
    // Suponiendo que tienes una función 'sendData' que envía 'formData' al backend
    // sendData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="departamento">Departamento:</label>
          <input
            className="form-control my-2"
            id="departamento"
            {...register("Departamento", {
              required: "Este campo es obligatorio.",
            })}
          />
          {errors.Departamento && <p>{errors.Departamento.message}</p>}
        </div>

        <div>
          <label htmlFor="ciudad" className="form-label">
            Ciudad:
          </label>
          <select
            className="form-select my-2"
            id="ciudad"
            {...register("Ciudad", { required: "Este campo es obligatorio." })}
          >
            {Array.isArray(cities) &&
              cities.map((city, index) => (
                <option key={index} value={city.Ciudad}>
                  {city.Ciudad}
                </option>
              ))}
          </select>
          {errors.Ciudad && (
            <div className="invalid-feedback d-block">
              {errors.Ciudad.message}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="localidad">Localidad:</label>
          <input
            className="form-control my-2"
            id="localidad"
            {...register("Localidad", {
              required: "Este campo es obligatorio.",
            })}
          />
          {errors.Localidad && <p>{errors.Localidad.message}</p>}
        </div>
        <div>
          <label htmlFor="barrio">Barrio:</label>
          <input
            className="form-control my-2"
            id="barrio"
            {...register("Barrio", { required: "Este campo es obligatorio." })}
          />
          {errors.Barrio && <p>{errors.Barrio.message}</p>}
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            className="form-control my-2"
            id="direccion"
            {...register("Direccion", {
              required: "Este campo es obligatorio.",
            })}
          />
          {errors.Direccion && <p>{errors.Direccion.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary mt-3 py-2">
          Guardar Ubicacion
        </button>
      </form>
    </div>
  );
};

export default PropertyLocation;
