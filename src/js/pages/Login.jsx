import React, { useEffect } from "react";
import Logo from "../../assets/Logo.png";
import Bg from "../../assets/Bg_Form_View.jpg";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext.jsx";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  useEffect( () => {
    if(isAuthenticated) navigate('/');
  }, [isAuthenticated])



  return (
    <div className="login-view">
      <img src={Bg} className="login-bg" />
      <div className="logo-container">
        <Link to={"/"}>
          <img src={Logo} />
        </Link>
      </div>

      <Container className="d-flex justify-content-center align-items-center ">
        <Col lg={6} xs={12}className=" p-3  form-login-cont">
          <div className="form-container">
            <div>
              <Col className="my-3 text-center">
                <h1 className="form-title-sign">Inicia Sesion</h1>
              </Col>
            </div>
            <Col className="m-3">
              {loginErrors.map((error, i) => (
                <p className="error-message text-center" key={i}>
                  {error}
                </p>
              ))}
            </Col>

            <form className="my-form" id="myForm" onSubmit={onSubmit}>
              <div className="form-group col-12">
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

              <div className="form-group col-12">
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

              <div className="form-group ">
                <button
                  type="submit"
                  className="button-login primary-button-xl "
                >
                  Inicia sesion
                </button>
              </div>

              <p className="form-paragraph">
                ¿Aun no posees una cuenta?{" "}
                <Link to={"/signup"} className="login-link">
                  Registrate
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

export default Login;
