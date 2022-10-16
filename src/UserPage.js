import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import myNavbar from './MyNavbar';
import {useNavigate, useParams} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc } from 'firebase/firestore';
import { useState } from 'react';
import {doc} from "firebase/firestore";
import {db} from "./firebase"

export default function UserPage() {
  const {id} = useParams();
  const navigate = useNavigate();


  //get name from id
  
  const auth = getAuth();
  
  const [name, setName] = useState("");

  // const getUserDoc = async () => {
  //   const docRef = doc(db, "users", id);
  //   const docSnap = await getDoc(docRef);
  //   if(docSnap.exists) {
  //     setName(docSnap.data().name);
  //   }
  // }

  const getSessionName = async () => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if(docSnap && docSnap.exists) {
      setName(docSnap.data().name);
    }
  }
  

  return(
    <div>
      {/* <Button onClick={signOut}>Log out</Button> */}
      <Container> {/* Nav bar with search, acct, cart*/}
        <h1> this is the userpage of {name} </h1>
        {/* <h1>hi</h1> */}
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