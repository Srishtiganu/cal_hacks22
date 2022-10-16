import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import Navbar from './myNavbar';

export default function UserPage() {
  return(
    <div>
      <Container> {/* Nav bar with search, acct, cart*/}
        <myNavbar />
      </Container>
        
      <Container>
        {/* products about to close */}
      </Container>

      <Container> 
        {/* discover products type --> see all */}

      </Container>

      <Container>
        {/* shop by business */}
      </Container>
    </div>
  );
}