import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faTooth, faInfoCircle, faImages } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={4} md={6} sm={12} className="mb-4 mb-md-0">
            <div className="footer-box shadow-sm p-3 bg-white rounded">
              <h5 className="text-uppercase">About Me</h5>
              <p>
                Dr. Shobana Thevi, an accomplished Dental Surgeon with 8 years of expertise, excels at Elite Dental Care, Kelambakkam.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4 mb-md-0">
            <div className="footer-box shadow-sm p-3 bg-white rounded">
              <h5 className="text-uppercase">Working Hours</h5>
              <p>Mon - Sat</p>
              <p>10:00 AM - 01:00 PM</p>
              <p>04:00 PM - 08:00 PM</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4 mb-md-0">
            <div className="footer-box shadow-sm p-3 bg-white rounded">
              <h5 className="text-uppercase">Contacts</h5>
              <p>Phone: +91-8122132314</p>
              <p>Email: <a href="mailto:elitedentalcare2023@gmail.com" className="footer-link">elitedentalcare2023@gmail.com</a></p>
              <p>No.23, Veeranam Road, Kelambakkam-603103</p>
              <a href="https://www.google.com/maps/dir//12.7872082,80.2178464/@12.7871649,80.1353651,12z?entry=ttu" target="_blank" rel="noopener noreferrer" className="footer-link text-primary">
                Directions &rarr;
              </a>
              <div className="social-icons">
                <Nav.Link href="https://www.instagram.com/elitedentalcare23/" target="_blank" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '30px' }} />
                </Nav.Link>
                <Nav.Link href="https://www.facebook.com/profile.php?id=61560282252690" target="_blank" className="social-link">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998', fontSize: '30px' }} />
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
