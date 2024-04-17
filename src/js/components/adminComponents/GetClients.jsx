import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

const GetClients = () => {
  const tableName = "Clientes";

  const navigate = useNavigate();

  const {clients, loadData, setClientToEdit} = useData();
  
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split('T')[0];
  };


  const handleEdit = (clientData) => {
    setClientToEdit(clientData);
    navigate('/admin-properties/nuevo-cliente')
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Identificación</th>
          <th>Fecha de Nacimiento</th>
          <th>Estado del Cliente</th>
          {/* Añade más columnas según sea necesario */}
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.idClientes}>
            <td>{client.idClientes}</td>
            <td>{client.Nombre}</td>
            <td>{client.Apellidos}</td>
            <td>{client.Telefono}</td>
            <td>{client.N_identificacion}</td>
            <td>{formatDate(client.Fecha_Nacimiento)}</td>
            <td>{client.Estado_Del_Cliente}</td>
            <td>
              <Button color="secondary" onClick={() => handleEdit(client)}>
                Editar
              </Button>
            </td>
            {/* Añade más celdas de datos según sea necesario */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GetClients;
