import React, { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";

const ImgProperty = ({ setImages }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const newFilesArray = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFilesArray]);
    setImages((prevFiles) => [...prevFiles, ...newFilesArray]);
  };

  const removeImage = (indexToRemove) => {
    setSelectedFiles((currentFiles) =>
      currentFiles.filter((_, index) => index !== indexToRemove)
    );
    // Actualiza también el estado del componente padre
    setImages((currentFiles) =>
      currentFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  // Nota: La subida de archivos se manejará en el componente padre

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        className="form-control mb-3"
        ref={fileInputRef}
      />
      <div className="row flex-wrap">
        {selectedFiles.map((file, index) => (
          <div key={index} className="col-xl-2 col-12 d-flex flex-column m-2 position-relative">
            <img
              src={URL.createObjectURL(file)}
              alt={`preview ${index}`}
              className="img-thumbnail"
              style={{ width: "170px", height: "170px" }}
              onLoad={() => URL.revokeObjectURL(file)} // Revocar la URL una vez cargada la imagen
            />
            <button
              type="button"
              className="btn btn-danger mt-2 w-100"
              onClick={() => removeImage(index)}
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
