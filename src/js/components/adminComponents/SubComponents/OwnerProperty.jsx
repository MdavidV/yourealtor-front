import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const OwnerProperty = ({ setOwnerInfo, initialData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() =>{
    console.log(initialData);
    Object.keys(initialData).forEach(key => {
      setValue(key, initialData[key]);
    });
  }, [initialData, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    setOwnerInfo(data);
    // Aquí enviarías los datos al backend o los manejarías como necesites.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="Nombre_Propietario" className="form-label">
          Nombre del Propietario
        </label>
        <input
          type="text"
          className={`form-control ${errors.Nombre_Propietario ? "is-invalid" : ""}`}
          id="Nombre_Propietario"
          {...register("Nombre_Propietario", { required: "El nombre es obligatorio" })}
        />
        {errors.Nombre_Propietario && <p className="text-danger">{errors.Nombre_Propietario.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="Apellido_Propietario" className="form-label">
          Apellido del Propietario
        </label>
        <input
          type="text"
          className={`form-control ${errors.Apellido_Propietario ? "is-invalid" : ""}`}
          id="Apellido_Propietario"
          {...register("Apellido_Propietario", { required: "El apellido es obligatorio" })}
        />
        {errors.Apellido_Propietario && <p className="text-danger">{errors.Apellido_Propietario.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="Cedula_Propietario" className="form-label">
          Cédula del Propietario
        </label>
        <input
          type="text"
          className={`form-control ${errors.Cedula_Propietario ? "is-invalid" : ""}`}
          id="Cedula_Propietario"
          {...register("Cedula_Propietario", { required: "La cédula es obligatoria" })}
        />
        {errors.Cedula_Propietario && <p className="text-danger">{errors.Cedula_Propietario.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="Email_Propietario" className="form-label">
          Email del Propietario
        </label>
        <input
          type="email"
          className={`form-control ${errors.Email_Propietario ? "is-invalid" : ""}`}
          id="Email_Propietario"
          {...register("Email_Propietario", { required: "El email es obligatorio" })}
        />
        {errors.Email_Propietario && <p className="text-danger">{errors.Email_Propietario.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="Telefono_Propietario" className="form-label">
          Teléfono del Propietario
        </label>
        <input
          type="tel"
          className={`form-control ${errors.Telefono_Propietario ? "is-invalid" : ""}`}
          id="Telefono_Propietario"
          {...register("Telefono_Propietario", { required: "El teléfono es obligatorio" })}
        />
        {errors.Telefono_Propietario && <p className="text-danger">{errors.Telefono_Propietario.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar Información del Propietario
      </button>
    </form>
  );
};

export default OwnerProperty;
