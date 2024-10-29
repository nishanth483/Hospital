
import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup, Accordion } from 'react-bootstrap';
import './About.css';

const aboutSectionStyle = {
  backgroundImage: 'url(/images/Background.jpg)', // Path to your background image
  backgroundSize: 'cover', // Ensure the image covers the entire section
  backgroundPosition: 'center', // Center the background image
  backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
  backgroundAttachment: 'fixed', // Keep the background image fixed during scroll
  position: 'relative', // Allows for z-index control
  zIndex: 0, // Sets the stack order of the section
  padding: '4rem 0', // Adds padding to the top and bottom of the section
  minHeight: '100vh', // Ensure the section is at least the height of the viewport
  overflow: 'hidden', // Ensure content does not overflow
};

const About = () => {
  return (
    <Container fluid className="about-section" style={aboutSectionStyle}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6} className="text-container">
            <h2>Meet the Doctor</h2>
            <p>
              Dr. Shobana Thevi is a dedicated dentist practicing at Elite Dental Care in Kelambakkam. She graduated with distinction in 2016 from Adhiparasakthi Dental College and Hospital, Melmaruvathur. With 8 years of experience in dentistry, Dr. Shobana has honed her skills and knowledge to provide exceptional care to her patients. She has also contributed to academic research, publishing a journal on oral hygiene awareness among children, particularly targeting medical students.
            </p>
          </Col>
          <Col md={6} className="image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src="/images/dentist.jpg" alt="Dr. Shobana Thevi" fluid rounded style={{ maxHeight: '400px', maxWidth: '120%' }} />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12} className="text-container">
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
                  Our clinic is open Monday to Saturday from 10 AM to 1 PM and 4 PM to 8 PM. We are closed on Sundays.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How can I book an appointment?</Accordion.Header>
                <Accordion.Body>
                  You can book an appointment by calling our office or through WhatsApp using our website.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <a href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </Container>
  );
}

export default About;
