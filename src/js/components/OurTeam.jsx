import React from "react";
import Assesor1 from "../../assets/Assesor_1.png";
import Assesor2 from "../../assets/Assesor_2.png";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="out-team-cont  d-flex flex-column justify-content-center align-items-center" id="ourTeam">
      <h1 className="section-title text-center ">Nuestro Equipo</h1>

      <div className="assesors-cont d-flex justify-content-center ">
        <div className="assesor position-relative">
          <img src="https://staticw.s3.amazonaws.com/perfiles/b20240223093848232446.png" />
          <div className="overlay  ">
            <div className="overlay-text  text-center">
              <p className="assesor-card-text my-2">COO</p>
              <h2 className="assesor-card-title">Hector Gallego</h2>
              <Link to='/contact' className="primary-button-sm">
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>

        <div className="assesor">
          <img src={Assesor1} />
          <div className="overlay  ">
            <div className="overlay-text  text-center">
              <p className="assesor-card-text my-2">CEO</p>
              <h2 className="assesor-card-title">Orlando Camacho</h2>
              <Link to='/contact' className="primary-button-sm">
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="assesor">
          <img src={Assesor2} />
          <div className="overlay  ">
            <div className="overlay-text  text-center">
              <p className="assesor-card-text my-2">Agente Inmobiliario</p>
              <h2 className="assesor-card-title">Jhon Doe</h2>
              <a href="#" className="primary-button-sm">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>

        <div className="assesor">
          <img src={Assesor1} />
          <div className="overlay  ">
            <div className="overlay-text  text-center">
              <p className="assesor-card-text my-2">Agente Inmobiliario</p>
              <h2 className="assesor-card-title">Jhon Doe</h2>
              <a href="#" className="primary-button-sm">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>

        <div className="assesor">
          <img src={Assesor2} />
          <div className="overlay  ">
            <div className="overlay-text  text-center">
              <p className="assesor-card-text my-2">Agente Inmobiliario</p>
              <h2 className="assesor-card-title">Jhon Doe</h2>
              <a href="#" className="primary-button-sm">
                Agendar Cita
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="border-div"></div>

    </div>
  );
};

export default OurTeam;
