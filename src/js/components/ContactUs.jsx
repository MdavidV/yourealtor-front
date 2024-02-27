import {
  Button,
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const ContactUs = () => {
  return (
      <Container className="my-5">
        <Row>
          <h1 className="section-title text-center my-3"> Contactenos </h1>
        </Row>
        <Row className="form mt-3 px-5">
          <Col className="form_side form_content">
            <Form className="form_group">
              <FormGroup className="mb-3">
                <Input
                  className="form_group_input"
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Nombre Completo:"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="form_group_input"
                  type="tel"
                  name="telefono"
                  id="telefono"
                  placeholder="Teléfono:"
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Input
                  className="form_group_input"
                  type="email"
                  name="email"
                  id="correoElectronico"
                  placeholder="Correo electrónico"
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Input
                  className="form_group_input"
                  type="textarea"
                  name="mensaje"
                  id="mensaje"
                  placeholder="Mensaje"
                />
              </FormGroup>
              <Button className="secondary-button-xl mt-3">Enviar</Button>
            </Form>
          </Col>
          <Col className="form_side form_info">
            <ListGroup className="form_info_list">
              <ListGroupItem className="form_info_list_item">
                <h2>Información</h2>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-envelope"></i>
                <a href="mailto:correo@info.com">correo@info.com</a>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-telephone"></i>
                <a href="tel:+571234567899">+571234567899</a>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-buildings"></i>
                <p>Av. 26 #12 - 01</p>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-clock"></i>
                <p>7:00 AM - 6:00 PM</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
  );
};

export default ContactUs;
