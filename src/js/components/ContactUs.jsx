import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import ContactForm from "./subcomponents/ContactForm.jsx";

const ContactUs = () => {
  const addressLink =
    "https://www.google.com/maps/place/Cra.+7+%2332-93,+Bogot%C3%A1/@4.6204523,-74.0700878,17z/data=!4m6!3m5!1s0x8e3f9985b17fd2f1:0xd2b04330d5ca16f8!8m2!3d4.6200085!4d-74.0680171!16s%2Fg%2F11c26sbvd2?entry=ttu";
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
                <a href="tel:+573178845335">+573178845335</a>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-buildings"></i>
                <a href={addressLink}>Cra 7 NO 32-93 Piso 7</a>
              </ListGroupItem>
              <ListGroupItem className="form_info_list_item">
                <i className="bi bi-clock"></i>
                <a href="#">7:00 AM - 6:00 PM</a>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
