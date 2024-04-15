import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Alert, Button, Table } from "reactstrap";
import { deleteFieldRequest } from "../../../../api/activo.api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TableSql = ({ tableName, tableCont, tableField, reloadData }) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showMessage = () => {
    setShowAlert(true);

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    setTimeoutId(id);
  };

  const handleDelete = async (tableName, idField, e) => {
    e.preventDefault(); // Detiene el comportamiento predeterminado del navegador

    // Muestra una advertencia al usuario antes de proceder con la eliminación
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer y puede afectar la integridad de los datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario confirmó la eliminación
        performDelete(tableName, idField);
      }
    });
  };

  const performDelete = async (tableName, idField) => {
    try {
      const response = await deleteFieldRequest(tableName, idField);
      if (response.status === 200) {
        reloadData();
        showMessage();
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
