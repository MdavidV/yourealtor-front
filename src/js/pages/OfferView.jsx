import React, { useEffect, useState } from "react";
import NavHeader from "../components/NavHeader.jsx";
import Footer from "../components/Footer.jsx";
import ContactUs from "../components/ContactUs.jsx";
import { PopupModal } from "react-calendly";

const OfferView = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="offerView">
      <NavHeader isHome={false} />

      <h2 className="section-title text-center">Pide una Cita con un Asesor</h2>
      <div className="d-flex justify-content-center">
        <button
          className="primary-button-xl my-5"
          onClick={() => setIsOpen(true)}
        >
          Agenda una Cita Aqui!
        </button>
        <PopupModal
          url="https://calendly.com/vinaarizadavid"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("offerView")}
        />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default OfferView;
