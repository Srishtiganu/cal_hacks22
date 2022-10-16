// hi, seller
// shop activity/overview tabs
//same navbar comp but no cart

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateNewListing from './SellerCreateListing'
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigation, useNavigate } from 'react-router-dom'

function SellerPage() {
  // const sellerName = getParams();
  const navigate = useNavigate()

  const navigateToCreate = () => {
    // 👇️ navigate to /contacts

    navigate('create');
  };

  const sellerName = "Srishti";

  // const [isShownCreateListing, setIsShownCreateListing] = useState(false);

  // const showCreateListing = (event) => {
  //   setIsShownCreateListing(current => !current);
  // }

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
          <Col>
            <Button size="sm" onClick={navigateToCreate}>Create Listing</Button>
          </Col>
        </Row>
      </Container>

      <Container>

        {/* create new product pop up? */}

      </Container>
    </div>
  );
}
export default SellerPage;