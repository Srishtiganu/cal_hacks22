import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDoc, getFirestore } from "firebase/firestore";
import { doc, setDoc, deleteDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import UserViewManager from './UserViewManager';


class DataManager extends React.Component {

    fetchUserProducts(id) {
        console.log("Fetching user products...");
        const user = new UserViewManager();
        const db = getFirestore();
        const docRef = doc(db, "users", user.getID());
        const docSnap = getDoc(docRef);
        const data = docSnap.data();
        return (data.products);
    }

    fetchSellerProducts(id) {
        console.log("Fetching seller products...");
        const user = new UserViewManager();
        const db = getFirestore();
        const docRef = doc(db, "sellers", user.getID());
        const docSnap = getDoc(docRef);
        const data = docSnap.data();
        return (data.products);
    }

    addProduct(name, id, price, quota, description) {
        console.log("Adding a product...")
        const user = new UserViewManager();
        const db = getFirestore();
        setDoc(doc(db, "product_listings", id), {
            product_name: name,
            product_id: id,
            product_price: price,
            product_quota: quota,
            product_description: description
        });
    }

    addUser(name, email, password) {
        console.log("Adding a user...")
        const user = new UserViewManager();
        const db = getFirestore();
        setDoc(doc(db, "users", user.getID()), {
            user_name: name,
            user_email: email,
            user_password: password,
            products: []
        });
    }

    addSeller(name, email, password) {
        console.log("Adding a user...")
        const user = new UserViewManager();
        const db = getFirestore();
        setDoc(doc(db, "sellers", user.getID()), {
            user_name: name,
            user_email: email,
            user_password: password,
            products: []
        });
    }

    addProdSeller(product_id) {
        console.log("Adding a product for seller...")
        const user = new UserViewManager();
        const db = getFirestore();
        updateDoc(doc(db, "sellers", user.getID()), {
            products: arrayUnion(product_id),
        });
    }

    addProdUser(product_id) {
        console.log("Adding a product for user...")
        const user = new UserViewManager();
        const db = getFirestore();
        updateDoc(doc(db, "users", user.getID()), {
            products: arrayUnion(product_id),
        });
    }

    delProdUser(product_id) {
        console.log("Deleting a product for user...")
        const user = new UserViewManager();
        const db = getFirestore();
        updateDoc(doc(db, "users", user.getID()), {
            products: arrayRemove(product_id),
        });
    }

    delProdSeller(product_id) {
        console.log("Deleting a product for seller...Also deleting the products in users product lists...")
        const user = new UserViewManager();
        const db = getFirestore();
        updateDoc(doc(db, "sellers", user.getID()), {
            products: arrayRemove(product_id),
        });
        db.collection("users").forEach((doc) => {
            doc.arrayRemove(product_id);
        })
    }

    delUser(id) {
        console.log("Deleting a user...")
        const user = new UserViewManager();
        const db = getFirestore();
        deleteDoc(doc(db, "users", id));
    }

    delSeller(id) {
        console.log("Deleting a seller...")
        const user = new UserViewManager();
        const db = getFirestore();
        deleteDoc(doc(db, "sellers", id));
    }


    delProduct(id) {
        console.log("Deleting a product...")
        const user = new UserViewManager();
        const db = getFirestore();
        deleteDoc(doc(db, "product_listings", id));
    }
    
}

export default DataManager;