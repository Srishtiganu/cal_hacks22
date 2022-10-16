import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
=======
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
>>>>>>> Stashed changes
import { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  //ensure signed out if in the login page. 
  
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const signIn = async (event) => {
    console.log("in sign in function")
    event.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("logged in!");
        {navigate(`/UserPage/${user.uid}`)};
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("in top")
        const errorMessage = error.message;
        console.log(errorMessage);
      });
        console.log("email: ", email, " pass: ", password);
    } catch (err) {
      alert(err);
    } 
  }

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
        <Button onClick={signIn}>Login</Button>
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
