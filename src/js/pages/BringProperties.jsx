import { Col, Container, Row } from "reactstrap";
import { useLocation } from 'react-router-dom';
import NavHeader from "../components/NavHeader";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import CardActivo from "../components/subcomponents/CardActivo";
import { useEffect } from "react";

const BringProperties = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
  
    const location = useLocation();
    const { dataFiltered, selectedService } = location.state || {};

    return(
        <>
            <NavHeader isHome={false} />
            <Container className="bringData">
                <Row>
                    <Filter isHome={false}/>
                </Row>
                <Row>
                    <Col className="bringData__activos pt-4">
                        <h2 className="section-subtitle">
                            Resultados de anuncios en {
                            selectedService ? selectedService : 'venta'}
                        </h2>
                    </Col>
                </Row>
                <Row className="my-3">
                    {
                        dataFiltered.length > 0 ? dataFiltered.map( (act,index) => {
                            
                            const items = act.Imagenes.split(', ');
                            return(
                                <Col key={index} sm="12" lg="4">
                                    <CardActivo items={items} activo={act} idActivo={act.idDetalle_Activos}/>
                                </Col>
                            )
                        }) :

                        <Col className="bringData__notFound">
                            <h2>No hay datos relacionados a tu busqueda</h2>
                        </Col>
                    }
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default BringProperties;