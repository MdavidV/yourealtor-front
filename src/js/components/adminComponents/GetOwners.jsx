import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Alert, Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useData } from "../../../contexts/DataContext";
import OwnerDetailsModal from "./SubComponents/OwnerDetailsModal";

const GetOwners = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState([]);
  const {owners, loadData} = useData();



  useEffect(() => {
    loadData();
    setData(owners);
  }, []);


  const toggle = () => setModal(!modal);

  const handleRowClick = (owner) => {
    setSelectedOwner(owner);
    toggle();
  }

  return (
<>
      <Table hover striped responsive size="sm" className="table-chars">
        <thead>
          <tr>
            <th className="section-title">Propietarios</th>
          </tr>
        </thead>
        <tbody className="table-body table-container">
          {data.map((item, index) => (
            <tr
              key={index}
              className="d-flex justify-content-between"
              onClick={() => handleRowClick(item)} // Agrega el manejo del clic aquí
            >
              <td>{item.Nombre_Propietario} {item.Apellido_Propietario}</td>
              <td>{item.Email_Propietario} </td>
              <td>{item.Telefono_Propietario} </td>
              <td>Id Inmueble: {item.idActivo} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <OwnerDetailsModal isOpen={modal} toggle={toggle} owner={selectedOwner} />
    </>
  );
};

export default GetOwners;
