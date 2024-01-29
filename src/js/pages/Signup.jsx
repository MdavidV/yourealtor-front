import React from "react";
import Logo from "../../assets/logo_unScrolled.png";
import Bg from "../../assets/Bg_Form_View.jpg";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../contexts/api";

const Signup = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const {id , value} = e.target;
    console.log(`updating ${id} to ${value}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSignup = async () => {
    try{
      const response = await api.post('/auth/signup', {firstName, secondName, email, password});
      console.log(response.data);
      window.location.href = '/';
    } catch (error) {
      console.error('Error en el registro: ', error);
    }
  }


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
            <h1 className="form-title-sign">Registrate</h1>
          </Col>
        </Row>

        <Form onSubmit={handleSignup}>
        <Row className="d-flex justify-content-center">
            <Col sm="4" md="4">
              <FormGroup>
                <Label for="firstName" className="form-paragraph">Nombre</Label>
                <Input
                  className="form-input form-paragraph"
                  type="text"
                  id="firstName"
                  value = {formData.firstName}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>

            <Col sm="4" md="4">
              <FormGroup>
                <Label for="secondName" className="form-paragraph">Apellido</Label>
                <Input
                  className="form-input form-paragraph"
                  type="text"
                  id="secondName"
                  value = {formData.secondName}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col sm="4" md="8">
              <FormGroup>
                <Label for="email" className="form-paragraph">Correo electrónico</Label>
                <Input
                  className="form-input form-paragraph"
                  type="email"
                  id="email"
                  value = {formData.email}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col sm="4" md="8">
              <FormGroup>
                <Label for="password" className="form-paragraph">Contrasena</Label>
                <Input
                  className="form-input form-paragraph"
                  type="password"
                  id="password"
                  value = {formData.password}
                  onChange={handleChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col sm="4" md="8">
              <FormGroup>
                <Label for="confirmPassword" className="form-paragraph">Confirmar contrasena</Label>
                <Input
                  className="form-input form-paragraph"
                  type="password"
                  id="confirmPassword"                 
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col sm="4" md="8">


              <FormGroup className="d-flex flex-column">
                <button
                  type="submit"
                  className="primary-button-xl button-login my-3"
                >
                  Registrate
                </button>
                <p className="sm-text-login form-paragraph">
                  Ya posees una cuenta?{" "}
                  <Link className="anchor-sm-login" to={'/Login'}>Ingresa.</Link>
                </p>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  </div>
  )
}

export default Signup