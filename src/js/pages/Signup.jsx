import { useForm } from "react-hook-form";
import React from "react";
import Logo from "../../assets/logo_unScrolled.png";
import Bg from "../../assets/Bg_Form_View.jpg";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { registerRequest } from "../../api/auth";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    if (values.password !== values.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords doesnt match",
      });
    } else {
      const res = await registerRequest(values);
      console.log(res);
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
        <div className="col-6 p-3  form-login-cont">
          <Row>
            <Col className="my-3 text-center">
              <h1 className="form-title-sign">Registrate</h1>
            </Col>
          </Row>

          {/* <form
            className=""
            onSubmit={handleSubmit((values) => {
              if (values.password !== values.confirmPassword) {
                setError("confirmPassword", {
                  type: "manual",
                  message: "Passwords doesnt match",
                });
              } else {
                console.log(values);
              }
            })}
          >
            <div className="input-text-container">
              <div className="">

              <label htmlFor="name" className="form-paragraph">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                {...register("firstName", { required: true })}
              />
              </div>
              <label htmlFor="secondName" className="form-paragraph">Second Name</label>
              <input
                type="text"
                className="form-input  "
                {...register("secondName", { required: true })}
              />
            </div>

            <input
              type="email"
              placeholder="email"
              className="form-input d-block col-10 m-3"
              {...register("email", { required: true })}
            />

            <input
              type="password"
              placeholder="password"
              className="form-input"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Password is required</p>}

            <input
              type="password"
              placeholder="Confirm password"
              className="form-input"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || console.log("Passwords doesnt match"),
              })}
            />

            <Row className="d-flex justify-content-center">
              <Col sm="4" md="10">
                <FormGroup className="d-flex flex-column">
                  <button
                    type="submit"
                    className=" primary-button-xl button-login my-3"
                    disabled={!isDirty || Object.keys(errors).length > 0}
                  >
                    Registrate
                  </button>
                  <p className="sm-text-login form-paragraph">
                    Ya posees una cuenta?{" "}
                    <Link className="anchor-sm-login" to={"/Login"}>
                      Ingresa.
                    </Link>
                  </p>
                </FormGroup>
              </Col>
            </Row>
          </form> */}

          <div className="form-container">
            <form className="my-form" id="myForm" onSubmit={onSubmit}>
              <div className="form-group">
                <div className="name-container">
                  <div className="form-group">
                    <label htmlFor="firstName">Nombre</label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-input"
                      {...register("firstName", { required: true })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="secondName">Apellido</label>
                    <input
                      type="text"
                      id="secondName"
                      className="form-input"
                      {...register("secondName", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required</p>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-input"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password ||
                      console.log("Passwords doesnt match"),
                  })}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="submit-button">
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
        </div>
      </Container>
    </div>
  );
};

export default Signup;
