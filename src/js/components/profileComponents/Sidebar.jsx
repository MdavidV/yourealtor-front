import React, { useEffect, useState } from "react";
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
              <Link to={item.to}> - {item.title}</Link> {/* Corrección aquí */}
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function Sidebar({ isProfile }) {
  const { logout, user } = useAuth();
  const [userRole, setUserRole] = useState('')
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);
  

  useEffect( () => {
    console.log(user);
  }, [])

  useEffect(() => {
    if (user && user.role) {
      setUserRole(user.role);
    }
  }, [user]);
  
  console.log(userRole);

  const sidebarItemsProfile = [
    {
      title: "Perfil",
      dropdownItems: [
        { title: "Información Personal", to: "/profile/informacion-personal" },
      ],
    },
    {
      title: "Perfil de Citas",
      dropdownItems: [{ title: "Citas Programadas", to: "/profile/meetings" }],
    },
    {
      title: userRole === "Admin" || userRole === 'Asesor' ? "Panel de Administrador" : "Propiedades Guardadas",
      dropdownItems:
      userRole === "Admin" || userRole === 'Asesor'
          ? [{ title: "Panel de Administrador", to: "/admin-properties" }]
          : [
              {
                title: "Propiedades que te gustaron",
                to: "/profile/propiedades",
              },
            ],
    },
  ];

  if (userRole === "Admin" || userRole === 'Asesor') {
    sidebarItemsProfile.push({
      title: "Blogs",
      dropdownItems: [
        { title: "Crear Blog", to: "/profile/create-blog" },
        { title: "Tus Blogs", to: "/profile/blogs-asesor" },
      ],
    });
  }

  const adminPropiertiesSidebarItems = [
    {
      title: "Perfil",
      dropdownItems: [
        { title: "Información Personal", to: "/profile/informacion-personal" },
      ],
    },
    {
      title: "Propiedades",
      dropdownItems: [
        {
          title: "Nuevo Inmueble",
          to: "/profile/propiedades",
        },
        {
          title: "Tus Inmuebles",
          to: "/profile/propiedades",
        },
      ],
    },
    {
      title: "Tablas",
      dropdownItems: [
        {
          title: "Caracteristicas Internas",
          to: "/admin-properties/caracteristicas-internas",
        },

        {
          title: "Caracteristicas Externas",
          to: "/admin-properties/caracteristicas-externas",
        },

        {
          title: "Periodizidad",
          to: "/admin-properties/periodizidad",
        },

        {
          title: "Ciudades",
          to: "/admin-properties/Ciudades",
        },
        {
          title: "Tipos de Negocio",
          to: "/admin-properties/tipos-de-negocio",
        },
        {
          title: "Clientes",
          to: "/admin-properties/clientes",
        },
        {
          title: "Propietarios",
          to: "/admin-properties/propietarios",
        },


      ]
    },
    {
      title: "Asesores",
      dropdownItems: [
        {
          title: "Asesores Disponibles",
          to: "/admin-properties/asesores-disponibles",
        },
        {
          title: "Crear Asesor",
          to: "/admin-properties/registro-asesor",
        },
      ]
    }
  ];

  const sidebarItemsToUse = isProfile
    ? sidebarItemsProfile
    : adminPropiertiesSidebarItems;

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <div className="sidebar-menu">
        <ul>
          {sidebarItemsToUse.map((item, index) => (
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
