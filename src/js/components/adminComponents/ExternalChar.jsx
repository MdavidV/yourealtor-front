import React, { useEffect, useState } from "react";
import {
  getTableRequest,
} from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const ExternalChars = () => {
  const tableName = "Caracteristicas_Externas";
  const { fetchTableData, dataTable } = useData();
  const [data, setData] = useState([]);

  const getData = () => fetchTableData(tableName);

  useEffect(() => {
    getData();
  }, []);

  useEffect( () => {
    setData(dataTable);
  }, [dataTable]);



  return (
    <TableSql
      tableName={tableName}
      tableCont={data}
      tableField={{
        idField: "idCaracteristicas_Externas",
        nameField: "Nombre_Caracteristica",
      }}
      reloadData={getData}

    />
  );
};

export default ExternalChars;
