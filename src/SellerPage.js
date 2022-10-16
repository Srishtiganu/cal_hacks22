// hi, seller
// shop activity/overview tabs
//same navbar comp but no cart

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useState } from 'react';

function SellerPage() {
  // const sellerName = getParams();
  const sellerName = "Srishti";
  return(
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Hi, {sellerName}</h2>
          </Col>

          <Col>
            <Button size="sm">Overview</Button>
          </Col>

          <Col>
            <Button size="sm">Shop Activity</Button>
          </Col>
        </Row>
      </Container>
      
      <Container>
        
        {/* create new product pop up? */}

      </Container>
    </div>
  );
}
function createNewListing() {
  <Form>
    <Form.Group>
      <Form.Label>Product Name</Form.Label>
      <Form.Control></Form.Control>
    </Form.Group>
    {/* upload picture */}
    <Form.Group>
      <Form.Label>Product Name</Form.Label>
      <Form.Control></Form.Control>
    </Form.Group>
  </Form>
}
export default SellerPage;