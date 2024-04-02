import React, { useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useData } from "../../../../contexts/DataContext";
import { Table, Button } from "reactstrap";
import { FaEdit } from "react-icons/fa";

const GetAsesorProperties = () => {
  const { user } = useAuth();
  const { getActivoByAdmin, activosAdmin } = useData();

  useEffect(() => {
    if (user && user.role) {
      if (user.role === "Admin") {
        getActivoByAdmin();
      }
    }
  }, []);

  useEffect(() => {
    console.log(activosAdmin);
  }, [activosAdmin]);

  return (
    <Table className="px-5">
      <thead>
        <tr>
          <th>ID Activo</th>
          <th>Encargado del Activo</th>
          <th>Estado del Activo</th>
          <th>Tipo de Activo</th>
          <th>Título del Inmueble</th>
          <th>Matrícula Inmobiliaria</th>
          <th>Ciudad</th>
          <th>Tipo de Negocio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {activosAdmin.map((activo) => (
          <tr key={activo.idActivo}>
            <td>{activo.idActivo}</td>
            <td>{activo.Encargado_Del_Activo}</td>
            <td>{activo.Estado_Activo}</td>
            <td>{activo.Nombre_Tipo_Activo}</td>
            <td>{activo.Titulo_Del_Inmueble}</td>
            <td>{activo.Matricula_Inmobiliaria}</td>
            <td>{activo.Ciudad}</td>
            <td>{activo.Nombre_Tipo_De_Negocio}</td>
            <td>
              <Button color="primary">
                <FaEdit />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GetAsesorProperties;
