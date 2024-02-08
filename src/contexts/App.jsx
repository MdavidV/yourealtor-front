import Home from "../js/pages/Home.jsx";
import Login from "../js/pages/Login.jsx";
import Signup from "../js/pages/Signup.jsx";
import Profile from "../js/pages/Profile.jsx";
import ConfirmView from "../js/pages/confirmView.jsx";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/confirm/:token" element={<ConfirmView/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path='/confirmView' element={<ConfirmView/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
