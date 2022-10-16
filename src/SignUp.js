import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {useNavigate, useParams} from "react-router-dom";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db, auth, registerEmailPass} from './firebase'

import UserPage from './UserPage';
import { addDoc, collection } from 'firebase/firestore';
// import {createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp() {
  //ensure signed out if in the sign up page. 

  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPassword, setSellerPassword] = useState("");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userAuthed, isLoading, err] = useAuthState(auth);
  const [id, setId] = useState("");

  let navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    console.log("name: ", userName, "email: ", userEmail, "pass: ", userPassword);
    registerEmailPass(userName, userEmail, userPassword);
    
    try {
      // const userRef = doc(db, "users", userAuthed.uid);
      const docRef = await addDoc(collection(db, "users", userAuthed.uid), {
        name: userName,
        email: userEmail,
        password: userPassword,
        product_listing: [],
      });
      setId(userAuthed.id);
      // console.log()
      //navigate
    } catch (err) {
      console.log(err);
    }
  }
 

  useEffect(() => {
    if(isLoading) {
      return;
    }
    if(userAuthed) {
      if(id!="") {
        {navigate(`/UserPage/${id}`)};
      }
    }
  })

  return(
    <div>
      <Container>
        <Form className="my-3">
            <Row>
              <h1>Create a New Account!</h1>
            </Row>  

              <h3>Sellers</h3>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control onChange={(event) => setSellerName(event.target.value)} placeholder="Jane Doe" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={(event) => setSellerEmail(event.target.value)} placeholder="ex: yourname@gmail.com" />
                </Form.Group>
              
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={(event) => setSellerPassword(event.target.value)} type="password" placeholder="" />
                </Form.Group>
                <Form.Text className="text-muted">
                  {/* <a onClick={() => {navigate("/")}}>Click here to log in!</a> */}
                    Already have an account? <a onClick={() => {navigate("/")}}>Click here to log in!</a>
                </Form.Text>
                <Button className="my-3" variant="primary" type="submit">Sign Up</Button>
            </Form>
            <Form>
              <h3>Users</h3>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control onChange={(event) => setUserName(event.target.value)} placeholder="Jane Doe" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(event) => setUserEmail(event.target.value)} placeholder="ex: yourname@gmail.com" />
                </Form.Group>
                
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(event) => setUserPassword(event.target.value)} type="password" placeholder="" />
                </Form.Group>
        
                  <Form.Text className="text-muted">
                    {/* <a onClick={() => {navigate("/")}}>Click here to log in!</a> */}
                      Already have an account? <a onClick={() => {navigate("/")}}>Click here to log in!</a>
                  </Form.Text>
                  <Button onClick={register} className="my-3" variant="primary">Sign Up</Button>
        </Form>
      </Container>
    </div>
  );
}
export default SignUp;