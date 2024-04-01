import { createContext, useContext, useState } from "react";
import { getActivoRequest, getActivosRequest, getCitiesRequest, getTableRequest } from "../api/activo.api";
import { getAsesorsRequest } from "../api/admin";

export const DataContext = createContext();

export const useData = ()=>{
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("No data context");
      }
      return context;
}

export const DataProvider =({ children }) =>{
    const [data, setData] = useState('');
    const [asesors, setAsesors] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [dataPropertyType, setDataPropertyType] = useState([]);
    const [dataType, setDataType] = useState([]);
    const [dataPeriodicity, setDataPeriodicity] = useState([]);
    const [cities, setCities] = useState('');
    const [intData, setIntData] = useState([]);
    const [extData, setExtData] = useState([]);
    const [dataFiltered, setDataFiltered] = useState('');
    const [activo, setActivo] = useState('');


    const getAsesors = async() => {
        try {
            const response = await getAsesorsRequest();
            if (response.status === 200){
                setAsesors(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }
    const fetchTableData = async (tableName) => {
        try {
            const response = await getTableRequest(tableName);
            if (response.status === 200){
                setDataTable(response.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }


    const fetchIntData = async (tableName) => {
        try {
            const response = await getTableRequest(tableName);
            if (response.status === 200){
                setIntData(response.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchExtData = async (tableName) => {
        try {
            const response = await getTableRequest(tableName);
            if (response.status === 200){
                setExtData(response.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchPropertyType = async (tableName) => {
        try {
            const response = await getTableRequest(tableName);
            if (response.status === 200){
                setDataPropertyType(response.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchType = async (tableName) => {
        try {
            const response = await getTableRequest(tableName);
            if (response.status === 200){
                setDataType(response.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchPeriodicity = async (tableName) => {
        try {
            const response = await getTableRequest(tableName);
            if (response.status === 200){
                setDataPeriodicity(response.data[0]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchData = async()=>{

        // try {
        //     if(!data){
        //         const response = await getActivosRequest();
        //         const data = response.data;
        //         setData(data);
        //     }else{
        //         return
        //     }

        // } catch (error) {
        //     return console.log({ message: error.message });
        // }
    }

    const getAllCities = async()=>{
        try {
            if(!cities){
                const response = await getCitiesRequest();
                const data = response.data;
                setCities(data);
            }else{
                return
            }

        } catch (error) {
            // return console.log({ message: error.message });
        }
    }

    const filteringData = (Ciudad, Tipo_Servicio, Tipo_Activo, data) => {
    
        const items = data.filter((element) => {
          const condicionCiudad = Ciudad !== '' ? element.Ciudad === Ciudad : true;
          const condicionServicio = Tipo_Servicio !== '' ? element.Tipo_Servicio === Tipo_Servicio : true;
          const condicionActivo = Tipo_Activo !== '' ? element.Tipo_Activo === Tipo_Activo : true;

          return condicionCiudad && condicionServicio && condicionActivo;
        });
    
        setDataFiltered(items);
      };

    const getOneActive = async(id) =>{
        try {
            if(!activo){
                const response = await getActivoRequest(id);
                const data = response.data;
                setActivo(data);
            }else{
                return
            }
        } catch (error) {
            return
        }
    }
    return(
        <DataContext.Provider
            value={{
                data,
                getAsesors,
                asesors,
                fetchData,
                fetchTableData,
                dataTable,
                fetchIntData,
                intData, 
                fetchExtData,
                extData,
                fetchPropertyType,
                dataPropertyType,
                fetchType,
                dataType,
                fetchPeriodicity,
                dataPeriodicity,
                cities,
                getAllCities,
                dataFiltered,
                filteringData,
                activo,
                getOneActive
            }}
        >
            {children}
        </DataContext.Provider>
    )

}