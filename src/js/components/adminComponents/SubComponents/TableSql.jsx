import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Alert, Button, Table } from "reactstrap";
import { deleteFieldRequest } from "../../../../api/activo.api";
import { useNavigate } from "react-router-dom";

const TableSql = ({ tableName, tableCont, tableField, reloadData }) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showMessage = () => {
    setShowAlert(true);

    // Limpiar timeout previo si existe
    if (timeoutId) clearTimeout(timeoutId);

    // Establecer nuevo timeout para ocultar el mensaje después de 5 segundos
    const id = setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Ajusta el tiempo según necesites

    setTimeoutId(id);
  };

  const handleDelete = async (tableName, idField, e) => {
    e.preventDefault();
    try {
      const response = await deleteFieldRequest(tableName, idField);
      console.log(response);
      // Verificar si la eliminación fue exitosa antes de actualizar el estado
      if (response.status === 200) {
        showMessage();
        reloadData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Limpieza en caso de que el componente se desmonte antes de tiempo
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <>
      {showAlert && (
        <Alert color="danger">Registro Borrado Satisfactoriamente.</Alert>
      )}
      <Table hover striped responsive size="sm" className="table-chars">
        <thead>
          <tr>
            <th className="section-title">{tableName}</th>
          </tr>
        </thead>
        <tbody className="table-body table-container">
          {tableCont.map((item, index) => (
            <tr
              key={item[tableField.idField]}
              className="d-flex justify-content-between"
            >
              <td>{item[tableField.nameField]}</td>
              <td className="text-center">
                <Button
                  color="danger"
                  onClick={(e) => {
                    handleDelete(tableName, item[tableField.idField], e);
                  }}
                >
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="button-container">
        <Button
          color="success"
          outline
          onClick={() => {
            navigate("/admin-properties/crear-registro", {
              state: { tableName: tableName },
            });
          }}
        >
          Crear Registro
        </Button>
      </div>
    </>
  );
};

export default TableSql;
