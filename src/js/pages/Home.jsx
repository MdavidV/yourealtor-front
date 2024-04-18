import NavHeader from "../components/NavHeader.jsx";
import Banner from "../components/Banner.jsx";
import ContactUs from "../components/ContactUs.jsx";
import AboutUs from "../components/AboutUs.jsx";
import OurTeam from "../components/OurTeam.jsx";
import MapSection from "../components/MapSection.jsx";
import Footer from "../components/Footer.jsx";
import CardsActivo from "../components/CardsActivos.jsx";
import Filter from "../components/Filter.jsx";
import OurAllys from "../components/OurAllys.jsx";
import OurServicesSection from "../components/OurServicesSection.jsx";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavHeader isHome={true} />
      <Banner />
      <Filter isHome={true} />
      <CardsActivo />
      <AboutUs />
      <OurAllys />
      <OurTeam />
      <ContactUs />
      <MapSection />
      <OurServicesSection isHome={true} />
      <Footer />
    </>
  );
};

export default Home;
