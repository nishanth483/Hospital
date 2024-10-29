


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faTooth, faInfoCircle, faImages } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css'; // Import the CSS file for additional styling
import logo from '../images2/logo.png';
import elitedentalcare from '../images2/elitedentalcare.png'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <div className="head">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} style={{ width: '70px', height: '70px', color: '#09356A' }} alt="Logo" />
            <div style={{ display: 'inline-block', marginTop: '17px' }}>
              <h3 style={{ color: '#06336A', fontWeight: 'bold', marginBottom: '0' }}>ELITE DENTAL CARE</h3>
              <p style={{ fontSize: '15px', color: '#12A19A', marginTop: '0', textAlign: 'center', fontWeight: 'lighter' }}>HEALTHY SMILES EVERYDAY!</p>
            </div>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="link" as={Link} to="/">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/about">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              About
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/services">
              <FontAwesomeIcon icon={faTooth} className="mr-1" />
              Services
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/gallery">
              <FontAwesomeIcon icon={faImages} className="mr-1" />
              Gallery
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              Contact Us
            </Nav.Link>
            <Nav.Link href="tel:8122132314" className="phone-link">
              <FontAwesomeIcon icon={faPhone} /> Book Appointment
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

