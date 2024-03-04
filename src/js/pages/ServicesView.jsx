import React from "react";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ServicesCard from "../components/subcomponents/ServicesCard";

import { Route, Routes } from "react-router-dom";
import SpacesView from "../components/SpacesView";
import ServicesInfo from "../components/ServicesInfo";
import ContactUs from "../components/ContactUs";
import PropertyView from "../components/PropertyView";
import BackOfficeView from "../components/BackOfficeView";

const ServicesView = () => {
  return (
    <div className="services-view">
      <NavHeader />
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
