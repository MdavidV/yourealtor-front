import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";

const GetCities = () => {
  const tableName = "Ciudades";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getTableRequest(tableName);
    setData(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idCiudades", nameField: "Ciudad" }}
        reloadData={fetchData}
      />
    </div>
  );
};

export default GetCities;
