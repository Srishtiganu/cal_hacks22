import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';



export default function Login() {
  const [isShownUser, setIsShownUser] = useState(false);
  const [isShownSeller, setIsShownSeller] = useState(false);

  const showSellerLogin = (event) => {
    setIsShownSeller(current => !current);
  }

  const showUserLogin = (event) => {
    setIsShownUser(current => !current);
  }

  return (
    <div>
      <Container>
        <Row>
          <Button onClick={showUserLogin}>Users</Button>
        </Row>
        <Row>
          <Button onClick={showSellerLogin}>Sellers</Button>
        </Row>
      </Container>
      <Container>
        {isShownUser && <UserLogIn />}
      </Container>
      <Container>
        {isShownSeller && <SellerLogIn />}
      </Container>
    </div>
  );
}

function UserLogIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <Form>
        <Form.Group>
          {/* authenticate stuff, this is placeholder */}
          <Form.Label>User Email</Form.Label>
          <Form.Control onChange={(event) => setEmail(event.target.value)} type="email"></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          {/* onChange={(event) => setPassword(event.target.value)}  */}
          <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Session Password" />
        </Form.Group>
      </Form>
    </div>
  )
}

function SellerLogIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <Form>
        <Form.Group>
          {/* authenticate stuff, this is placeholder */}
          <Form.Label>Seller Email</Form.Label>
          <Form.Control onChange={(event) => setEmail(event.target.value)} type="email"></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          {/* onChange={(event) => setPassword(event.target.value)}  */}
          <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Session Password" />
        </Form.Group>
      </Form>
    </div>
  )
}