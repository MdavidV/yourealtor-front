import React from "react";
import { Col, Container, Row } from "reactstrap";

const MapSection = () => {
  return (
    <div className="map-cont">
      <Container>
        <Row className="d-flex justify-content-between map-cont_inner">
          <Col className="map-cont_info map-cont_info--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.3437994075741!2d-74.09062356779967!3d4.6093423474356126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f996d9feb8e01%3A0x4cf0f24645107ed9!2zQ3JhLiAyNiAjMTItMDEsIExvcyBNw6FydGlyZXMsIEJvZ290w6E!5e0!3m2!1ses!2sco!4v1707021384054!5m2!1ses!2sco"
              width="670"
              height="597"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>

          <Col className="map-cont_info map-cont_info--text">
            <div>
              <h2 className="section-title">Lorem Ipsum</h2>
              <p className="map-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent a lorem tempor, commodo ante sed, condimentum metus.
                Aliquam vel volutpat sapien. Fusce nec varius lorem. Phasellus
                quis mi interdum, rhoncus nisl vitae, tempor lorem. Mauris sed
                molestie eros. Mauris sit amet pulvinar leo, in molestie quam.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nam justo odio, facilisis pharetra
                feugiat et, sollicitudin eu orci. Donec vitae molestie nunc.
                Nullam eu ullamcorper felis, at tincidunt arcu. Ut ligula erat,
                condimentum a tristique non, venenatis eu lacus.
              </p>
            </div>

            <div className=" mt-5">
              <h2 className="map-subheading">Lorem Ipsum</h2>
              <p className="map-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent a lorem tempor, commodo ante sed, condimentum metus.
              </p>
            </div>

            <div className=" mt-5">
              <h2 className="map-subheading">Lorem Ipsum</h2>
              <p className="map-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent a lorem tempor, commodo ante sed, condimentum metus.
              </p>
            </div>

            <div className=" mt-5">
              <h2 className="map-subheading">Lorem Ipsum</h2>
              <p className="map-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent a lorem tempor, commodo ante sed, condimentum metus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapSection;
