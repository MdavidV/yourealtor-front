import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const GetPerodicity = () => {
  const tableName = "Periodizidad";
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
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idPeriodizidad", nameField: "Tipo_De_Periodo" }}
        reloadData={getData}
      />
    </div>
  );
};

export default GetPerodicity;
