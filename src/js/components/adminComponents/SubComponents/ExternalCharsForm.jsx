import React, { useEffect, useState } from "react";
import { useData } from "../../../../contexts/DataContext";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Badge, Button, FormGroup, Input, Label } from "reactstrap";

const ExternalCharsForm = ({setExternalChars}) => {
  const { extData, fetchExtData } = useData();
  const tableName = "Caracteristicas_Externas";
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetchExtData(tableName);
  }, []);

  const options = extData.map((caracteristica) => ({
    value: caracteristica.idCaracteristicas_Externas,
    label: caracteristica.Nombre_Caracteristica,
  }));

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions || []);
  };

  const guardarSeleccion = () => {
    setExternalChars(selectedOptions);
    // Aquí puedes hacer una llamada al backend para guardar las selecciones, si es necesario
  };



  const animatedComponents = makeAnimated();

  return (
    <>
      <Select
        components={animatedComponents}
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        value={selectedOptions}
        closeMenuOnSelect={false}
      />
      <Button color="primary" onClick={guardarSeleccion} className="mt-2">
        Guardar Características
      </Button>
    </>
  );
};

export default ExternalCharsForm;
