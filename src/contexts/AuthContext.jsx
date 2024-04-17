import { createContext, useContext, useEffect, useState } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  profileRequest,
  changePasswordRequest,
} from "../api/auth";
import Cookies from "js-cookie";
import { sendMailRequest } from "../api/email.api";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthPovider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);

      setUser({
        id: res.data.id,
        username: res.data.username,
        secondname: res.data.secondname,
        email: res.data.email,
        role: res.data.role,
        created: res.data.created,
        code: res.data.code
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
      const res = await profileRequest();
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (values) => {
    try {
      await changePasswordRequest(values);
      setChanged(true);
      setTimeout(() => {
        setChanged(false);
      }, 3000);
    } catch (error) {
      console.log(error.response.data);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
    }
  };
  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [errors]);


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

  console.log(user)
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        profile,
        changePassword,
        loading,
        user,
        isAuthenticated,
        errors,
        changed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
