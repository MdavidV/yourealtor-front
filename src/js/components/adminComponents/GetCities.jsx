import React, { useEffect, useState } from "react";
import TableSql from "./SubComponents/TableSql.jsx";
import { useData } from "../../../contexts/DataContext.jsx";

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
