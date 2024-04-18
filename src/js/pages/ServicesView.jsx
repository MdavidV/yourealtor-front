import React, { useEffect } from "react";
import NavHeader from "../components/NavHeader.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import ServicesCard from "../components/subcomponents/ServicesCard.jsx";

import { Route, Routes } from "react-router-dom";
import SpacesView from "../components/SpacesView.jsx";
import ServicesInfo from "../components/ServicesInfo.jsx";
import ContactUs from "../components/ContactUs.jsx";
import PropertyView from "../components/PropertyView.jsx";
import BackOfficeView from "../components/BackOfficeView.jsx";

const ServicesView = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="services-view">
      <NavHeader isHome='true'/>
      <Banner />

      <ServicesCard />

      <Routes>
        <Route path="/" element={<ServicesInfo />}></Route>
        <Route path="spaces-info" element={<SpacesView />}></Route>
        <Route path="property-info" element={<PropertyView />}></Route>
        <Route path="back-office-info" element={<BackOfficeView />}></Route>
      </Routes>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default ServicesView;
