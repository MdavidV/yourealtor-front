import React, { useEffect } from "react";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import { Container } from "reactstrap";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import OurAllys from "../components/OurAllys";
import OurTeam from "../components/OurTeam";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavHeader />
      <Banner />
      <AboutUs />
      {/* <OurAllys /> */}
      <OurTeam />
      <ContactUs />
      <MapSection />
      <Footer />
    </>

  );
};

export default Home;
