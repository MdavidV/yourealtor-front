import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import CardsActivo from "../components/CardsActivos";
import Filter from "../components/Filter";
import OurAllys from "../components/OurAllys";
import OurServicesSection from "../components/OurServicesSection";
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
