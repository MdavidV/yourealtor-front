import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import CardsActivo from "../components/CardsActivos";
import OurAllys from "../components/OurAllys";
import OurServicesSection from "../components/OurServicesSection";


const Home = () => {
  return (
    <>
      <NavHeader />
      <Banner />
      <CardsActivo/>
      <AboutUs />
      <OurAllys />
      <OurTeam />
      <ContactUs />
      <MapSection />
      <OurServicesSection />
      <Footer />
    </>

  );
};

export default Home;
