import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Collapse, Alert, Modal, ModalBody, Spinner } from "reactstrap";
import InternalCharsForm from "./SubComponents/InternalCharsForm";
import ExternalCharsForm from "./SubComponents/ExternalCharsForm";
import PropertyInfoForm from "./SubComponents/PropertyInfoForm";
import DescriptionPropertyForm from "./SubComponents/DescriptionPropertyForm";
import ImgProperty from "./SubComponents/ImgProperty";
import PropertyLocation from "./SubComponents/PropertyLocation";
import {
  createPropertyRequest,
  getActivoByIdRequest,
  updatePropertyRequest,
} from "../../../api/activo.api";
import { IoCreateOutline } from "react-icons/io5";
import OwnerProperty from "./SubComponents/OwnerProperty";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DocumentsForm from "./SubComponents/DocumentsForm";

const PropertyForm = ({ editMode }) => {
  const { activoId } = useParams();

  useEffect(() => {
    if (editMode && activoId) {
      const loadActivoInfo = async () => {
        const response = await getActivoByIdRequest(activoId);
        console.log(response.data);
        const data = response.data;
        setOwnerInfo(data.ownerInfo);
        setBasicInfo(data.basicInfo);
        setDescription(data.description?.Descripcion ?? "");
        setLocation(data.location);
        setImages(data.images.split(",")); // Asegúrate de que esto se maneje correctamente como un array
        setInternalChars(data.internalChars.split(", ")); // Convierte la cadena a un array
        setExternalChars(data.externalChars.split(", "));
        setDocuments(data.documents)
      };
      loadActivoInfo();
    }
  }, [editMode, activoId]);

  useEffect(() => {
    if (editMode) {
      Swal.fire({
        title: "Importante!",
        text: "Recuerda guardar la informacion basica del activo para evitar errores!",
      });
    } 
  }, [activoId]);

  useEffect(() => {
    if (!editMode) {
      setOwnerInfo([]);
      setBasicInfo({});
      setDescription("");
      setLocation({});
      setImages([]);
      setInternalChars([]);
      setExternalChars([]);
      setDocuments([]);
      setImagesToRemove([]);
      setDocumentsToRemove([]);
      setNewImages([]);
      setNewDocuments([]);
    }
  }, [editMode]);

  const [basicInfo, setBasicInfo] = useState({});
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({});
  const [images, setImages] = useState([]);
  const [internalChars, setInternalChars] = useState([]);
  const [externalChars, setExternalChars] = useState([]);
  const [ownerInfo, setOwnerInfo] = useState([]);
  const [imagesToRemove, setImagesToRemove] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [documentsToRemove, setDocumentsToRemove] = useState([]);
  const [newDocuments, setNewDocuments] = useState([]);
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const [timeoutId, setTimeoutId] = useState(null);

  const showMessage = () => {
    setShowAlert(true);

    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setShowAlert(false);
      navigate(`/property/${activoId}`);
    }, 5000);

    setTimeoutId(id);
  };

  useEffect(() => {
    // Limpieza en caso de que el componente se desmonte antes de tiempo
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const [isOpen, setIsOpen] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const handleNewImages = (newFiles) => {
    setNewImages(newFiles);
  };

  const handleNewDocuments = (newDocs) => {
    setNewDocuments(newDocs);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    // Adjunta objetos y arreglos como strings usando JSON.stringify
    formData.append("ownerInfo", JSON.stringify(ownerInfo));
    formData.append("basicInfo", JSON.stringify(basicInfo));
    formData.append("description", description);
    formData.append("location", JSON.stringify(location));
    formData.append("internalChars", JSON.stringify(internalChars));
    formData.append("externalChars", JSON.stringify(externalChars));

    // Adjunta archivos
    newImages.forEach((file, index) => {
      formData.append('imgs', file.file); // Asume que `newImages` es un array de { file, id, preview }
    });

    if (imagesToRemove.length > 0) {
      formData.append("imagesToRemove", JSON.stringify(imagesToRemove));
    }

    newDocuments.forEach((file, index) => {
      formData.append('docs', file); // Asume que `newDocuments` es un array de archivos PDF
    });


    if (documentsToRemove.length > 0) {
      formData.append("documentsToRemove", JSON.stringify(documentsToRemove));
    }


    try {
      const response = !editMode
        ? await createPropertyRequest(formData)
        : await updatePropertyRequest(formData, activoId);

      if (response.status === 200) {
        showMessage();
        window.scrollTo(0, 0)
      } else {
        alert('Ocurrio un error, porfavor revise los datos!');
      }
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false);
    }
  };

  const toggle = (section) => {
    setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };

  return (
    <div className="property_form">
      {showAlert && (
        <Alert color="success">
          Regristro Creado Satisfactoriamente. Redirigiendo...
        </Alert>
      )}
      <Card>
        <CardHeader onClick={() => toggle(0)} style={{ cursor: "pointer" }}>
          Propietario del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[0]}>
          <CardBody>
            <OwnerProperty
              setOwnerInfo={setOwnerInfo}
              initialData={ownerInfo}
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(1)} style={{ cursor: "pointer" }}>
          Información Básica Del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[1]}>
          <CardBody>
            <PropertyInfoForm
              setBasicInfo={setBasicInfo}
              initialData={basicInfo}
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(2)} style={{ cursor: "pointer" }}>
          Descripcion Del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[2]}>
          <CardBody>
            <DescriptionPropertyForm
              setDescription={setDescription}
              initialData={description}
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(3)} style={{ cursor: "pointer" }}>
          Ubicacion del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[3]}>
          <CardBody>
            <PropertyLocation
              setLocation={setLocation}
              initialData={location}
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(4)} style={{ cursor: "pointer" }}>
          Imagenes del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[4]}>
          <CardBody>
            <ImgProperty
              setImages={setImages} // Este sigue siendo necesario para otras lógicas
              existingImages={images}
              setImagesToRemove={setImagesToRemove}
              imagesToRemove={imagesToRemove}
              handleNewImages={handleNewImages} // Pasas el callback a `ImgProperty`
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(5)} style={{ cursor: "pointer" }}>
          Características Internas
        </CardHeader>
        <Collapse isOpen={isOpen[5]}>
          <CardBody>
            <InternalCharsForm
              setInternalChars={setInternalChars}
              initialData={internalChars}
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(6)} style={{ cursor: "pointer" }}>
          Características Externas
        </CardHeader>
        <Collapse isOpen={isOpen[6]}>
          <CardBody>
            <ExternalCharsForm
              setExternalChars={setExternalChars}
              initialData={externalChars}
            />
          </CardBody>
        </Collapse>
      </Card>

      <Card>
        <CardHeader onClick={() => toggle(7)} style={{ cursor: "pointer" }}>
          Documentos del Inmueble
        </CardHeader>
        <Collapse isOpen={isOpen[7]}>
          <CardBody>
            <DocumentsForm
              setDocuments={setDocuments} // Actualizará el estado con los nuevos documentos
              existingDocuments={documents} // Documentos existentes
              setDocumentsToRemove={setDocumentsToRemove} // Actualizará el estado con los documentos para eliminar
              documentsToRemove={documentsToRemove} // Documentos marcados para eliminar
              handleNewDocuments={handleNewDocuments} // Pasas el callback a `PdfUploader`
            />
          </CardBody>
        </Collapse>
      </Card>

      <Modal isOpen={loading} centered>
        <ModalBody>
          <div className="text-center">
            <Spinner type="grow" color="primary" /> {/* Puedes personalizar el Spinner como prefieras */}
            <p>Cargando...</p>
          </div>
        </ModalBody>
      </Modal>


      <button onClick={handleSubmit} className="btn btn-success m-3 py-2 px-5">
        <IoCreateOutline className="mx-2" />
        {editMode ? "Editar Activo" : "Crear Activo"}
      </button>
    </div>
  );
};

export default PropertyForm;
