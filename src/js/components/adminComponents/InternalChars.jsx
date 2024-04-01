import React, { useEffect, useState } from "react";
import {
  getTableRequest,
} from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const InternalChars = () => {
  const tableName = "Caracteristicas_Internas";
  const { fetchTableData, dataTable } = useData();
  const [data, setData] = useState([]);

  const getData = () => fetchTableData(tableName);


  useEffect(() => {
    getData();
  }, []);

  useEffect( () => {
    setData(dataTable);
  }, [dataTable])

  return (
    <>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{
          idField: "idCaracteristicas_Internas",
          nameField: "Nombre_Caracteristica",
        }}
        reloadData={setData}
      />
    </>
  );
};

export default InternalChars;
