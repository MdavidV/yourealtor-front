import React, { useEffect, useState } from "react";
import { useData } from "../../../../contexts/DataContext";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from "reactstrap";

const InternalCharsForm = ({setInternalChars}) => {
  const { intData, fetchIntData } = useData();
  const tableName = "Caracteristicas_Internas";
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetchIntData(tableName);
  }, []);

  const options = intData.map((caracteristica) => ({
    value: caracteristica.idCaracteristicas_Internas,
    label: caracteristica.Nombre_Caracteristica,
  }));

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions || []);
  };

  const guardarSeleccion = () => {
    setInternalChars( selectedOptions);
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

export default InternalCharsForm;
