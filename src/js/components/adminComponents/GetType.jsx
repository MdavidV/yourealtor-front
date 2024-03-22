import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";

const GetType = () => {
  const tableName = "Tipo_De_Negocio";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getTableRequest(tableName);
    setData(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{
          idField: "idTipo_de_Negocio",
          nameField: "Nombre_Tipo_De_Negocio",
        }}
        reloadData={fetchData}
      />
    </>
  );
};

export default GetType;
