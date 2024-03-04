import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
// import OurAllys from "../components/OurAllys";
import OurTeam from "../components/OurTeam";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import CardsActivo from "../components/CardsActivos";
import Filter from "../components/Filter";


const Home = () => {
  return (
    <>
      <NavHeader isHome={true} />
      <Banner />
      <Filter isHome={true}/>
      <CardsActivo/>
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
