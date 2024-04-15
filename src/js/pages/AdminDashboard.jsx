import React, { useEffect } from "react";
import Navbar from "../components/profileComponents/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "../components/profileComponents/Sidebar";
import GetAsesors from "../components/adminComponents/GetAsesors";
import CreateAsesor from "../components/adminComponents/CreateAsesor";
import InternalChars from "../components/adminComponents/InternalChars";
import ExternalChars from "../components/adminComponents/ExternalChar";
import GetPerodicity from "../components/adminComponents/getPerodicity";
import GetCities from "../components/adminComponents/getCities";
import GetType from "../components/adminComponents/getType";
import GetClients from "../components/adminComponents/getClients";
import GetOwners from "../components/adminComponents/getOwners";
import CreateFiled from "../components/adminComponents/SubComponents/CreateFiled";
import PropertyForm from "../components/adminComponents/PropertyForm";
import PropertyType from "../components/adminComponents/PropertyType";
import GetAsesorProperties from "../components/adminComponents/SubComponents/GetAsesorProperties";

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
            <Route path="/clientes" element={<GetClients />}/>
            <Route path="/propietarios" element={<GetOwners />}/>
            <Route path="/tipo-inmueble" element={<PropertyType />}/>
            <Route path="/propiedades" element={<GetAsesorProperties />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
