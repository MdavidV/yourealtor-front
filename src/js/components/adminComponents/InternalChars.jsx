import React, { useEffect, useState } from "react";
import {
  deleteInternalCharsRequest,
  getInternalCharsRequest,
  getTableRequest,
} from "../../../api/activo.api";
import { useNavigate } from "react-router-dom";
import TableSql from "./SubComponents/TableSql";

const InternalChars = () => {
  const tableName = "Caracteristicas_Internas";
  const navigate = useNavigate();
  const [chars, setChars] = useState([]);

  const fetchData = async () => {
    const response = await getTableRequest(tableName);
    console.log(response.data[0]);
    setChars(response.data[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (charName, e) => {
    e.preventDefault();
    try {
      const response = await deleteInternalCharsRequest(charName);
      console.log(response);
      // Verificar si la eliminación fue exitosa antes de actualizar el estado
      if (response.status === 200) {
        const updatedChars = await getInternalCharsRequest();
        setChars(updatedChars.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TableSql
        tableName={tableName}
        tableCont={chars}
        tableField={{
          idField: "idCaracteristica_Internas",
          nameField: "Nombre_Caracteristica",
        }}
        reloadData={fetchData}
      />
      {/* <Table hover responsive size="sm" striped className="table-chars">
        <thead>
          <tr>
            <th className="section-title">Caracteristicas Internas</th>
          </tr>
        </thead>
        <div className="table-container">
          <tbody className="table-body table-container">
            {chars.map((char, index) => (
              <tr key={index} className="d-flex justify-content-between">
                <td>{char.Nombre_Caracteristica}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={(e) => {
                      handleDelete(char.Nombre_Caracteristica, e);
                    }}
                  >
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </Table>
      <div className="button-container">
        <Button
          color="success"
          outline
          onClick={() => {
            navigate("crear-caracteristicas-internas");
          }}
        >
          Crear Caracteristica
        </Button>
      </div> */}
    </>
  );
};

export default InternalChars;
