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

function BusinessPage() {
  return(
    <div>
      <div style={{ backgroundImage: "url(/beckys_bracelets_user_view.png)", backgroundPosition: '0px 0px', backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', width: '100vw' }}>
        {/* <h1>hi</h1> */}
      </div>
    </div>
  )
}
export default BusinessPage;
