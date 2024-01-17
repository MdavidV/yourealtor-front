import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../scss/_main.scss";

import "../App.css";
import { Button, Col, Container, Row } from "reactstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="titulo">
        Find Real Estate <br />
        That Suits You.
      </h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn-primary"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-asd">
        Click on the Vite and React logos to learn more
      </p>
      <Container>
        <Row>
          <Col>
            <a href="#" className="primary-button-xl m-3">
              Button
            </a>

            <a href="#" className="primary-button-l m-3">
              Button
            </a>

            <a href="#" className="primary-button-sm m-3">
              Button
            </a>

            <a href="#" className="primary-button-xsm m-3">
              Button
            </a>
          </Col>
        </Row>

        <Row className="m-5">
          <Col>
            <a href="#" className="secondary-button-xl m-3">
              Button
            </a>

            <a href="#" className="secondary-button-l m-3">
              Button
            </a>

            <a href="#" className="secondary-button-sm m-3">
              Button
            </a>

            <a href="#" className="secondary-button-xsm m-3">
              Button
            </a>
          </Col>
        </Row>

        
        <Row className="m-5">
          <Col>
            <a href="#" className="tertiary-button-xl m-3">
              Button
            </a>

            <a href="#" className="tertiary-button-l m-3">
              Button
            </a>

            <a href="#" className="tertiary-button-sm m-3">
              Button
            </a>

            <a href="#" className="tertiary-button-xsm m-3">
              Button
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
