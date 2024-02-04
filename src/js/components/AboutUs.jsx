import React from "react";
import Asset1 from "../../assets/About_Us1.jpg";
import Asset2 from "../../assets/About_Us2.jpg";
import { Container } from "reactstrap";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <h1 className="section-title my-2 text-center">Quienes Somos?</h1>
      <div className="grid-container">
        <img src={Asset1} className="grid-item imagen1" />
        <img src={Asset2} className="grid-item imagen2" />

        <div className="grid-item text-about">
        <div className=" text1">
          <h2 className="section-title my-4">Nuestro Equipo De <br /> Trabajo.</h2>
          <p className="about-us-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repudiandae quam culpa illum reprehenderit quis molestias,
          </p>
        </div>

        <div className="text2 ">
          <h2 className="section-title ">CEO</h2>
          <p className="about-us-text">
            Lorem ipsum
          </p>
        </div>
        <div className=" text3 ">
          <h2 className="section-title ">COO</h2>
          <p className="about-us-text">
            Lorem ipsum
          </p>
        </div>

        <div className=" grid-anchor">
            <a href="#" className="secondary-button-xl">
                Conoce mas!
            </a>
        </div>
        </div>
   
      </div>
    </Container>
  );
};

export default AboutUs;
