export const  formatActivoData = (data) => {
    const ownerInfo = {
      Nombre_Propietario: data.Nombre_Propietario,
      Apellido_Propietario: data.Apellido_Propietario,
      Cedula_Propietario: data.Cedula_Propietario,
      Email_Propietario: data.Email_Propietario,
      Telefono_Propietario: data.Telefono_Propietario
      };
  
    // Crear objeto de información básica del activo
    const basicInfo = {
        Encargado_Del_Activo: data.Encargado_Del_Activo,
        Titulo_Del_Inmueble: data.Titulo_Del_Inmueble,
        Matricula_Inmobiliaria: data.Matricula_Inmobiliaria,
        Estado_Activo: data.Estado_Activo,
        Nombre_Tipo_Activo: data.Nombre_Tipo_Activo,
        Nombre_Tipo_De_Negocio: data.Nombre_Tipo_De_Negocio,
        Precio_Venta: data.Precio_Venta,
        Precio_Alquiler: data.Precio_Alquiler,
        Tipo_De_Periodo: data.Tipo_De_Periodo,
        Valor_Administracion: data.Valor_Administracion,
        Estado_Propiedad: data.Estado_Propiedad,
        Año_Construccion: data.Año_Construccion,
        Alcobas: data.Alcobas,
        Baños: data.Baños,
        Garaje: data.Garaje,
        Estrato: data.Estrato,
        Piso: data.Piso,
        Area_Privada: data.Area_Privada,
        Area_Construida: data.Area_Construida,
        Area_Total: data.Area_Total,
        Video: data.Video,


        // ...otros campos relevantes del activo
      };
  
    // Crear objeto de información de ubicación
    const location = {
        Departamento: data.Departamento,
        Ciudad: data.Ciudad,
        Localidad: data.Localidad,
        Barrio: data.Barrio,
        Direccion: data.Direccion
      };

      const description = {
        Descripcion: data.Descripcion
      }
  
    // Asegurarse de que internalChars y externalChars son arrays
    // Si ya son arrays, esta conversión es innecesaria y puedes omitirla
    const internalChars =  data.internalChars || [];
    const externalChars =  data.externalChars || [];
  
    // Asegurarse de que images es un array
    const images = data.Imagenes || [];
  
    // Retornar el nuevo objeto estructurado
    return {
      ownerInfo,
      basicInfo,
      location,
      internalChars,
      externalChars,
      description,
      images
    };
  }