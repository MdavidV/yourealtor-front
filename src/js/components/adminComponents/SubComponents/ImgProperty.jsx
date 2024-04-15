import React, { useState, useRef, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const ImgProperty = ({
  setImages,
  existingImages,
  setImagesToRemove,
  imagesToRemove,
  handleNewImages,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  const handleImageChange = (e) => {
    const newFilesArray = Array.from(e.target.files).map((file) => ({
      file,
      id: `${file.name}-${Date.now()}`, // ID único
      preview: URL.createObjectURL(file),
    }));
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFilesArray]);

    // Aquí usas el callback para actualizar el estado en PropertyForm con los nuevos archivos seleccionados
    handleNewImages([...selectedFiles, ...newFilesArray]); // Asegúrate de pasar los objetos File correctamente
  };

  const removeImage = (idToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((fileObj) => fileObj.id !== idToRemove)
    );

    handleNewImages(filteredFiles.map(fileObj => fileObj.file));
  };

  const removeExistingImage = (urlToRemove) => {
    setImagesToRemove((prevUrls) => [...prevUrls, urlToRemove]);
    setImages((prevImages) =>
      prevImages.filter((image) => image !== urlToRemove)
    );
  };

  // Filtra las imágenes existentes que no están marcadas para eliminación
  const filteredExistingImages = existingImages.filter(
    (url) => !imagesToRemove.includes(url)
  );

  return (
    <div>
      {existingImages.length > 0 && <h2>Imágenes Anteriores</h2>}
      <div className="row flex-wrap">
        {filteredExistingImages.map((url, index) => (
          <div
            key={`existing-${index}`}
            className="col-xl-2 col-12 d-flex flex-column m-2 position-relative"
          >
            <img
              src={url}
              alt={`existing-preview ${index}`}
              className="img-thumbnail"
              style={{ width: "170px", height: "170px" }}
            />
            <button
              type="button"
              className="btn btn-danger mt-2 w-100"
              onClick={() => removeExistingImage(url)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        className="form-control mb-3"
        ref={fileInputRef}
      />
      <div className="row flex-wrap">
        {selectedFiles.map((fileObj) => (
          <div
            key={fileObj.id}
            className="col-xl-2 col-12 d-flex flex-column m-2 position-relative"
          >
            <img
              src={fileObj.preview}
              alt={`new-preview ${fileObj.id}`}
              className="img-thumbnail"
              style={{ width: "170px", height: "170px" }}
            />
            <button
              type="button"
              className="btn btn-danger mt-2 w-100"
              onClick={() => removeImage(fileObj.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgProperty;
