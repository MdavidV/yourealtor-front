import React, { useEffect, useState } from "react";
import TableSql from "./SubComponents/TableSql.jsx";
import { useData } from "../../../contexts/DataContext.jsx";

const PropertyType = () => {
  const tableName = "Tipo_Activo";
  const { dataPropertyType, loadData} = useData();
  const [data, setData] = useState([]);



  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setData(dataPropertyType);
  }, [dataPropertyType]);

  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idTipo_Activo", nameField: "Nombre_Tipo_Activo" }}
        reloadData={loadData}
      />
    </div>
  );
};

export default PropertyType;
