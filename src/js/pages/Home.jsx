import React, { useEffect } from "react";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import { Container } from "reactstrap";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import OurAllys from "../components/OurAllys";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <NavHeader></NavHeader>
      <Banner></Banner>
      <Container>
        <AboutUs />
      </Container>
      <OurAllys />
      <OurTeam />
      <ContactUs />
    </>
  );
};

export default Home;
