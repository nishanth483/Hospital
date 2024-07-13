// src/components/HeroBanner.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="hero-content">
            <h1>Trustworthy Dental Services</h1>
            <p className="hero-subtitle">Our dental clinic offers a range of services to help you achieve a healthy and beautiful smile.</p>
            <Card className="mt-3 info-card">
              <Card.Body>
                <p className="intro-text">Say goodbye to dental issues with our restoration services.</p>   
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="hero-image">
            <img src="/images/dentist.jpg" alt="Dentist" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
