import { useEffect, useState } from "react";
import { getActivosRequest } from "../../api/activo.api";
import CardActivo from "./subcomponents/CardActivo";
import { Col, Container, Row } from "reactstrap";

const CardsActivos = ()=>{

    const [activos, setActivos] = useState([]);

    useEffect(()=>{
        const loadActivo = async()=>{
            const response = await getActivosRequest();
            const data = response.data;
            const shortData = data.slice(0,3);
            setActivos(shortData);
        }
        loadActivo();
    }, []);

    return(
        <div className="populars">
            <Container className="my-5 py-5">
                <Row className="my-3 align-items-center">
                    <Col>
                        <h2 className="section-title my-2">Populares</h2>
                    </Col>
                    <Col className="text-end">
                        <a className="my-2 populars__link">Explorar<i className="d-ibline-block ms-3 bi bi-arrow-right"></i></a>
                    </Col>
                </Row>
                <Row className="my-3">
                    {activos.length > 0 && activos.map( (act,index) => {
                        const items = act.Imagenes.split(', ');
                        console.log(items);
                        return(
                            <Col key={index} sm="12" lg="4">
                                <CardActivo items={items} activo={act}/>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}


export default CardsActivos;