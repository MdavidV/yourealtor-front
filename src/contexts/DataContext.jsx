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

    const filteringData = (Ciudad, Tipo_Servicio, Tipo_Activo, data)=>{
        let items = [];
         data.forEach( element => {
            if(Ciudad != '' && Tipo_Activo != ''){
                if(element.Tipo_Servicio === Tipo_Servicio && element.Ciudad === Ciudad && element.Tipo_Activo === Tipo_Activo)
                    items.push(element)        
            }else if(Ciudad != '' && Tipo_Activo === ''){
                if(element.Tipo_Servicio === Tipo_Servicio && element.Ciudad === Ciudad)
                    items.push(element);
            }else if(Ciudad === '' && Tipo_Activo != ''){
                if(element.Tipo_Servicio === Tipo_Servicio && element.Tipo_Activo === Tipo_Activo)
                    items.push(element)
            }else if(Ciudad === '' && Tipo_Activo === ''){
                if(element.Tipo_Servicio === Tipo_Servicio)
                    items.push(element);
            }
        });
        setDataFiltered(items);
    }

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