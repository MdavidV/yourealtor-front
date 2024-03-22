import React, { useState } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';

const AsesorFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <FormGroup>
      <Label for="filter">Buscar Asesor</Label>
      <Input
        id="filter"
        type="text"
        placeholder="Apellido o código..."
        value={searchTerm}
        onChange={handleChange}
      />
    </FormGroup>
  );
};

export default AsesorFilter;
