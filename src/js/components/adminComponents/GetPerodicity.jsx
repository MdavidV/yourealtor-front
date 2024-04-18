import React, { useEffect, useState } from "react";
import TableSql from "./SubComponents/TableSql.jsx";
import { useData } from "../../../contexts/DataContext.jsx";

const GetPerodicity = () => {
  const tableName = "Periodicidad";
  const { dataPeriodicity, loadData } = useData();
  const [data, setData] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  useEffect( () => {
    setData(dataPeriodicity);
  }, [dataPeriodicity]);

  return (
    <div>
      <TableSql
        tableName={tableName}
        tableCont={data}
        tableField={{ idField: "idPeriodizidad", nameField: "Tipo_De_Periodo" }}
        reloadData={loadData}
      />
    </div>
  );
};

export default GetPerodicity;
