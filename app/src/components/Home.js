

import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Home.css';
import HeroBanner from './HeroBanner';
import { reviewsData } from './reviewsData';
import Background from '../images2/Background.jpg'; // Single background image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import google from '../images2/google.jpg';
import backgrounddental from '../images2/background dental.jpg'

const services = [
  { title: 'Teeth Whitening', description: 'Brighten your smile with our professional teeth whitening services.' },
  { title: 'Bonding', description: 'Repair chipped or cracked teeth with our bonding treatments.' },
  { title: 'Checkups', description: 'Regular dental checkups to maintain your oral health.' },
  { title: 'Cosmetic Procedures', description: 'Enhance your smile with our range of cosmetic procedures.' },
  { title: 'Dental Implants', description: 'Replace missing teeth with durable dental implants.' },
  { title: 'Dentures and Bridges', description: 'Restore your smile with our custom dentures and bridges.' },
  { title: 'Emergency Care', description: 'Immediate dental care for emergencies.' },
  { title: 'Extractions', description: 'Safe and painless tooth extractions.' },
  { title: 'Fillings and Sealants', description: 'Prevent cavities with our fillings and sealants.' },
  { title: 'Laser Dentistry', description: 'Advanced laser treatments for various dental issues.' },
  { title: 'Mouth Guards', description: 'Custom-fit mouth guards for sports and sleep.' },
  { title: 'Oral Surgery', description: 'Expert oral surgery services for complex dental issues.' },
  { title: 'Root Canals', description: 'Relieve pain and save your teeth with our root canal treatments.' },
  { title: 'Teeth Reshaping', description: 'Improve the appearance of your teeth with reshaping.' },
  { title: 'Veneers and Crowns', description: 'Achieve a flawless smile with veneers and crowns.' },
  { title: 'X-ray', description: 'Accurate dental x-rays for precise diagnosis.' },
  { title: 'Braces', description: 'Align your teeth with our professional braces services.' },
  { title: 'Clean Aligners', description: 'Straighten your teeth discreetly with our clean aligners.' },
];


const Home = () => {
  return (
    <div className="home-section">
      <div className="background-image"></div> {/* Single background image */}
      <HeroBanner />
      <div className="services-section">
        <Container>
          <h1 className="text-center mb-4" style={{ color: 'black' }}>Our Services</h1>
          <Row>
            {services.map((service, index) => (
              <Col md={4} key={index}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="testimonials-section">
        <Container>
          <h2 className="text-center mb-4 heading">
            <a
              href="https://www.google.com/search?client=ms-android-xiaomi-rvo2b&sca_esv=d2f84b67cec4e5c9&cs=0&sxsrf=ADLYWIL-4FP1iolaphXiEYrwuXQjN-BbKg:1721106491580&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7ukYwNW2vUmblgxYR5xFADJs5dOPFdJRsUN1OtAZ8DTGySgof8Lxkybk5NYT17Ds4VgKqZQ%3D&q=Elite+Dental+Care+-+A+Premier+Multispeciality+Dental+Clinic+and+Best+Dentist&kgs=63e8a3a8f670b98e&shem=lsde,sbseo,vslce&source=sh/x/loc/act/m1/2&shbud=9E78AC7F921C2401/1/3/LocalPoiReviews#lrd=0x3a5251e3047c93b1:0x17f89e7ede411525,1,,,"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black' }}
            >
              Our Patients Speak &rarr;
            </a>
          </h2>
          <Carousel interval={2000} indicators={false} prevLabel="" nextLabel="">
            {reviewsData.map((_, index) => {
              if (index % 4 === 0) {
                return (
                  <Carousel.Item key={index}>
                    <Row>
                      {reviewsData.slice(index, index + 4).map((review, subIndex) => (
                        <Col md={3} key={subIndex}>
                          <Card className="testimonial-card">
                            <Card.Body>
                              <Card.Text>{review.review}</Card.Text>
                              <Card.Subtitle className="mb-2 text-muted">{review.author}</Card.Subtitle>
                              <div className="testimonial-rating">
                                {[...Array(review.rating)].map((_, i) => (
                                  <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                                ))}
                              </div>
                              <img src={google} className="google-icon" alt="Google" />
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                );
              }
              return null;
            })}
          </Carousel>
        </Container>
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default Home;
