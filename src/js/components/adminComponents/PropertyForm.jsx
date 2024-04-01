import React, { useState } from "react";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";
import InternalCharsForm from "./SubComponents/InternalCharsForm";
import ExternalCharsForm from "./SubComponents/ExternalCharsForm";
import PropertyInfoForm from "./SubComponents/PropertyInfoForm";
import DescriptionPropertyForm from "./SubComponents/DescriptionPropertyForm";
import ImgProperty from "./SubComponents/ImgProperty";
import PropertyLocation from "./SubComponents/PropertyLocation";
import { createPropertyRequest } from "../../../api/activo.api";
import { IoCreateOutline } from "react-icons/io5";
import OwnerProperty from "./SubComponents/OwnerProperty";

const PropertyForm = () => {
  const [isOpen, setIsOpen] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const [basicInfo, setBasicInfo] = useState({});
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({});
  const [images, setImages] = useState([]);
  const [internalChars, setInternalChars] = useState([]);
  const [externalChars, setExternalChars] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState([]);
  // Estado para controlar la apertura de cada sección

  const handleSubmit = async () => {
    const formData = new FormData();
  
    // Adjunta objetos y arreglos como strings usando JSON.stringify
    formData.append('ownerInfo', JSON.stringify(ownerInfo));
    formData.append('basicInfo', JSON.stringify(basicInfo));
    formData.append('description', JSON.stringify({ description }));
    formData.append('location', JSON.stringify(location));
    formData.append('internalChars', JSON.stringify(internalChars));
    formData.append('externalChars', JSON.stringify(externalChars));
  
    // Adjunta archivos
    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });
  
    try {
      const response = await createPropertyRequest(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggle = (section) => {
    setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };

  return (
    <div className="property_form">
      <Card>
        <CardHeader onClick={() => toggle(0)} style={{ cursor: "pointer" }}>
          Propietario del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[0]}>
          <CardBody>
            <OwnerProperty setOwnerInfo={setOwnerInfo} />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(1)} style={{ cursor: "pointer" }}>
          Información Básica Del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[1]}>
          <CardBody>
            <PropertyInfoForm setBasicInfo={setBasicInfo} />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(2)} style={{ cursor: "pointer" }}>
          Descripcion Del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[2]}>
          <CardBody>
            <DescriptionPropertyForm setDescription={setDescription} />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(3)} style={{ cursor: "pointer" }}>
          Ubicacion del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[3]}>
          <CardBody>
            <PropertyLocation setLocation={setLocation} />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(4)} style={{ cursor: "pointer" }}>
          Imagenes del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[4]}>
          <CardBody>
            <ImgProperty setImages={setImages} />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(5)} style={{ cursor: "pointer" }}>
          Características Internas
        </CardHeader>
        <Collapse isOpen={isOpen[5]}>
          <CardBody>
            <InternalCharsForm setInternalChars={setInternalChars} />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(6)} style={{ cursor: "pointer" }}>
          Características Externas
        </CardHeader>
        <Collapse isOpen={isOpen[6]}>
          <CardBody>
            <ExternalCharsForm setExternalChars={setExternalChars} />
          </CardBody>
        </Collapse>
      </Card>

      <button onClick={handleSubmit} className="btn btn-success m-3 py-2 px-5">
        <IoCreateOutline className="mx-2" />
        Crear Activo
      </button>
    </div>
  );
};

export default PropertyForm;
