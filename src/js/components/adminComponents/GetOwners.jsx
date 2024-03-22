import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";

const GetOwners = () => {
  const tableName = "Propietarios";
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
          idField: "idPropietarios",
          nameField: "Nombre_Propietario",
        }}
        reloadData={fetchData}
      />
    </>
  );
};

export default GetOwners;
