import React, { useEffect} from "react";
import { useData } from "../../../contexts/DataContext.jsx";
import TableSql from "./SubComponents/TableSql.jsx";

const GetClientsType = () => {
  const tableName = "tipo_cliente";
  const { clientsType, loadData } = useData();

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
