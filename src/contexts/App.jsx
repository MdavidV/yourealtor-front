import Home from "../js/pages/Home.jsx";
import Login from "../js/pages/Login.jsx";
import Signup from "../js/pages/Signup.jsx";
import Profile from "../js/pages/Profile.jsx";
import ConfirmView from "../js/pages/confirmView.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import ProfileInfo from "../js/components/profileComponents/ProfileInfo.jsx";
import BringProperty from "../js/pages/BringProperty.jsx";
import BringProperties from "../js/pages/BringProperties.jsx";
import { DataProvider } from "./DataContext.jsx";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/confirm/:token" element={<ConfirmView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile/*" element={<Profile />} />
            </Route>
            <Route path="/confirmView" element={<ConfirmView />}></Route>
            <Route path="/profile" element={<Navigate to="/profile/informacion-personal" />} />
            <Route path="/property/:id" element={<BringProperty/>} />
            <Route path="/properties" element={<BringProperties/>} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
