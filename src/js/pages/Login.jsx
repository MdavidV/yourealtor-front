import React from "react";
import Logo from "../../assets/logo_unScrolled.png";
import Bg from "../../assets/Bg_Form_View.jpg";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-view">
      <img src={Bg} className="login-bg"/>
      <div className="logo-container">
        <Link to={'/'}>
            <img src={Logo} />
        
        </Link>
      </div>

      <Container  className="d-flex justify-content-center align-items-center ">
        <div className="col-6 p-3  form-login-cont">
          <Row>
            <Col  className="my-3 text-center">
              <h1 className="form-title-login">Inicia Sesion</h1>
            </Col>
          </Row>

          <Form>
            <Row className="d-flex justify-content-center">
              <Col sm="4" md="9">
                <FormGroup>
                  <Label for="emailLogin" className="form-paragraph">Correo electrónico</Label>
                  <Input
                    className="form-input form-paragraph"
                    type="email"
                    name="emailLogin"
                    id="emailLogin"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center">
              <Col sm="4" md="9">
                <FormGroup>
                  <Label for="emailLogin" className="form-paragraph">Contrasena</Label>
                  <Input
                    className="form-input form-paragraph"
                    type="password"
                    name="passwordLogin"
                    id="passwordLogin"
                  ></Input>
                </FormGroup>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center">
              <Col sm="4" md="9">
                <FormGroup className="checkbox-container">
                  <input
                    type="checkbox"
                    name="checkLogin"
                    id="checkLogin"
                    className=" form-paragraph"
                  />
                  <Label for="checkLogin" className="form-paragraph mx-3">Permanecer Conectado</Label>
                </FormGroup>

                <FormGroup className="d-flex flex-column">
                  <button
                    type="submit"
                    className="primary-button-xl button-login my-3"
                  >
                    Inicia Sesion
                  </button>
                  <p className="sm-text-login form-paragraph">
                    No tienes cuenta?{" "}
                    <Link className="anchor-sm-login" to={'/Register'}>Registrate.</Link>
                  </p>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
