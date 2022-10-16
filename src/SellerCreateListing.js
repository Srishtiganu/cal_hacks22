import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import DataManager from './DataManager';



function CreateNewListing() {

    const manager = new DataManager()
    const navigate = useNavigate()
    
    // product id, product name, product description, order quota, bulk price, user array
    
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productOrderQuota, setProductOrderQuota] = useState("");
    const [productBulkPrice, setProductBulkPrice] = useState("");

    const addProd = () => {
      manager.addProduct(productName, productId, productBulkPrice, productOrderQuota, productDesc);
      navigate('/SellerPage');
    }
    //const manager = new DataManager();
    return (
      <div>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formProdId">
              <Form.Label>Product ID</Form.Label>
              <Form.Control onChange ={(event) => setProductId(event.target.value)} type="text" placeholder="Enter Product ID"></Form.Control>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control onChange ={(event) => setProductName(event.target.value)} type="text" placeholder="Enter Product Name"></Form.Control>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formProductDesc">
              <Form.Label>Product Description</Form.Label>
              <Form.Control onChange ={(event) => setProductDesc(event.target.value)} type="text" placeholder="Enter Product Description"></Form.Control>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formOrderQuota">
              <Form.Label>Order Quota</Form.Label>
              <Form.Control type="number" onChange ={(event) => setProductOrderQuota(event.target.value)} placeholder="Enter Order Quota" min = "0"></Form.Control>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBulkPrice">
              <Form.Label>Product Bulk Price</Form.Label>
              <Form.Control onChange ={(event) => setProductBulkPrice(event.target.value)} type="text" placeholder="Enter Product Bulk Price"></Form.Control>
            </Form.Group>
  
            <Button onClick={addProd} variant="primary">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }

export default CreateNewListing;