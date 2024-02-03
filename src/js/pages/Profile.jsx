import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Profile = () => {
    const {user, isAuthenticated } = useAuth();
    console.log(user);

    useEffect(()=> {
      if(isAuthenticated && user) {
        console.log('usuario autenticado', user)
      }
    }, [isAuthenticated, user])
  return (
    <div>
      <h1>Hola de nuevo {user.username}</h1>
    </div>
  )
}

export default Profile
