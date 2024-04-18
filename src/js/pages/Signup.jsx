import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import Logo from "../../assets/Logo.png";
import Bg from "../../assets/Bg_Form_View.jpg";
import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isDirty },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        title: "Confirma tu correo",
        text: "Recuerda revisar tu correo para confirmar tu cuenta!",
        icon: "question",
      });
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    if (values.password !== values.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords doesnt match",
      });
    } else {
      signup(values);
    }
  });

  const password = watch("password", "");

  return (
    <div className="login-view">
      <img src={Bg} className="login-bg" />
      <div className="logo-container">
        <Link to={"/"}>
          <img src={Logo} />
        </Link>
      </div>

      <Container className="d-flex justify-content-center align-items-center ">
        <Col lg={6} md={9} sm={12} className=" p-3  form-login-cont">
          <div className="form-container">
            <div>
              <Col className="my-3 text-center">
                <h1 className="form-title-sign">Registrate</h1>
              </Col>
            </div>
            <Col className="m-3">
              {registerErrors.map((error, i) => (
                <p className="error-message" key={i}>
                  {error}
                </p>
              ))}
            </Col>

            <form className="my-form" id="myForm" onSubmit={onSubmit}>
              <div className="form-group">
                <label className="form-paragraph" htmlFor="firstName">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-input"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <p className="error-message">First Name is required</p>
                )}
              </div>
              <div className="form-group second-name">
                <label className="form-paragraph" htmlFor="secondName">
                  Apellido
                </label>
                <input
                  type="text"
                  id="secondName"
                  className="form-input"
                  {...register("secondName", { required: true })}
                />
                {errors.secondName && (
                  <p className="error-message">Second Name is required</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-paragraph" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="error-message">Email is required</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-paragraph" htmlFor="password">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="error-message">Password is required</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-paragraph" htmlFor="confirmPassword">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-input"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password ||
                      (errors.confirmPassword && "passwords doesnt match"),
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error-message">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="button-login primary-button-xl "
                >
                  Registrarse
                </button>
              </div>

              <p className="form-paragraph">
                ¿Ya tienes una cuenta?{" "}
                <Link to={"/login"} className="login-link">
                  Inicia sesión
                </Link>
                .
              </p>
            </form>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Signup;
