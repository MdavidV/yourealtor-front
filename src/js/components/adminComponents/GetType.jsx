import React, { useEffect, useState } from "react";
import TableSql from "./SubComponents/TableSql.jsx";
import { useData } from "../../../contexts/DataContext.jsx";

const GetType = () => {
  const tableName = "Tipo_De_Negocio";
  const { dataType, loadData } = useData();
  const [data, setData] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  useEffect( () => {
    setData(dataType);
  }, [dataType]);


  return (
    <>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{
          idField: "idTipo_De_Negocio",
          nameField: "Nombre_Tipo_De_Negocio",
        }}
        reloadData={loadData}
      />
    </>
  );
};

export default GetType;
