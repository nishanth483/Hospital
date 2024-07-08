// // src/components/About.js
// import React from 'react';
// import { Container, Row, Col, Image, Card, ListGroup, Accordion } from 'react-bootstrap';
// import './About.css';

// const aboutSectionStyle = {
//   backgroundImage: 'url(/images/Background.jpg)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   position: 'relative',
//   zIndex: 0,
//   padding: '4rem 0',
// };

// const About = () => {
//   return (
//     <Container fluid className="about-section" style={aboutSectionStyle}>
//       <Container>
//         <Row className="align-items-center mb-4">
//           <Col md={6} className="text-container">
//             <h1>About Us</h1>
//             <p>
//               At our state-of-the-art dental hospital, we are dedicated to providing top-notch dental care with a personal touch. Our experienced and compassionate team of dental professionals is committed to helping you achieve and maintain a healthy, beautiful smile.
//             </p>
//             <p>
//               We offer a comprehensive range of dental services, from routine checkups and cleanings to advanced cosmetic and restorative procedures. Our clinic is equipped with the latest technology to ensure the highest standards of care and comfort for our patients.
//             </p>
//             <p>
//               Our mission is to deliver exceptional dental services in a friendly and welcoming environment. We strive to build lasting relationships with our patients, ensuring that every visit is a positive experience.
//             </p>
//             <p>
//               Whether you need a simple filling, a complex root canal, or a complete smile makeover, our team is here to provide you with the expert care you deserve. We look forward to serving you and your family’s dental needs.
//             </p>
//           </Col>
//           <Col md={6}>
//             <Image src="/images/dentist.jpg" alt="Dental Clinic" fluid rounded />
//           </Col>
//         </Row>
//         <Row className="mb-4">
//           <Col className="text-container">
//             <h2>Our Values</h2>
//             <Card>
//               <Card.Body>
//                 <ListGroup variant="flush">
//                   <ListGroup.Item><strong>Excellence:</strong> We are committed to providing the highest quality dental care using the latest advancements in dentistry.</ListGroup.Item>
//                   <ListGroup.Item><strong>Compassion:</strong> We treat our patients with kindness and empathy, ensuring their comfort and well-being.</ListGroup.Item>
//                   <ListGroup.Item><strong>Integrity:</strong> We maintain the highest ethical standards in all our interactions and treatments.</ListGroup.Item>
//                   <ListGroup.Item><strong>Innovation:</strong> We continuously seek to improve our services through innovation and education.</ListGroup.Item>
//                 </ListGroup>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-container">
//             <h2>Frequently Asked Questions</h2>
//             <Accordion>
//               <Accordion.Item eventKey="0">
//                 <Accordion.Header>What services do you offer?</Accordion.Header>
//                 <Accordion.Body>
//                   We offer a comprehensive range of dental services including routine checkups, cleanings, fillings, root canals, cosmetic procedures, and restorative treatments.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="1">
//                 <Accordion.Header>Do you accept insurance?</Accordion.Header>
//                 <Accordion.Body>
//                   Yes, we accept most major insurance plans. Please contact our office for specific details regarding your insurance coverage.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="2">
//                 <Accordion.Header>What are your operating hours?</Accordion.Header>
//                 <Accordion.Body>
//                   Our clinic is open Monday to Friday from 8 AM to 6 PM and on Saturday from 9 AM to 3 PM. We are closed on Sundays.
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="3">
//                 <Accordion.Header>How can I book an appointment?</Accordion.Header>
//                 <Accordion.Body>
//                   You can book an appointment by calling our office, using our online booking system, or by visiting our clinic in person.
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default About;



import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup, Accordion } from 'react-bootstrap';
import './About.css';

const aboutSectionStyle = {
  backgroundImage: 'url(/images/Background.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  zIndex: 0,
  padding: '4rem 0',
};

const About = () => {
  return (
    <Container fluid className="about-section" style={aboutSectionStyle}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6} className="text-container">
            <h1>About Us</h1>
            <p>
              At our state-of-the-art dental hospital, we are dedicated to providing top-notch dental care with a personal touch. Our experienced and compassionate team of dental professionals is committed to helping you achieve and maintain a healthy, beautiful smile.
            </p>
            <p>
              We offer a comprehensive range of dental services, from routine checkups and cleanings to advanced cosmetic and restorative procedures. Our clinic is equipped with the latest technology to ensure the highest standards of care and comfort for our patients.
            </p>
            <p>
              Our mission is to deliver exceptional dental services in a friendly and welcoming environment. We strive to build lasting relationships with our patients, ensuring that every visit is a positive experience.
            </p>
            <p>
              Whether you need a simple filling, a complex root canal, or a complete smile makeover, our team is here to provide you with the expert care you deserve. We look forward to serving you and your family’s dental needs.
            </p>
          </Col>
          <Col md={6} className="image-container">
            <Image src="/images/dentist.jpg" style={{height:'600px',width:'400px'}} alt="Dental Clinic" fluid rounded />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-container">
            <h2>Our Values</h2>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Excellence:</strong> We are committed to providing the highest quality dental care using the latest advancements in dentistry.</ListGroup.Item>
                  <ListGroup.Item><strong>Compassion:</strong> We treat our patients with kindness and empathy, ensuring their comfort and well-being.</ListGroup.Item>
                  <ListGroup.Item><strong>Integrity:</strong> We maintain the highest ethical standards in all our interactions and treatments.</ListGroup.Item>
                  <ListGroup.Item><strong>Innovation:</strong> We continuously seek to improve our services through innovation and education.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-container">
            <h2>Frequently Asked Questions</h2>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What services do you offer?</Accordion.Header>
                <Accordion.Body>
                  We offer a comprehensive range of dental services including routine checkups, cleanings, fillings, root canals, cosmetic procedures, and restorative treatments.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you accept insurance?</Accordion.Header>
                <Accordion.Body>
                  Yes, we accept most major insurance plans. Please contact our office for specific details regarding your insurance coverage.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What are your operating hours?</Accordion.Header>
                <Accordion.Body>
                  Our clinic is open Monday to Friday from 8 AM to 6 PM and on Saturday from 9 AM to 3 PM. We are closed on Sundays.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How can I book an appointment?</Accordion.Header>
                <Accordion.Body>
                  You can book an appointment by calling our office, using our online booking system, or by visiting our clinic in person.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

