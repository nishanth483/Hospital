import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className="footer-box shadow-sm p-3 mb-5 bg-white rounded">
              <h5 className="text-uppercase">About Me</h5>
              <p>
                Dr. Maran is one of the top Bariatric Surgeons in Chennai, helping severely obese patients get their obesity treatment or weight-loss surgeries.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className="footer-box shadow-sm p-3 mb-5 bg-white rounded">
              <h5 className="text-uppercase">Working Hours</h5>
              <p>Mon - Sat: 9.00 am - 6.00 pm</p>
              <p>Sunday: Closed</p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <div className="footer-box shadow-sm p-3 mb-5 bg-white rounded">
              <h5 className="text-uppercase">Contacts</h5>
              <p>Phone: +91-9952002927</p>
              <p>18, 6th Cross St, CIT Colony, Mylapore, Chennai - 600 004</p>
              <a href="#" className="text-white">Get Directions &rarr;</a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        &copy; {new Date().getFullYear()} Dental Hospital
      </div>
    </footer>
  );
}

export default Footer;
