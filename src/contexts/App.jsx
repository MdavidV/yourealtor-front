import Home from "../js/pages/Home.jsx";
import Login from "../js/pages/Login.jsx";
import Signup from "../js/pages/Signup.jsx";
import Profile from "../js/pages/Profile.jsx";
import ConfirmView from "../js/pages/ConfirmView.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";

import PrivacyPolicy from "../js/pages/PrivacyPolicy.jsx";
import ContactService from "../js/pages/ContactService.jsx";
import AboutUsView from "../js/pages/AboutUsView.jsx";
import ServicesView from "../js/pages/ServicesView.jsx";
import BringProperty from "../js/pages/BringProperty.jsx";
import BringProperties from "../js/pages/BringProperties.jsx";
import { DataProvider } from "./DataContext.jsx";
import OfferView from "../js/pages/OfferView.jsx";
import Blogs from "../js/pages/Blogs.jsx";
import BlogDetail from "../js/components/BlogDetail.jsx";
import AdminDashboard from "../js/pages/AdminDashboard.jsx";
import { useEffect } from "react";

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
            <Route
              path="/profile"
              element={<Navigate to="/profile/informacion-personal" />}
            />
            <Route path="/property/:id" element={<BringProperty />} />
            <Route path="/properties" element={<BringProperties />} />
            <Route path="/privacy" element={<PrivacyPolicy />}></Route>
            <Route path="/contact" element={<ContactService />}></Route>
            <Route path="/about-us" element={<AboutUsView />}></Route>
            <Route path="/our-services/*" element={<ServicesView />}></Route>
            <Route path="/offer" element={<OfferView />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blog/:slug" element={<BlogDetail />}></Route>
            <Route
              path="/admin-properties/*"
              element={<AdminDashboard />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
