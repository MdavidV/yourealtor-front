import { Col, Container, Row } from "reactstrap";
import ContactUs from "../js/components/contactUs";
import NavHeader from "../js/components/NavHeader";
import Banner from "../js/components/Banner";


function App() {

  

  return (
    <>
      <NavHeader></NavHeader>
      <Banner></Banner>
      <Container>
        <ContactUs></ContactUs>

      </Container>
    </>
  );
}

export default App;
