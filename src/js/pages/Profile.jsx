import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/profileComponents/Navbar.jsx";
import BgProfileView from "../../assets/Bg_Profile_view.jpg";
import Sidebar from "../components/profileComponents/Sidebar.jsx";
import ProfileInfo from "../components/profileComponents/ProfileInfo.jsx";
import Meetings from "../components/profileComponents/Meetings.jsx";
import Liked from "../components/profileComponents/Liked.jsx";
import CreateBlog from "../components/profileComponents/CreateBlog.jsx";
import GetBlogById from "../components/profileComponents/GetBlogById.jsx";
import ModifyBlog from "../components/profileComponents/ModifyBlog.jsx";

const Profile = () => {
  const { user, isAuthenticated, profile } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user && !user.created) {
      profile();
    }
  }, [isAuthenticated, user]); 
  

//asdasdasdasdasd


  return (
    <>
      <div className="profile-bg">
        <img src={BgProfileView} alt="Background" />
        
      </div>

      <Navbar username={user.username} />
      <div className="profile-content d-flex">
        <Sidebar role={user.role} isProfile={true}/>

        <div className="content">
          <Routes>
            <Route path="informacion-personal" element={<ProfileInfo/>} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="propiedades" element={<Liked />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="blogs-asesor" element={<GetBlogById />} />
            <Route path="modify-blog" element={<ModifyBlog />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Profile;
