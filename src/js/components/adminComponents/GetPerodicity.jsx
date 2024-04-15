import React, { useEffect, useState } from "react";
import { getTableRequest } from "../../../api/activo.api";
import TableSql from "./SubComponents/TableSql";
import { useData } from "../../../contexts/DataContext";

const GetPerodicity = () => {
  const tableName = "Periodizidad";
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
