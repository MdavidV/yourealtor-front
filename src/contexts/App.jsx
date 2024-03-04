import Home from "../js/pages/Home.jsx";
import Login from "../js/pages/Login.jsx";
import Signup from "../js/pages/Signup.jsx";
import Profile from "../js/pages/Profile.jsx";
import ConfirmView from "../js/pages/confirmView.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import ProfileInfo from "../js/components/profileComponents/ProfileInfo.jsx";
import PrivacyPolicy from "../js/pages/PrivacyPolicy.jsx";
import ContactService from "../js/pages/ContactService.jsx";
import AboutUsView from "../js/pages/AboutUsView.jsx";
import ServicesView from "../js/pages/ServicesView.jsx";
import SpacesView from "../js/components/SpacesView.jsx";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route path="/contact" element={<ContactService />}></Route>
          <Route path="/about-us" element={<AboutUsView />}></Route>
          <Route path="/our-services/*" element={<ServicesView />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
