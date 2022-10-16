import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default function MyNavbar() {
  return(
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* put navigate later below in navbar.brand tag*/}
          <Navbar.Brand>
            <img 
            src={require('./ssLogo.png')}
            // width="30"
            height="70"
            className="d-inline-blck align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <Container>
              <Form>
                <Row>
                  <Col>
                    <Form.Control type="search" aria-label="Search" placeholder="Search"></Form.Control>
                  </Col>
                  <Col>
                    <Button variant="outline-success">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Navbar.Brand>
          {/* <Navbar.Brand>
            {auth && <Button onClick={signOut}>Sign Out</Button>}
          </Navbar.Brand> */}
        </Container>
      </Navbar>
    </div>
  );
}
