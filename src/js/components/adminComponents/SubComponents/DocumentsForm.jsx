import React, { useState, useRef } from 'react';
import { FaFilePdf, FaTrash } from 'react-icons/fa';

const DocumentsForm = ({
  setDocuments,
  existingDocuments,
  setDocumentsToRemove,
  documentsToRemove,
  handleNewDocuments,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const newFilesArray = Array.from(e.target.files).map((file) => ({
      file,
      id: `${file.name}-${Date.now()}`,
    }));
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFilesArray]);
    handleNewDocuments(
      [...selectedFiles, ...newFilesArray].map((fileObj) => fileObj.file)
    );
  };

  const removeFile = (idToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((fileObj) => fileObj.id !== idToRemove)
    );
  };

  const removeExistingDocument = (urlToRemove) => {
    setDocumentsToRemove((prevUrls) => [...prevUrls, urlToRemove]);
    setDocuments((prevDocuments) => {
      // Asegurar que prevDocuments es un arreglo antes de intentar filtrarlo
      const safePrevDocuments = Array.isArray(prevDocuments) ? prevDocuments : [];
      return safePrevDocuments.filter((document) => document !== urlToRemove);
    });
  };

  // Asegurarse de que existingDocuments sea un array
  const safeExistingDocuments = Array.isArray(existingDocuments) ? existingDocuments : [existingDocuments];

  const filteredExistingDocuments = safeExistingDocuments.filter(
    (url) => !documentsToRemove.includes(url)
  );

  return (
    <div>
      {safeExistingDocuments.length > 0 && <h2>Documentos Existentes</h2>}
      <div className="row flex-wrap">
        {filteredExistingDocuments.map((url, index) => (
          <div
            key={`existing-doc-${index}`}
            className="col-xl-2 col-12 d-flex flex-column m-2 position-relative justify-content-between align-items-center"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaFilePdf size={150} />
            </a>
            <button
              type="button"
              className="btn btn-danger mt-2 w-100"
              onClick={() => removeExistingDocument(url)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="form-control mb-3"
        ref={fileInputRef}
        accept="application/pdf"
      />
      <div className="row flex-wrap">
        {selectedFiles.map((fileObj, index) => (
          <div
            key={fileObj.id}
            className="col-xl-2 col-12 d-flex flex-column m-2 position-relative justify-content-between align-items-center"
          >
            <a href={fileObj.file} target="_blank" rel="noopener noreferrer">
              <FaFilePdf size={150} />
              <p className="text-center my-2">{fileObj.file.name}</p>
            </a>
            <button
              type="button"
              className="btn btn-danger mt-2 w-100"
              onClick={() => removeFile(fileObj.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsForm;
