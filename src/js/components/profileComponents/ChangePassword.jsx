import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import Swal from "sweetalert2";


const ChangePassword = () => {
  const navigate = useNavigate();
  const {
    user,
    errors: changePasswordErrors,
    changePassword,
    changed,
  } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    if (values.newPassword !== values.confirmNewPassword) {
      setError("confirmNewPassword", {
        type: "manual",
        message: "Passwords don't match",
      });

      console.log("No coinciden");
    } else {
      try {
        await changePassword(values);
      } catch (error) {
        console.error("Error changing password:", error);
      }
    }
  });

  useEffect(() => {
    if (changed) {
      Swal.fire({
        title:"¡Contraseña actualizada con éxito!",
        showCancelButton:false,
        showConfirmButton:true,
        icon:"success",
        confirmButtonText:"OK",
      }).then( () => {
        navigate('/profile')
      })
    }
  }, [changed]);




  return (
    <div>
      <h1 className="section-title text-center my-5">Cambiar Contrasena</h1>
      <form
        className="d-flex flex-column justify-content-center align-items-center mt-5"
        onSubmit={onSubmit}
      >
        {changePasswordErrors.map((error, i) => (
          <p className="error-message" key={i}>
            {error}
          </p>
        ))}

        {errors.confirmNewPassword && (
          <p className="error-message">{errors.confirmNewPassword.message}</p>
        )}
        <div className="input-password my-3">
          <label
            htmlFor="currentPassword"
            className="d-block sm-profile-info mb-1"
          >
            Contrasena Actual
          </label>
          <input
            type="password"
            name=""
            id="currentPassword"
            {...register("currentPassword", { required: true })}
          />
        </div>

        <div className="input-password my-3">
          <label htmlFor="newPassword" className="d-block sm-profile-info mb-1">
            Nueva Contrasena
          </label>
          <input
            type="password"
            name=""
            id="newPassword"
            {...register("newPassword", { required: true })}
          />
        </div>

        <div className="input-password my-3">
          <label
            htmlFor="confirmNewPassword"
            className="d-block sm-profile-info mb-1"
          >
            Confirmar Nueva Contrasena
          </label>
          <input
            type="password"
            name=""
            id="confirmNewPassword"
            {...register("confirmNewPassword", { required: true })}
          />
          <input
            type="hidden"
            name="userId"
            value={user.id}
            {...register("id")}
          />
        </div>

        <button type="submit" className="primary-button-l mt-3">
          Cambiar Contrasena
        </button>
      </form>

    </div>
  );
};

export default ChangePassword;
