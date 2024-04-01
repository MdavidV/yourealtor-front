import React, { useEffect, useState } from "react";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const PropertyType = () => {
  const tableName = "Tipo_Activo";
  const { fetchTableData, dataTable } = useData();
  const [data, setData] = useState([]);

  const getData = () => fetchTableData(tableName);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData(dataTable);
  }, [dataTable]);

  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idTipo_Activo", nameField: "Nombre_Tipo_Activo" }}
        reloadData={getData}
      />
    </div>
  );
};

export default PropertyType;
