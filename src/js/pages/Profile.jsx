import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Profile = () => {
    const {user, isAuthenticated, profile, role } = useAuth();
    console.log(user);

    
    
    useEffect(()=> {
      if(isAuthenticated && user) {
        profile()
        console.log('usuario autenticado', role)
      }
    }, [isAuthenticated, user, role])
  return (
    <div>
      {
        role === 'Admin' ? (
          <h1>Hola Asesor {user.username}</h1>

        ) : (
          <h2>Hola Cliente! {user.username}</h2>
        )
      }
    </div>
  )
}

export default Profile
