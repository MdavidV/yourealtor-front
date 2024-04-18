import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Button } from "reactstrap";
import { useData } from "../../../../contexts/DataContext.jsx";

const InternalCharsForm = ({ setInternalChars, initialData = [] }) => {
  const { intData } = useData(); // Datos de las características internas
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (initialData && intData.length > 0) {
      const initialSelectedOptions = initialData
        .map((char) => options.find((option) => option.label === char))
        .filter(Boolean);

      setSelectedOptions(initialSelectedOptions);
    }
  }, [initialData, intData]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions || []);
  };


  const guardarSeleccion = () => {
    setInternalChars(selectedOptions);
  };

  const options = intData.map((caracteristica) => ({
    value: caracteristica.idCaracteristicas_Internas,
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

export default InternalCharsForm;