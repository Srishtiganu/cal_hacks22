import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useState } from 'react';

function myNavbar() {
  return(
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* put navigate later below in navbar.brand tag*/}
          <Navbar.Brand>
            <img 
            src="/ssLogo.svg"
            width="30"
            height="30"
            className="d-inline-blck align-top"
            />
          </Navbar.Brand>
          <Container>
            <Form.Control label="Search" placeholder="Search"></Form.Control>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
}
export default myNavbar;