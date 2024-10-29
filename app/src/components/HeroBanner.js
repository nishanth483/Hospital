import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Container fluid>
        <Row className="align-items-center no-gutters">
          <Col md={6} className="hero-content">
            <h1>Welcome to Elite Dental Care</h1>
            <p className="hero-subtitle">
              We believe that a healthy smile is the foundation of overall well-being.
              At our state-of-the-art clinic, we combine the latest dental technology with a personalized approach
              to deliver exceptional care tailored to your unique needs. Our team of highly skilled dentists and
              friendly staff are dedicated to ensuring your comfort and satisfaction from the moment you walk through our doors.
            </p>
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
