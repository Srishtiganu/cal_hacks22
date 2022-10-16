import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react';
import Login from './Login'
import {useNavigate, useParams} from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    const [isShownUser, setIsShownUser] = useState(false);
    const [isShownSeller, setIsShownSeller] = useState(false);

    const showSellerLogin = (event) => {
        setIsShownSeller(current => !current);
    }

    const showUserLogin = (event) => {
        setIsShownUser(current => !current);
    }
    return (
        <div style={{ backgroundImage: "url(/welcome_page_background.png)", backgroundPosition: '0px 0px', backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', width: '100vw' }}>
            <div>
                <Container>
                    <><style type="text/css"> {`
                    .btn-flat {
                        background-color: #25a47f;
                        color: white;
                        font-family: 'Josefin Sans'
                    }
                    .btn-medium {
                        padding: 1rem 1.5rem;
                        font-size: 1rem;
                        border-radius: "1000px"
                    }
                    `}
                    </style>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row><span style={{ color: 'transparent' }}>b</span></Row>
                        <Row>
                            <Col>
                                <div>
                                    <Button onClick={() => navigate('/Login')} variant="flat" size="medium">
                                        <strong>SHOP NOW</strong>
                                    </Button>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Button variant="flat" size="medium">
                                        <strong>SELL NOW</strong>
                                    </Button>
                                </div>
                            </Col>
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
export default Home;