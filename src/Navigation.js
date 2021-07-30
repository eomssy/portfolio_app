import React from'react';
import {Nav, Navbar,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import main from'./resource/main_icon.png';
function Navigation(){
    return(
        <div className="Navigation">
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="App.js">
    <img
      alt="main"
      src="/resource/main_icon.png"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />{' '}
    MPF</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );

}
export default Navigation; 

