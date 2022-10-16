import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
// import myNavbar from './MyNavbar';
import {useNavigate, useParams} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc } from 'firebase/firestore';
import { useState } from 'react';
import {doc} from "firebase/firestore";
import {db} from "./firebase"
import UserViewManager from './UserViewManager';
import BusinessPage from './BusinessPage';

export default function UserPage() {
  const {id} = useParams();

  const navigate = useNavigate();
  
  
  const [name, setName] = useState("");

  useEffect(() => {
    getSessionName();
  }, []);
  const getSessionName = async () => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if(docSnap && docSnap.exists) {
      setName(docSnap.data().name);
    }
  }

  const user = new UserViewManager();
  // id = user.getID();

  return(
    <div>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <Button variant="flat1" size="med" onClick={() => {user.signOut(); navigate(`/Home`)}}>Log out</Button>
        </Col>
      </Row>
      
      
      <div style={{ backgroundImage: "url(/user_home_view.png)", backgroundPosition: '0px 0px', backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', width: '100vw' }}>
      <Container>
                    <><style type="text/css"> {`
                    
                    .btn-flat1 {
                      background-color: #25a47f;
                      color: white;
                      font-family: 'Josefin Sans'
                    }
                    .btn-med {
                      padding: 1rem 1.5rem;
                      font-size: 1rem;
                      border-radius: "1000px"
                    }
                    .btn-flat {
                        background-color: transparent;
                        color: transparent;
                        
                        font-family: 'Josefin Sans'
                        hover: none;
                        height: 260px;
                        opacity: 0;
                    }
                    .btn-medium {
                        padding: 1rem 1.5rem;
                        font-size: 1rem;
                        // border-radius: "1000px"
                        height: 1000px;
                        width: 230px;
                    }
                    
                    `}
                    </style>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row>
                            <Col>
                                <div>
                                    <Button onClick={() => navigate('/BusinessPage')} variant="flat" size="medium">
                                        <strong>SHOP NOW</strong>
                                    </Button>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </>
                </Container>
      </div>
    </div>
  );
}