import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import { auth } from './firebase';


class UserViewManager extends React.Component {
    signedInDB() { // returns sign in status from fireAuth
        return auth.currentUser != null;
    }

    signIn(email, password) {
        console.log("Inside UserLogIn");
        try {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Logged in!");
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + " " + errorCode);
            });
            console.log("email: ", email, " pass: ", password);
        } catch (err) {
            alert(err);
        } 
    }

    signOut() {
        console.log("true");
        if ((auth.currentUser !== null) === true) { // signs out if sign in status is true
            auth.signOut();
        }   
    }

    userRegister(email, password) {
        console.log("Inside UserLogIn");
        try {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("logged in!");
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error" + errorMessage);
            });
            console.log("email: ", email, " pass: ", password);
        } catch (err) {
            console.log(err);
        } 
    }

    getID() {
        if ((auth.currentUser != null) == true) { // returns id is user is logged in 
            return auth.currentUser.uid;
        }   else {
            return null;
        }
    }
}

export default UserViewManager;