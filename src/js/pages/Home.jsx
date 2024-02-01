import React from "react";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
import { Container } from "reactstrap";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <NavHeader></NavHeader>
      <Banner></Banner>
      <Container>
        <ContactUs></ContactUs>
      </Container>
    </>
  );
};

export default Home;
