import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";

const GetPerodicity = () => {
  const [data, setData] = useState([]);

  const tableName = "Periodizidad";
  const fetchData = async () => {
    const response = await getTableRequest(tableName);
    setData(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idPeriodizidad", nameField: "Tipo_De_Periodo" }}
        reloadData={fetchData}
      />
    </div>
  );
};

export default GetPerodicity;
