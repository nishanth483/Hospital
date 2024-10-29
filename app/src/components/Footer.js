

import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4.5} md={6} sm={12} className="mb-4">
            <div className="footer-box">
              <h5 className="text-uppercase" style={{ color: 'black', fontSize: 'bold' }}>Working Hours</h5>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Monday:</span> 10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM</p>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Tuesday:</span> 10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM</p>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Wednesday:</span> 10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM</p>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Thursday:</span> 10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM</p>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Friday:</span> 10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM</p>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Saturday:</span> 10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM</p>
              <p><span style={{ color: 'black', fontWeight: "bold" }}>Sunday:</span> Closed (Holiday)</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-box">
              <h5 className="text-uppercase" style={{ color: "black", fontSize: 'bold' }}>Contact Us</h5>
              <p>Phone: +91-8122132314</p>
              <p>Email:<a href="mailto:elitedentalcare2023@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link"> elitedentalcare2023@gmail.com</a></p>
              <p>No.23, Veeranam Road, Kelambakkam-603103</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Elite+Dental+Care,+No:23,+Veeranam+Rd,+Kelambakkam,+Tamil+Nadu+603103" target="_blank" rel="noopener noreferrer" className="footer-link text-primary">
                Directions &rarr;
              </a>
              <div className="social-icons">
                <Nav.Link href="https://www.instagram.com/elitedentalcare23/" target="_blank" className="social-link d-inline-block instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </Nav.Link>
                <Nav.Link href="https://www.facebook.com/profile.php?id=61560282252690" target="_blank" className="social-link d-inline-block facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </Nav.Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom text-center p-3 bg-secondary">
        &copy; {new Date().getFullYear()} Elite Dental Care Kelambakkam
      </div>
    </footer>
  );
}

export default Footer;
