import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const DescriptionPropertyForm = ({ setDescription, initialData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();



  useEffect(() => {
    if(initialData){
      setValue('Descripcion', initialData)
    }

  }, [initialData, setValue]);

  const onSubmit = (data) => {
    console.log(data)
    setDescription(data.Descripcion);
  };


  return (
    <div className="row">
      <div className="col-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="Descripcion" className="form-label">
              Descripción
            </label>
            <textarea
              {...register("Descripcion", {
                required: "La descripcion es obligatoria",
              })}
              className="form-control"
            />
            {errors.Descripcion && (
              <div className="text-danger mt-3">
                {errors.Descripcion.message}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Guardar Descripcion
          </button>
        </form>
      </div>
    </div>
  );
};

export default DescriptionPropertyForm;
