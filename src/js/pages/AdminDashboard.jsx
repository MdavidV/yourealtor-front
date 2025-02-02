import React, { useEffect } from "react";
import Navbar from "../components/profileComponents/Navbar.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import Sidebar from "../components/profileComponents/Sidebar.jsx";
import GetAsesors from "../components/adminComponents/GetAsesors.jsx";
import CreateAsesor from "../components/adminComponents/CreateAsesor.jsx";
import InternalChars from "../components/adminComponents/InternalChars.jsx";
import ExternalChars from "../components/adminComponents/ExternalChar.jsx";
import GetPerodicity from "../components/adminComponents/GetPerodicity.jsx";
import GetCities from "../components/adminComponents/GetCities.jsx";
import GetType from "../components/adminComponents/GetType.jsx";
import GetClients from "../components/adminComponents/GetClients.jsx";
import GetOwners from "../components/adminComponents/GetOwners.jsx";
import CreateFiled from "../components/adminComponents/SubComponents/CreateFiled.jsx";
import PropertyForm from "../components/adminComponents/PropertyForm.jsx";
import PropertyType from "../components/adminComponents/PropertyType.jsx";
import GetAsesorProperties from "../components/adminComponents/SubComponents/GetAsesorProperties.jsx";
import GetClientsType from "../components/adminComponents/GetClientsType.jsx";
import NewClient from "../components/adminComponents/SubComponents/NewClient.jsx";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, role } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user.role !== "Admin" && user.role !== 'Asesor') {
      navigate("/");
    }
  }, []);

  return (
    <div className="admin-view-container">
      <Navbar />
      <div className="profile-content d-flex">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route
              path="/asesores-disponibles"
              element={<GetAsesors />}
            />

            <Route path="/registro-inmueble" element={<PropertyForm />}/>
            <Route path="/editar-activo/:activoId" element={<PropertyForm editMode={true}/>}/>
            <Route path="/registro-asesor" element={<CreateAsesor />}/>
            <Route path="/caracteristicas-internas" element={<InternalChars />}/>
            <Route path="/caracteristicas-externas" element={<ExternalChars />}/>
            <Route path="/crear-registro" element={<CreateFiled />}/>
            <Route path="/periodizidad" element={<GetPerodicity />}/>
            <Route path="/Ciudades" element={<GetCities />}/>
            <Route path="/tipos-de-negocio" element={<GetType />}/>
            <Route path="/clients-type" element={<GetClientsType />}/>
            <Route path="/propietarios" element={<GetOwners />}/>
            <Route path="/tipo-inmueble" element={<PropertyType />}/>
            <Route path="/propiedades" element={<GetAsesorProperties />}/>
            <Route path="/nuevo-cliente" element={<NewClient />}/>
            <Route path="/clientes" element={<GetClients />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
