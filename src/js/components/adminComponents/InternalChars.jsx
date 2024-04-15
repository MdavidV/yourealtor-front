import React, { useEffect, useState } from "react";
import {
  getTableRequest,
} from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const InternalChars = () => {
  const tableName = "Caracteristicas_Internas";
  const { intData, loadData } = useData();
  const [data, setData] = useState([]);




  useEffect(() => {
    loadData();
  }, []);

  useEffect( () => {
    setData(intData);
  }, [intData])

  return (
    <>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{
          idField: "idCaracteristicas_Internas",
          nameField: "Nombre_Caracteristica",
        }}
        reloadData={loadData}
      />
    </>
  );
};

export default InternalChars;
