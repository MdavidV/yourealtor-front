import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import ChangePassword from "./ChangePassword.jsx";
import ProfileInfoFields from "./ProfileInfoFields.jsx";

const ProfileInfo = () => {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const { user } = useAuth();

  const handleOpenChangePassword = () => {
    setIsChangePasswordOpen(true);
  };


  return (
    <div className="info-profile">
      {isChangePasswordOpen ? (
        <ChangePassword />
      ) : (
        <ProfileInfoFields user={user} onOpenChangePassword={handleOpenChangePassword} />
      )}
    </div>
  );
};

export default ProfileInfo;
