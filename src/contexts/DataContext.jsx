import { createContext, useContext, useEffect, useState } from "react";
import {
  getActivoRequest,
  getActivosByAdminRequest,
  getActivosRequest,
  getTableRequest,
} from "../api/activo.api";
import { getAsesorsRequest } from "../api/admin";

export const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("No data context");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [asesors, setAsesors] = useState([]);
  const [dataPropertyType, setDataPropertyType] = useState([]);
  const [dataType, setDataType] = useState([]);
  const [dataPeriodicity, setDataPeriodicity] = useState([]);
  const [cities, setCities] = useState("");
  const [intData, setIntData] = useState([]);
  const [extData, setExtData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState("");
  const [activo, setActivo] = useState("");
  const [activosAdmin, setActivosAdmin] = useState([]);
  const [owners, setOwners] = useState([]);
  const [clients, setClients] = useState([]);
  const [clientsType, setClientsType] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const loadData = async () => {
    try {
      const response = await getTableRequest();
      if (response.status === 200) {
        setCities(response.data.cities);
        setDataPropertyType(response.data.propertyTypes);
        setDataType(response.data.businessType);
        setIntData(response.data.int);
        setExtData(response.data.ext);
        setDataPeriodicity(response.data.periodicity);
        setOwners(response.data.owners);
        setClients(response.data.clients);
        setClientsType(response.data.clientsType);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAsesors = async () => {
    try {
      const response = await getAsesorsRequest();
      if (response.status === 200) {
        setAsesors(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      if (!data) {
        const response = await getActivosRequest();
        setData(response.data);
      } else {
        return;
      }
    } catch (error) {
      return console.log({ message: error.message });
    }
  };

  const filteringData = (Ciudad, Tipo_Servicio, Tipo_Activo, data) => {
    const items = data.filter((element) => {
      const condicionCiudad = Ciudad !== "" ? element.Ciudad === Ciudad : true;
      const condicionServicio =
        Tipo_Servicio !== "" ? element.Tipo_Negocio === Tipo_Servicio : true;
      const condicionActivo =
        Tipo_Activo !== "" ? element.Tipo_Activo === Tipo_Activo : true;

      return condicionCiudad && condicionServicio && condicionActivo;
    });

    setDataFiltered(items);
  };

  const getOneActive = async (id) => {
    try {
      if (!activo) {
        const response = await getActivoRequest(id);
        const data = response.data;
        setActivo(data);
      } else {
        return;
      }
    } catch (error) {
      return;
    }
  };

 

  const getActivoByAdmin = async () => {
    try {
      const response = await getActivosByAdminRequest();
      console.log(response);
      setActivosAdmin(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
    setDataLoaded(true);
  }, [data]);

  
  return (
    <DataContext.Provider
      value={{
        data,
        getAsesors,
        asesors,
        fetchData,
        intData,
        extData,
        dataPropertyType,
        dataType,
        dataPeriodicity,
        cities,
        dataFiltered,
        filteringData,
        activo,
        getOneActive,
        getActivoByAdmin,
        activosAdmin,
        owners,
        loadData,
        isDataLoaded,
        setActivo,
        clients,
        clientsType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
