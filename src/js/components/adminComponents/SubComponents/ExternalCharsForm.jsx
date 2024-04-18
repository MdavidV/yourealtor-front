import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Button } from "reactstrap";
import { useData } from "../../../../contexts/DataContext.jsx";

const ExternalCharsSelect = ({ setExternalChars, initialData }) => {
  const { extData } = useData(); // Datos de las características internas
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (initialData && extData.length > 0) {
      const initialSelectedOptions = initialData
        .map((char) => options.find((option) => option.label === char))
        .filter(Boolean);

      setSelectedOptions(initialSelectedOptions);
    }
  }, [initialData, extData]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions || []);
  };


  const guardarSeleccion = () => {
    setExternalChars(selectedOptions);
  };

  const options = extData.map((caracteristica) => ({
    value: caracteristica.idCaracteristicas_Externas,
    label: caracteristica.Nombre_Caracteristica,
  }));


  return (
    <>
      <Select
  
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

export default ExternalCharsSelect;
