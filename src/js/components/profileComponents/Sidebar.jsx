import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function SidebarItem({ title, dropdownItems, isOpen, onClick }) {
  return (
    <li className={isOpen ? "active" : ""} onClick={onClick}>
      {title} <i className="bi bi-arrow-down-short"></i>{" "}
      {isOpen && (
        <ol>
          {dropdownItems.map((item, index) => (
            <li key={index}>
              {" "}
              <Link to={item.to}> - {item.title}</Link>{" "} {/* Corrección aquí */}
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function Sidebar() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);

  const sidebarItems = [
    { title: "Perfil", dropdownItems: [{ title: "Información Personal", to: "/profile/informacion-personal" }] },
    { title: "Perfil de Citas", dropdownItems: [{ title: "Citas Programadas", to: "/profile/meetings" }] },
    {
      title: role === "Admin" ? "Propiedades" : "Propiedades Guardadas",
      dropdownItems: role === "Admin" ? [{ title: "Banco de Propiedades", to: "/profile/propiedades" }] : [{ title: "Propiedades que te gustaron", to: "/profile/propiedades" }],
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <div className="sidebar-menu">
        <ul>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              title={item.title}
              dropdownItems={item.dropdownItems}
              isOpen={index === activeIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </ul>
      </div>

      <div className="sidebar-buttons text-center">
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="primary-button-xl"
        >
          {" "}
          Cerrar Sesión{" "}
        </button>

        <Link to="" className="sidebar-sm-text d-block mt-3">
          {" "}
          Solicitar Ayuda{" "}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
