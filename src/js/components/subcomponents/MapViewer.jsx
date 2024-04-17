import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';

function MapViewer( {direccion, ciudad}) {
  const [urlMapa, setUrlMapa] = useState('');

  const crearUrlGoogleMaps = (direccion, ciudad) => {
    const Ubicacion = direccion + ciudad;
    const UbicacionFormateada = encodeURIComponent(Ubicacion);
    const urlBase = "https://maps.google.com/maps";
    const parametros = `?q=${UbicacionFormateada}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    const CompleteUrl = urlBase + parametros;
    console.log(CompleteUrl);
    setUrlMapa(CompleteUrl);
  };

  useEffect(()=>{
    crearUrlGoogleMaps(direccion, ciudad);
  }, [direccion, ciudad]);

  return (
    <>
      <Container className="mb-5">
            <Row>
                <Col>
                    <iframe 
                        width="820"
                        height="560"
                        id="gmap_canvas"
                        src={urlMapa}>
                    </iframe>
                </Col>
            </Row>
        </Container>
    </>
  );
}

MapViewer.propTypes = {
  direccion: PropTypes.string,
  ciudad: PropTypes.string
}

export default MapViewer;