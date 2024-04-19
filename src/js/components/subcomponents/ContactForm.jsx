import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input } from "reactstrap";
import { sendMailRequest } from "../../../api/email.api.js";
import Swal from "sweetalert2";
// Importaciones necesarias...

const ContactForm = () => {
  const [response, setResponse] = useState(false);
  const [userName, setUserName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      userName,
      telefono,
      email,
      mensaje,
    };

    try {
      const res = await sendMailRequest(formData);
      console.log(res);
      if (res.data === "recived") {
        setResponse(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (response) {
      Swal.fire({
        title: "¡Mensaje Enviado Con Exito!",
        showCancelButton: false,
        showConfirmButton: true,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setResponse(false);
        setUserName("");
        setTelefono("");
        setEmail("");
        setMensaje("");
        if (window.history.pushState) {
          window.history.pushState(
            {},
            document.title,
            window.location.pathname
          );
        }
      });
    }
  }, [response]);

  return (
    <div>
      <Form className="form_group" onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form_group_input"
            type="text"
            name="userName"
            id="userName"
            placeholder="Nombre Completo:"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="form_group_input"
            type="tel"
            name="telefono"
            id="telefono"
            placeholder="Teléfono:"
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form_group_input"
            type="email"
            name="email"
            id="correoElectronico"
            placeholder="Correo electrónico"
            required
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Input
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="form_group_input"
            type="textarea"
            name="mensaje"
            id="mensaje"
            placeholder="Mensaje"
            required
          />
        </FormGroup>

        <Col></Col>
        <Button type="submit" className="secondary-button-xl mt-3">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
