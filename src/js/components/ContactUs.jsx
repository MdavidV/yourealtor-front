import {
  Col,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import ContactForm from "./subcomponents/ContactForm";

const ContactUs = () => {
  return (
    <div id="contactanos">
      <Container className="my-5">
        <Row>
          <h1 className="section-title text-center my-3"> Contactenos </h1>
        </Row>
        <Row className="form mt-3 px-5">
          <Col className="form_side form_content">
            <ContactForm />
          </Col>
          <Col className="form_side form_info">
            <ListGroup className="form_info_list">
              <ListGroupItem className="form_info_list_item">
                <h2>Información</h2>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-envelope"></i>
                <a href="mailto:coo@yourealtor.co">coo@yourealtor.co</a>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-telephone"></i>
                <a href="tel:+571234567899">+573178845335</a>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-buildings"></i>
                <p>Cra 7 NO 32-93 Piso 7</p>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-clock"></i>
                <p>7:00 AM - 6:00 PM</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
