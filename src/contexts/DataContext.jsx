import { createContext, useContext, useState } from "react";
import { getActivoRequest, getActivosRequest, getCitiesRequest } from "../api/activo.api";

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
    const [cities, setCities] = useState('');
    const [dataFiltered, setDataFiltered] = useState('');
    const [activo, setActivo] = useState('');

    const fetchData = async()=>{
        try {
            if(!data){
                const response = await getActivosRequest();
                const data = response.data;
                setData(data);
            }else{
                return
            }

        } catch (error) {
            return console.log({ message: error.message });
        }
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
            return console.log({ message: error.message });
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
                fetchData,
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