import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/profileComponents/Navbar";
import Bg from "../../assets/Bg_Profile_View.jpg";
import Sidebar from "../components/profileComponents/Sidebar";
import ProfileInfo from "../components/profileComponents/ProfileInfo";
import Meetings from "../components/profileComponents/Meetings";
import Liked from "../components/profileComponents/Liked";

const Profile = () => {
  const { user, isAuthenticated, profile, role } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user && !user.created) {
      profile();
    }
  }, [isAuthenticated, user]); 
  


  return (
    <>
      <div className="profile-bg">
        <img src={Bg} alt="Background" />
      </div>

      <Navbar username={user.username} />
      <div className="profile-content d-flex">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="informacion-personal" element={<ProfileInfo/>} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="propiedades" element={<Liked />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Profile;
