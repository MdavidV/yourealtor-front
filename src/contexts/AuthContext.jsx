import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, profileRequest, confirmRequest, activosRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthPovider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('');

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setUser({
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
        role: res.data.role
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };

  const profile = async () => {
    try {
      const res = await profileRequest()
      console.log(res.data.role)
      setRole(res.data.role)
    } catch (error) {
     console.log(error) 
    }
  }


  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
  }
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getActivos = async (req, res) => {
    try {
      const res = await activosRequest()
      console.log(res)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;  
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        profile,
        getActivos,
        role,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
