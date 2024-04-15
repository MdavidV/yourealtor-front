import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const GetCities = () => {
  const tableName = "Ciudades";
  const { cities, loadData } = useData();
  const [data, setData] = useState([]);



  useEffect(() => {
    loadData();
  }, []);

  useEffect( () => {
    setData(cities);
  }, [cities])

  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idCiudades", nameField: "Ciudad" }}
        reloadData={loadData}
      />
    </div>
  );
};

export default GetCities;
