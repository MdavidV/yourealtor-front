import React, { useEffect, useState } from "react";
import { useData } from "../../../contexts/DataContext";
import TableSql from "./SubComponents/TableSql";

const GetClientsType = () => {
  const tableName = "Tipo_Cliente";
  const { clientsType, loadData } = useData();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={clientsType}
        tableField={{ idField: "idTipo_Cliente", nameField: "Nombre_Tipo_Cliente" }}
        reloadData={loadData}
      />
    </div>
  );
};

export default GetClientsType;
