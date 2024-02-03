import React from "react";
import Assesor1 from "../../assets/Assesor_1.png";
import Assesor2 from "../../assets/Assesor_2.png";

const OurTeam = () => {
  return (
    <div className="out-team-cont  d-flex flex-column justify-content-center align-items-center">
      <h1 className="section-title text-center ">Nuestro Equipo</h1>

      <div className="assesors-cont d-flex justify-content-center ">
        <div className="assesor position-relative">
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
        </div>
      </div>
      <div className="border-div"></div>

      <a href="#" className="secondary-button-xl my-3">
        Conocenos
      </a>
    </div>
  );
};

export default OurTeam;
