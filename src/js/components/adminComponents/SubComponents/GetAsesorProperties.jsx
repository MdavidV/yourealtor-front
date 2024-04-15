import React, { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useData } from "../../../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { Table, Button, Badge } from "reactstrap";
import { FaDollarSign, FaEdit, FaInfo, FaBuilding } from "react-icons/fa";

const GetAsesorProperties = () => {
  const { user } = useAuth();
  const { getActivoByAdmin, activosAdmin } = useData();

  
  const navigate = useNavigate();



  useEffect(() => {
    if (user && user.role) {
      if (user.role === "Admin") {
        getActivoByAdmin();
      }
    }
  }, []);


  const renderFirstImage = (imageString) => {
    const imageUrl = imageString.split(",")[0]; // Obtiene la primera URL
    return (
      <img
        src={imageUrl}
        alt="Imagen de la propiedad"
        className="img-responsive"
      />
    );
  };


  const handleEditClick = (activoId) => {
    navigate(`/admin-properties/editar-activo/${activoId}`)
  }

  
  return (
    <Table className="px-5 property-list" responsive>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Datos Inmueble</th>
          <th>Estado</th>
          <th>Inmueble</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {activosAdmin.map((activo) => (
          <tr key={activo.idActivo} className="align-items-center">
            <td className="photo-cell" data-label="Foto">{renderFirstImage(activo.Imagenes)}</td>
            <td className="property-data-cell" data-label="Datos Inmueble">
              <p>Asesor encargado: {activo.Encargado_Del_Activo}</p>
              <p>Código: {activo.idActivo}</p>
              <p>Matricula: {activo.Matricula_Inmobiliaria}</p>
            </td>
            <td className="property-data-cell" data-label="Estado">
              <Badge color="primary" pill>
                {activo.Estado_Activo}
              </Badge>
            </td>
            <td className="property-data-cell" data-label="Inmueble">
              <p>{activo.Titulo_Del_Inmueble}</p>
              <p>
               <FaBuilding/> {activo.Nombre_Tipo_Activo} en {activo.Nombre_Tipo_De_Negocio}
              </p>
              <p>{activo.Ciudad} / {activo.Departamento}</p>
              <p>
                <FaDollarSign />
                {activo.Precio_Venta || activo.Precio_Alquiler}
              </p>
            </td>
            <td className="property-data-cell" data-label="Opciones">
              <Button color="warning" onClick={() => handleEditClick(activo.idActivo)}>
                <FaEdit />
              </Button>

              <Button className='mx-2'color="primary"  onClick={() => {navigate(`/property/${activo.idActivo}`)}}>Ver Inmueble</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GetAsesorProperties;
