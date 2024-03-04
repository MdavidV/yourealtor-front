import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Container, 
    Button, 
    Input,
    Form, 
    FormGroup,
    Row,
    Col,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useData } from "../../contexts/DataContext";

const Filter = ({ isHome })=> {
    const navigate = useNavigate();
    const { 
        data, 
        fetchData, 
        cities, 
        getAllCities,
        dataFiltered,
        filteringData
    } = useData();

    useEffect(()=>{
        getAllCities();
        fetchData();
    },[])
    
    //lista de servicios y tipo de proiedad
    const propertyTypes = ['Casa', 'Apartamento', 'Local', 'Bodega'];
    const serviceTypes = ['Venta', 'Arriendo', 'Arriendo corto'];
    
    //valores obtenidos
    const [propertyType, setPropertyType] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [selectedService, setSelectedService] = useState('');
    //Dropdowns de servicio y tipo de propiedad
    const [dropdownPropertyOpen, setDropdownPropertyOpen] = useState(false);
    const [dropdownServiceOpen, setDropdownServiceOpen] = useState(false);

    //sugerencias de ciudades
    const [selectedCity, setSelectedCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Manejar cambio en el input
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedCity(value);
        if(cities){
            const locations = cities.map( element => element.Ciudad);

            if (value.length > 0) {
                const regex = new RegExp(`^${value}`, 'i');
                setSuggestions(locations.sort().filter(v => regex.test(v)));
            } else {
                setSuggestions([]);
            }
        }
    };

    // Seleccionar una sugerencia
    const handleSuggestionClick = (value) => {
        setSelectedCity(value);
        setSuggestions([]);
    };
    /*End Input de ciudad*/
    
    /*Button submit */

    const handleSubmit = (e) => {
       
        e.preventDefault();
        
        let parametros = {
            Ciudad: selectedCity,
            Tipo_Servicio: serviceType != 0 ? serviceType : 'Venta',
            Tipo_Activo: propertyType,
        };
        const { Ciudad, Tipo_Servicio, Tipo_Activo } = parametros;

        setSelectedService(Tipo_Servicio);

        filteringData(Ciudad, Tipo_Servicio, Tipo_Activo, data);
    };
    
    /* End Button submit */

    useEffect(() => {
        if (dataFiltered && dataFiltered.length > 0) {
          navigate('/properties', { state: { dataFiltered,  selectedService} });
        }else if(dataFiltered && dataFiltered.length === 0){
            navigate('/properties', { state: { dataFiltered,  selectedService} });
        }
        // Esta dependencia asegura que el efecto se ejecute solo cuando `dataFiltered` cambie.
      }, [dataFiltered, navigate, selectedService]);

    return(
        <Container className='filterMain'>
            <Row>
                <Col className={`filterMain__form ${!isHome ? 'filterMain__moveTop' : ''}`}>
                    <h2 className='section-subtitle mb-5'>Parametros de busqueda</h2>
                    <Form onSubmit={handleSubmit} className="filterMain__form--inner">
                        <FormGroup className="filterMain__form__group">
                            <Input
                                type="text" 
                                name="city" 
                                placeholder="Ubicación" 
                                value={selectedCity} 
                                onChange={handleChange} 
                                autoComplete="off"
                                className="filterMain__form__group__input filterMain__form__group__input--ubicacion"/>
                            {suggestions.length > 0 && (
                            <ul className="list-group filterMain__form__group__list">
                                {suggestions.map((city, index) => (
                                <li key={index} className="list-group-item filterMain__form__group__list--item" onClick={() => handleSuggestionClick(city)}>
                                    {city}
                                </li>
                                ))}
                            </ul>
                            )}
                        </FormGroup>
                        <FormGroup className="filterMain__form__group">
                            <Dropdown className="filterMain__form__group__dropdown" isOpen={dropdownPropertyOpen} toggle={() => setDropdownPropertyOpen(!dropdownPropertyOpen)}>
                                <DropdownToggle caret> {propertyType ? propertyType : 'Tipo de Inmueble'} </DropdownToggle>
                                <DropdownMenu className="filterMain__form__group__list">
                                {propertyTypes.map((type, index) => (
                                    <DropdownItem key={index} onClick={() => setPropertyType(type)}>
                                    {type}
                                    </DropdownItem>
                                ))}
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup className="filterMain__form__group">
                            <Dropdown className="filterMain__form__group__dropdown" isOpen={dropdownServiceOpen} toggle={() => setDropdownServiceOpen(!dropdownServiceOpen)}>
                                <DropdownToggle caret> {serviceType ? serviceType : 'Tipo de Servicio'} </DropdownToggle>
                                <DropdownMenu className="filterMain__form__group__list">
                                {serviceTypes.map((type, index) => (
                                    <DropdownItem key={index} onClick={() => setServiceType(type)}>
                                    {type}
                                    </DropdownItem>
                                ))}
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                        <Button type="submit" className="filterMain__form__button primary-button-xl">Buscar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

Filter.propTypes = {
    isHome: PropTypes.bool.isRequired
  };

export default Filter;