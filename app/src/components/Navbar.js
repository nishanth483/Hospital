// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faHome, faTooth, faInfoCircle, faImages } from '@fortawesome/free-solid-svg-icons';

// import './Navbar.css'; // Import the CSS file for additional styling
// import logo from '../images2/logo.png';

// const TeethIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="teeth-icon"
//   >
//     <path d="M12 2C10.346 2 8.697 2.276 7.132 2.801C5.706 3.292 4.76 4.578 4.4 6.018C3.921 7.997 4.008 10.071 4.648 12.016C5.193 13.646 6.106 15.128 7.307 16.334C8.336 17.365 9.573 18.228 10.956 18.868C11.622 19.176 12.352 19.3 13.072 19.3C13.792 19.3 14.522 19.176 15.188 18.868C16.571 18.228 17.808 17.365 18.837 16.334C20.038 15.128 20.951 13.646 21.496 12.016C22.136 10.071 22.223 7.997 21.744 6.018C21.384 4.578 20.438 3.292 19.012 2.801C17.447 2.276 15.798 2 14.144 2H12ZM12 20C11.202 20 10.419 19.886 9.665 19.666C7.834 19.161 6.081 18.289 4.684 16.884C3.086 15.289 2.188 13.247 1.7 10.958C1.256 8.882 1.354 6.685 1.992 4.62C2.494 2.913 3.707 1.553 5.379 0.982C7.153 0.373 9.07 0 11 0C12.931 0 14.847 0.373 16.621 0.982C18.293 1.553 19.506 2.913 20.008 4.62C20.646 6.685 20.744 8.882 20.3 10.958C19.812 13.247 18.914 15.289 17.316 16.884C15.919 18.289 14.166 19.161 12.335 19.666C11.581 19.886 10.798 20 10 20Z" />
//   </svg>
// );

// const NavigationBar = () => {
//   return (
//     <Navbar expand="lg" className="navbar-custom" >
//       <Container>
//       <div className="head">
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} style={{ width: '50px', height: '50px' , color:'#09356A'}} alt="Logo" />
//           <h3 style={{ color: '#06336A', fontWeight:'bold',marginTop:'0.5rem' }}>ELITE DENTAL CARE</h3>
          
//         </Navbar.Brand>
//         </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link className="link"as={Link} to="/">
//               <FontAwesomeIcon icon={faHome} className="mr-1" />
//               Home
//             </Nav.Link>
//             <Nav.Link  className="link" as={Link} to="/about">
//               <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
//               About
//             </Nav.Link>
//             <Nav.Link  className="link" as={Link} to="/services">
//               <FontAwesomeIcon icon={faTooth} className="mr-1" />
//               Services
//             </Nav.Link>
//             <Nav.Link  className="link" as={Link} to="/gallery">
//               <FontAwesomeIcon icon={faImages} className="mr-1" />
//               Gallery
//             </Nav.Link>
//             <Nav.Link  className="link" as={Link} to="/contact">
//               <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
//               Contact Us
//             </Nav.Link>
//             <Nav.Link   href="tel:8122132314" className="phone-link">
//               <FontAwesomeIcon icon={faPhone} /> Book Appointment
//             </Nav.Link>      
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;



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
            <div style={{ display: 'inline-block', marginTop:'17px'}}>       
              <h3 style={{ color: '#06336A', fontWeight: 'bold', marginBottom: '0' }}>ELITE DENTAL CARE</h3>
              <p style={{ fontSize: '15px', color: '#12A19A', marginTop: '0',textAlign:'center',fontWeight:'lighter'}}>HEALTHY SMILES EVERYDAY!</p>
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



// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faHome, faTooth, faInfoCircle, faImages } from '@fortawesome/free-solid-svg-icons';

// import './Navbar.css'; // Import the CSS file for additional styling
// import logo from '../images2/logo.png';
// import elitedentalcare from '../images2/EliteDentalCare1.png'

// const NavigationBar = () => {
//   return (
//     <Navbar expand="lg" className="navbar-custom">
//       <Container>
//         <div className="head">
//           <Navbar.Brand as={Link} to="/">
//           <img src={logo} style={{ width: '50px', height: '50px', color: '#09356A' }} alt="Logo" />
//             <div style={{ display: 'inline-block', marginLeft: '10px',marginTop:'17px' }}>       
//             <img src={elitedentalcare} style={{ width: '150px', height: '50px', color: '#09356A' }} alt="Logo" />
//             </div>
//           </Navbar.Brand>
//         </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link className="link" as={Link} to="/">
//               <FontAwesomeIcon icon={faHome} className="mr-1" />
//               Home
//             </Nav.Link>
//             <Nav.Link className="link" as={Link} to="/about">
//               <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
//               About
//             </Nav.Link>
//             <Nav.Link className="link" as={Link} to="/services">
//               <FontAwesomeIcon icon={faTooth} className="mr-1" />
//               Services
//             </Nav.Link>
//             <Nav.Link className="link" as={Link} to="/gallery">
//               <FontAwesomeIcon icon={faImages} className="mr-1" />
//               Gallery
//             </Nav.Link>
//             <Nav.Link className="link" as={Link} to="/contact">
//               <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
//               Contact Us
//             </Nav.Link>
//             <Nav.Link href="tel:8122132314" className="phone-link">
//               <FontAwesomeIcon icon={faPhone} /> Book Appointment
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

