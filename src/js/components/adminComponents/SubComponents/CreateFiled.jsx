import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { createFieldRequest } from '../../../../api/activo.api';

const CreateFiled = () => {
    const location = useLocation();
    const {tableName} = location.state || {};
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const  [data, setData] = useState('');

    const handleDataNameChange = (e) => {
        setData(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createFieldRequest( tableName, data);
            if(response.status === 200){
                setShowAlert(true);
                setTimeout( () => navigate(-1), 3000);
            }
            // navigate('/admin-properties/caracteristicas-externas');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        return () => clearTimeout();
    }, []);


  return (
    <div>
    {showAlert && <Alert color='success'>Regristro Creado Satisfactoriamente. Redirigiendo...</Alert>}
    <Form onSubmit={handleSubmit}>
      <FormGroup className="m-4">
        <Label>Nombre del Registro en la tabla: {tableName}</Label>
        <Input type="text" onChange={handleDataNameChange} required></Input>
      </FormGroup>
      <Button color="success m-3 p-3">Crear!</Button>
    </Form>
  </div>
  )
}

export default CreateFiled
