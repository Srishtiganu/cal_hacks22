import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {useNavigate, useParams} from "react-router-dom";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db, auth, registerEmailPass} from './firebase'

import './UserPage';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';
import DataManager from './DataManager';
import UserViewManager from './UserViewManager';
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

  const navigate = useNavigate();

  
  const registerUser = async (event) => {
    // event.preventDefault();
    // console.log("name: ", userName, "email: ", userEmail, "pass: ", userPassword);
    // registerEmailPass(userName, userEmail, userPassword);
    const user = new UserViewManager(userEmail, userPassword);
    try {
      // const userRef = doc(db, "users", userAuthed.uid);
      if(user.getID()!=null) {
        setId(user.getID());
      }
      
      const tempId = user.getID();
      
      await setDoc(doc(db, "users", id), {
        name: userName,
        email: userEmail,
        password: userPassword,
        product_listing: [],
      });
      if(user.signedInDB()) {
        console.log("signed in, navigating")
        console.log("check id: ",id);
        {navigate(`/UserPage/${id}`)};
      }
    } catch (err) {
      console.log(err);
    }
  }

  const registerSeller = async (event) => {
    const data = new DataManager();
    data.addSeller(sellerName, sellerEmail, sellerPassword);
    
    {navigate("/SellerPage")};
    
    
  }
 

  // useEffect(() => {
  //   if(isLoading) {
  //     return;
  //   }
    // if(userAuthed) {
    //   if(id!="") {
    //     if(userName=="") {
    //       {navigate(`/SellerPage/${id}`)};
    //     } else {
    //       {navigate(`/UserPage/${id}`)};
    //     }
    //   }
    // }
  // })

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
                <Button onClick={registerSeller} className="my-3" variant="primary">Sign Up</Button>
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
                  <Button onClick={registerUser} className="my-3" variant="primary">Sign Up</Button>
        </Form>
      </Container>
    </div>
  );
}
export default SignUp;