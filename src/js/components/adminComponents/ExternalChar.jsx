import React, { useEffect, useState } from "react";
import TableSql from "./SubComponents/TableSql.jsx";
import { useData } from "../../../contexts/DataContext.jsx";

const ExternalChars = () => {
  const tableName = "Caracteristicas_Externas";
  const { extData, loadData} = useData();
  const [data, setData] = useState([]);



  useEffect(() => {
    loadData();
  }, []);

  useEffect( () => {
    setData(extData);
  }, [extData]);



  return (
    <TableSql
      tableName={tableName}
      tableCont={data}
      tableField={{
        idField: "idCaracteristicas_Externas",
        nameField: "Nombre_Caracteristica",
      }}
      reloadData={loadData}

    />
  );
};

export default ExternalChars;
