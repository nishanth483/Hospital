// import React from 'react';
// import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
// import './Home.css'; 
// import HeroBanner from './HeroBanner';

// const services = [
//   { title: 'Teeth Whitening', description: 'Brighten your smile with our professional teeth whitening services.' },
//   { title: 'Bonding', description: 'Repair chipped or cracked teeth with our bonding treatments.' },
//   { title: 'Checkups', description: 'Regular dental checkups to maintain your oral health.' },
//   { title: 'Cosmetic Procedures', description: 'Enhance your smile with our range of cosmetic procedures.' },
//   { title: 'Dental Implants', description: 'Replace missing teeth with durable dental implants.' },
//   { title: 'Dentures and Bridges', description: 'Restore your smile with our custom dentures and bridges.' },
//   { title: 'Emergency Care', description: 'Immediate dental care for emergencies.' },
//   { title: 'Extractions', description: 'Safe and painless tooth extractions.' },
//   { title: 'Fillings and Sealants', description: 'Prevent cavities with our fillings and sealants.' },
//   { title: 'Laser Dentistry', description: 'Advanced laser treatments for various dental issues.' },
//   { title: 'Mouth Guards', description: 'Custom-fit mouth guards for sports and sleep.' },
//   { title: 'Online Dentist Booking', description: 'Convenient online booking for your dental appointments.' },
//   { title: 'Oral Surgery', description: 'Expert oral surgery services for complex dental issues.' },
//   { title: 'Root Canals', description: 'Relieve pain and save your teeth with our root canal treatments.' },
//   { title: 'Teeth Reshaping', description: 'Improve the appearance of your teeth with reshaping.' },
//   { title: 'Veneers and Crowns', description: 'Achieve a flawless smile with veneers and crowns.' },
//   { title: 'X-ray', description: 'Accurate dental x-rays for precise diagnosis.' },
// ];

// const contactDetails = [
//   { title: 'Phone Number', description: '+1 (123) 456-7890' },
//   { title: 'Email', description: 'info@dentalhospital.com' },
//   { title: 'Address', description: '123 Dental St, Tooth City, SM 56789' },
//   { title: 'Google Map Location', description: 'https://goo.gl/maps/example' },
// ];

// const Home = () => {
//   const homeSectionStyle = {
//     backgroundImage: 'url(/images/Background.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     position: 'relative',
//     zIndex: 0,
//     padding: '2rem 0',
//   };

//   return (
//     <div className="home-section" style={homeSectionStyle}>
//       <HeroBanner />

//       <div className="services-section" style={{ marginTop: '4rem' }}>
//         <Container>
//           <h2 className="text-center mb-4">Our Services</h2>
//           <Row>
//             {services.map((service, index) => (
//               <Col md={4} key={index}>
//                 <Card className="mb-4">
//                   <Card.Body>
//                     <Card.Title>{service.title}</Card.Title>
//                     <Card.Text>{service.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>

//       <div className="testimonials-section" style={{ padding: '4rem 0' }}>
//         <Container>
//           <h2 className="text-center mb-4">Testimonials</h2>
//           <Carousel className="testimonials-carousel">
//             <Carousel.Item>
//               <div className="testimonial-item">
//                 <p className="testimonial-text">"Great experience! The staff was friendly and professional."</p>
//                 <p className="testimonial-author">- John Doe</p>
//               </div>
//             </Carousel.Item>
//             <Carousel.Item>
//               <div className="testimonial-item">
//                 <p className="testimonial-text">"I love my new smile, thanks to the amazing team at Dental Hospital."</p>
//                 <p className="testimonial-author">- Jane Smith</p>
//               </div>
//             </Carousel.Item>
//             <Carousel.Item>
//               <div className="testimonial-item">
//                 <p className="testimonial-text">"Highly recommend for anyone looking for top-notch dental care."</p>
//                 <p className="testimonial-author">- Michael Lee</p>
//               </div>
//             </Carousel.Item>
//           </Carousel>
//         </Container>
//       </div>

//       <div className="contact-details-section" style={{ padding: '4rem 0' }}>
//         <Container>
//           <h2 className="text-center mb-4">Contact Details</h2>
//           <Carousel className="contact-details-carousel">
//             {contactDetails.map((detail, index) => (
//               <Carousel.Item key={index}>
//                 <div className="contact-detail-item">
//                   <h3 className="contact-detail-title">{detail.title}</h3>
//                   <p className="contact-detail-text">{detail.description}</p>
//                 </div>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './Home.css'; 
import HeroBanner from './HeroBanner';

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
  { title: 'Online Dentist Booking', description: 'Convenient online booking for your dental appointments.' },
  { title: 'Oral Surgery', description: 'Expert oral surgery services for complex dental issues.' },
  { title: 'Root Canals', description: 'Relieve pain and save your teeth with our root canal treatments.' },
  { title: 'Teeth Reshaping', description: 'Improve the appearance of your teeth with reshaping.' },
  { title: 'Veneers and Crowns', description: 'Achieve a flawless smile with veneers and crowns.' },
  { title: 'X-ray', description: 'Accurate dental x-rays for precise diagnosis.' },
];

const contactDetails = [
  { title: 'Phone Number', description: '+1 (123) 456-7890' },
  { title: 'Email', description: 'info@dentalhospital.com' },
  { title: 'Address', description: '123 Dental St, Tooth City, SM 56789' },
  { title: 'Google Map Location', description: 'https://goo.gl/maps/example' },
];

const Home = () => {
  const homeSectionStyle = {
    backgroundImage: 'url(/images/Background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: 0,
    padding: '2rem 0',
  };

  return (
    <div className="home-section" style={homeSectionStyle}>
      <HeroBanner />

      <div className="services-section" style={{ marginTop: '4rem' }}>
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
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

      <div className="testimonials-section" style={{ padding: '4rem 0' }}>
        <Container>
          <h2 className="text-center mb-4">Testimonials</h2>
          <Carousel className="testimonials-carousel">
            <Carousel.Item>
              <div className="testimonial-item">
                <p className="testimonial-text">"Great experience! The staff was friendly and professional."</p>
                <p className="testimonial-author">- John Doe</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-item">
                <p className="testimonial-text">"I love my new smile, thanks to the amazing team at Dental Hospital."</p>
                <p className="testimonial-author">- Jane Smith</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial-item">
                <p className="testimonial-text">"Highly recommend for anyone looking for top-notch dental care."</p>
                <p className="testimonial-author">- Michael Lee</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      <div className="contact-details-section" style={{ padding: '4rem 0' }}>
        <Container>
          <h2 className="text-center mb-4">Contact Details</h2>
          <Carousel className="contact-details-carousel">
            {contactDetails.map((detail, index) => (
              <Carousel.Item key={index}>
                <div className="contact-detail-item">
                  <h3 className="contact-detail-title">{detail.title}</h3>
                  <p className="contact-detail-text">{detail.description}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </div>
  );
}

export default Home;
