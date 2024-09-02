// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
// import './Home.css';
// import HeroBanner from './HeroBanner';
// import { reviewsData } from './reviewsData';
// import Background1 from '../images2/Background.jpg';
// import Background2 from '../images2/background11.jpg';
// import Background3 from '../images2/background19.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import GoogleIcon from '@mui/icons-material/Google';
// import google from '../images2/google.jpg'

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
//   { title: 'Phone Number', description: '+918122132314' },
//   { title: 'Email', description: 'elitedentalcare2023@gmail.com' },
//   { title: 'Address', description: 'No.23, Veeranam Road, Kelambakkam-603103' },
//   { title: 'Google Map Location', description: 'Directions', link: 'https://www.google.com/maps/dir//12.7872082,80.2178464/@12.7871649,80.1353651,12z?entry=ttu' },
// ];

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const backgroundImages = [Background1, Background2, Background3];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [backgroundImages.length]);

//   const homeSectionStyle = {
//     position: 'relative',
//     overflow: 'hidden',
//     padding: '2rem 0',
//     zIndex: 0,
//   };

//   const backgroundStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '300%',
//     height: '100%',
//     display: 'flex',
//     animation: 'slideBackground 15s linear infinite',
//     zIndex: -1,
//   };

//   return (
//     <div className="home-section" style={homeSectionStyle}>
//       <div style={backgroundStyle}>
//         {backgroundImages.map((image, index) => (
//           <div
//             key={index}
//             style={{
//               width: '100%',
//               backgroundImage: `url(${image})`,
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'center',
//             }}
//           ></div>
//         ))}
//       </div>

//       <HeroBanner />

//       <div className="services-section">
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
//       <div className="testimonials-section" style={{ padding: '4rem 0', zIndex: 1 }}>
//         <Container>
//           <h2 className="text-center mb-4 heading">
//             <a
//               href="https://www.google.com/search?client=ms-android-xiaomi-rvo2b&sca_esv=d2f84b67cec4e5c9&cs=0&sxsrf=ADLYWIL-4FP1iolaphXiEYrwuXQjN-BbKg:1721106491580&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7ukYwNW2vUmblgxYR5xFADJs5dOPFdJRsUN1OtAZ8DTGySgof8Lxkybk5NYT17Ds4VgKqZQ%3D&q=Elite+Dental+Care+-+A+Premier+Multispeciality+Dental+Clinic+and+Best+Dentist&kgs=63e8a3a8f670b98e&shem=lsde,sbseo,vslce&source=sh/x/loc/act/m1/2&shbud=9E78AC7F921C2401/1/3/LocalPoiReviews#lrd=0x3a5251e3047c93b1:0x17f89e7ede411525,1,,,"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 textAlign: 'center',
//                 fontSize: '2rem', // Adjust font size as needed
//                 fontWeight: 'bold',
//                 color: 'black',
//                 textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)', // Adds a subtle shadow for better readability
//                 // Adds a white background with slight transparency for a colorful look
//                 padding: '0.5rem 1rem', // Adds some padding for better spacing
//                 borderRadius: '8px',
//                 // Adds rounded corners
//                 // Ensures the background color only covers the text
//               }}
//             >
//               Our Patients Speak &rarr;
//             </a>
//           </h2>
//           <Carousel interval={2000} indicators={false} prevLabel="" nextLabel="">
//             {reviewsData.map((_, index) => {
//               if (index % 4 === 0) {
//                 return (
//                   <Carousel.Item key={index}>
//                     <Row>
//                       {reviewsData.slice(index, index + 4).map((review, subIndex) => (
//                         <Col md={3} key={subIndex}>
//                           <Card className="testimonial-card">
//                             <Card.Body>
//                               <Card.Text>{review.review}</Card.Text>
//                               <Card.Subtitle className="mb-2 text-muted">{review.author}</Card.Subtitle>
//                               <div className="testimonial-rating">
//                                 {[...Array(review.rating)].map((_, i) => (
//                                   <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
//                                 ))}
//                               </div>
//                               <img src={google} className="google-icon" />
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       ))}
//                     </Row>
//                   </Carousel.Item>
//                 );
//               }
//               return null;
//             })}
//           </Carousel>
//         </Container>
//       </div>

//       <div className="contact-details-section" style={{ padding: '4rem 0', zIndex: 1 }}>
//         <Container>
//           <h2
//             className="mb-4"
//             style={{
//               textAlign: 'center',
//               fontSize: '2rem', // Adjust font size as needed
//               fontWeight: 'bold',
//               color: 'black',
//               textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)', // Adds a subtle shadow for better readability
//               // Adds a white background with slight transparency for a colorful look
//               padding: '0.5rem 1rem', // Adds some padding for better spacing
//               borderRadius: '8px', // Adds rounded corners
//               // Ensures the background color only covers the text
//             }}
//           >
//           </h2>
//         </Container>
//       </div>

//       <a
//         href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-link"
//       >
//         <i className="fab fa-whatsapp whatsapp-icon"></i>
//       </a>
//     </div>
//   );
// };

// export default Home;


// // import React, { useState, useEffect } from 'react';
// // import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
// // import './Home.css';
// // import HeroBanner from './HeroBanner';
// // import { reviewsData } from './reviewsData';
// // import Background1 from '../images2/Background.jpg';
// // import Background2 from '../images2/background11.jpg';
// // import Background3 from '../images2/background19.jpg';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faStar } from '@fortawesome/free-solid-svg-icons';
// // import google from '../images2/google.jpg';

// // const services = [
// //   { title: 'Teeth Whitening', description: 'Brighten your smile with our professional teeth whitening services.' },
// //   { title: 'Bonding', description: 'Repair chipped or cracked teeth with our bonding treatments.' },
// //   { title: 'Checkups', description: 'Regular dental checkups to maintain your oral health.' },
// //   { title: 'Cosmetic Procedures', description: 'Enhance your smile with our range of cosmetic procedures.' },
// //   { title: 'Dental Implants', description: 'Replace missing teeth with durable dental implants.' },
// //   { title: 'Dentures and Bridges', description: 'Restore your smile with our custom dentures and bridges.' },
// //   { title: 'Emergency Care', description: 'Immediate dental care for emergencies.' },
// //   { title: 'Extractions', description: 'Safe and painless tooth extractions.' },
// //   { title: 'Fillings and Sealants', description: 'Prevent cavities with our fillings and sealants.' },
// //   { title: 'Laser Dentistry', description: 'Advanced laser treatments for various dental issues.' },
// //   { title: 'Mouth Guards', description: 'Custom-fit mouth guards for sports and sleep.' },
// //   { title: 'Online Dentist Booking', description: 'Convenient online booking for your dental appointments.' },
// //   { title: 'Oral Surgery', description: 'Expert oral surgery services for complex dental issues.' },
// //   { title: 'Root Canals', description: 'Relieve pain and save your teeth with our root canal treatments.' },
// //   { title: 'Teeth Reshaping', description: 'Improve the appearance of your teeth with reshaping.' },
// //   { title: 'Veneers and Crowns', description: 'Achieve a flawless smile with veneers and crowns.' },
// //   { title: 'X-ray', description: 'Accurate dental x-rays for precise diagnosis.' },
// // ];

// // const contactDetails = [
// //   { title: 'Phone Number', description: '+918122132314' },
// //   { title: 'Email', description: 'elitedentalcare2023@gmail.com' },
// //   { title: 'Address', description: 'No.23, Veeranam Road, Kelambakkam-603103' },
// //   { title: 'Google Map Location', description: 'Directions', link: 'https://www.google.com/maps/dir//12.7872082,80.2178464/@12.7871649,80.1353651,12z?entry=ttu' },
// // ];

// // const Home = () => {
// //   const backgroundImages = [Background1, Background2, Background3];

// //   return (
// //     <div className="home-section">
// //       <div className="background-slider">
// //         {backgroundImages.map((image, index) => (
// //           <div
// //             key={index}
// //             className="background-image"
// //             style={{
// //               backgroundImage: `url(${image})`,
// //             }}
// //           ></div>
// //         ))}
// //       </div>

// //       <HeroBanner />

// //       <div className="services-section">
// //         <Container>
// //           <h2 className="text-center mb-4">Our Services</h2>
// //           <Row>
// //             {services.map((service, index) => (
// //               <Col md={4} key={index}>
// //                 <Card className="mb-4">
// //                   <Card.Body>
// //                     <Card.Title>{service.title}</Card.Title>
// //                     <Card.Text>{service.description}</Card.Text>
// //                   </Card.Body>
// //                 </Card>
// //               </Col>
// //             ))}
// //           </Row>
// //         </Container>
// //       </div>
// //       <div className="testimonials-section" style={{ padding: '4rem 0', zIndex: 1 }}>
// //         <Container>
// //           <h2 className="text-center mb-4 heading">
// //             <a
// //               href="https://www.google.com/search?client=ms-android-xiaomi-rvo2b&sca_esv=d2f84b67cec4e5c9&cs=0&sxsrf=ADLYWIL-4FP1iolaphXiEYrwuXQjN-BbKg:1721106491580&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7ukYwNW2vUmblgxYR5xFADJs5dOPFdJRsUN1OtAZ8DTGySgof8Lxkybk5NYT17Ds4VgKqZQ%3D&q=Elite+Dental+Care+-+A+Premier+Multispeciality+Dental+Clinic+and+Best+Dentist&kgs=63e8a3a8f670b98e&shem=lsde,sbseo,vslce&source=sh/x/loc/act/m1/2&shbud=9E78AC7F921C2401/1/3/LocalPoiReviews#lrd=0x3a5251e3047c93b1:0x17f89e7ede411525,1,,,"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{
// //                 textAlign: 'center',
// //                 fontSize: '2rem', // Adjust font size as needed
// //                 fontWeight: 'bold',
// //                 color: 'black',
// //                 textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)', // Adds a subtle shadow for better readability
// //                 // Adds a white background with slight transparency for a colorful look
// //                 padding: '0.5rem 1rem', // Adds some padding for better spacing
// //                 borderRadius: '8px',
// //                 // Adds rounded corners
// //                 // Ensures the background color only covers the text
// //               }}
// //             >
// //               Our Patients Speak &rarr;
// //             </a>
// //           </h2>
// //           <Carousel interval={2000} indicators={false} prevLabel="" nextLabel="">
// //             {reviewsData.map((_, index) => {
// //               if (index % 4 === 0) {
// //                 return (
// //                   <Carousel.Item key={index}>
// //                     <Row>
// //                       {reviewsData.slice(index, index + 4).map((review, subIndex) => (
// //                         <Col md={3} key={subIndex}>
// //                           <Card className="testimonial-card">
// //                             <Card.Body>
// //                               <Card.Text>{review.review}</Card.Text>
// //                               <Card.Subtitle className="mb-2 text-muted">{review.author}</Card.Subtitle>
// //                               <div className="testimonial-rating">
// //                                 {[...Array(review.rating)].map((_, i) => (
// //                                   <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
// //                                 ))}
// //                               </div>
// //                               <img src={google} className="google-icon" />
// //                             </Card.Body>
// //                           </Card>
// //                         </Col>
// //                       ))}
// //                     </Row>
// //                   </Carousel.Item>
// //                 );
// //               }
// //               return null;
// //             })}
// //           </Carousel>
// //         </Container>
// //       </div>

// //       <div className="contact-details-section" style={{ padding: '4rem 0', zIndex: 1 }}>
// //         <Container>
// //           <h2
// //             className="mb-4"
// //             style={{
// //               textAlign: 'center',
// //               fontSize: '2rem', // Adjust font size as needed
// //               fontWeight: 'bold',
// //               color: 'black',
// //               textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)', // Adds a subtle shadow for better readability
// //               // Adds a white background with slight transparency for a colorful look
// //               padding: '0.5rem 1rem', // Adds some padding for better spacing
// //               borderRadius: '8px', // Adds rounded corners
// //               // Ensures the background color only covers the text
// //             }}
// //           >
// //           </h2>
// //         </Container>
// //       </div>

// //       <a
// //         href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="whatsapp-link"
// //       >
// //         <i className="fab fa-whatsapp whatsapp-icon"></i>
// //       </a>
// //     </div>
// //   );
// // };

// // export default Home;
  // slider background code'

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
// import './Home.css';
// import HeroBanner from './HeroBanner';
// import { reviewsData } from './reviewsData';
// import Background1 from '../images2/Background.jpg';
// import Background2 from '../images2/background11.jpg';
// import Background3 from '../images2/background19.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import GoogleIcon from '@mui/icons-material/Google';
// import google from '../images2/google.jpg'
// import BackgroundSlider from './BackgroundSlider'; // Import BackgroundSlider component

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
//   { title: 'Phone Number', description: '+918122132314' },
//   { title: 'Email', description: 'elitedentalcare2023@gmail.com' },
//   { title: 'Address', description: 'No.23, Veeranam Road, Kelambakkam-603103' },
//   { title: 'Google Map Location', description: 'Directions', link: 'https://www.google.com/maps/dir//12.7872082,80.2178464/@12.7871649,80.1353651,12z?entry=ttu' },
// ];

// const Home = () => {
  
//   const backgroundImages = [Background1, Background2, Background3];

//   const homeSectionStyle = {
//     position: 'relative',
//     overflow: 'hidden',
//     padding: '2rem 0',
//     zIndex: 0,
   
//   };


//   return (
//     <div className="home-section" style={homeSectionStyle}>
//     <BackgroundSlider images={backgroundImages} />

//       <div className="services-section"  style={{marginTop : "25rem"}}>
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
//       <div className="testimonials-section" style={{ padding: '4rem 0', zIndex: 1 }}>
//       <Container>
//         <h2 className="text-center mb-4 heading" >
//           <a href="https://www.google.com/search?client=ms-android-xiaomi-rvo2b&sca_esv=d2f84b67cec4e5c9&cs=0&sxsrf=ADLYWIL-4FP1iolaphXiEYrwuXQjN-BbKg:1721106491580&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7ukYwNW2vUmblgxYR5xFADJs5dOPFdJRsUN1OtAZ8DTGySgof8Lxkybk5NYT17Ds4VgKqZQ%3D&q=Elite+Dental+Care+-+A+Premier+Multispeciality+Dental+Clinic+and+Best+Dentist&kgs=63e8a3a8f670b98e&shem=lsde,sbseo,vslce&source=sh/x/loc/act/m1/2&shbud=9E78AC7F921C2401/1/3/LocalPoiReviews#lrd=0x3a5251e3047c93b1:0x17f89e7ede411525,1,,," target="_blank" rel="noopener noreferrer"   style={{
//             textAlign: 'center',
//             fontSize: '2rem', // Adjust font size as needed
//             fontWeight: 'bold',
//             color: 'black',
//             textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)', // Adds a subtle shadow for better readability
//             // Adds a white background with slight transparency for a colorful look
//             padding: '0.5rem 1rem', // Adds some padding for better spacing
//             borderRadius: '8px',
//             // Adds rounded corners
//              // Ensures the background color only covers the text
//           }}>
//             Our Patients Speak &rarr;
//           </a>
//         </h2>
//         <Carousel interval={2000} indicators={false} prevLabel="" nextLabel="">
//           {reviewsData.map((_, index) => {
//             if (index % 4 === 0) {
//               return (
//                 <Carousel.Item key={index}>
//                   <Row>
//                     {reviewsData.slice(index, index + 4).map((review, subIndex) => (
//                       <Col md={3} key={subIndex}>
//                         <Card className="testimonial-card">
//                           <Card.Body>
//                             <Card.Text>{review.review}</Card.Text>
//                             <Card.Subtitle className="mb-2 text-muted">{review.author}</Card.Subtitle>
//                             <div className="testimonial-rating">
//                               {[...Array(review.rating)].map((_, i) => (
//                                 <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
//                               ))}
//                             </div>
//                             <img src={google} className="google-icon" />
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Carousel.Item>
//               );
//             }
//             return null;
//           })}
//         </Carousel>


//         <Carousel interval={2000} indicators={false} prevLabel="" nextLabel="">
//           {reviewsData.map((_, index) => {
//             if (index % 4 === 0) {
//               return (
//                 <Carousel.Item key={index}>
//                   <Row>
//                     {reviewsData.slice(index, index + 4).map((review, subIndex) => (
//                       <Col md={3} key={subIndex}>
//                         <Card className="testimonial-card">
//                           <Card.Body>
//                             <Card.Text>{review.review}</Card.Text>
//                             <Card.Subtitle className="mb-2 text-muted">{review.author}</Card.Subtitle>
//                             <div className="testimonial-rating">
//                               {[...Array(review.rating)].map((_, i) => (
//                                 <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
//                               ))}
//                             </div>
//                             <img src={google} className="google-icon" />
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Carousel.Item>
//               );
//             }
//             return null;
//           })}
//         </Carousel>
//       </Container>
//     </div>
//       <a href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
//         <i className="fab fa-whatsapp whatsapp-icon"></i>
//       </a>
//     </div>
//   );
// };

// export default Home;








 // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  //   }, 5000); // Change image every 5 seconds

  //   return () => clearInterval(intervalId); // Clean up the interval on component unmount
  // }, [backgroundImages.length]);
// const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const backgroundStyle = {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   transition: 'background-image 2s ease-in-out',
  //   zIndex: -1,
  // <div style={backgroundStyle}></div>
  // };
   // <HeroBanner />

// <div className="contact-details-section" style={{ padding: '4rem 0', zIndex: 1 }}>
      //   <Container>
      //   <h2
      //   className="mb-4"
      //   style={{
      //     textAlign: 'center',
      //     fontSize: '2rem', // Adjust font size as needed
      //     fontWeight: 'bold',
      //     color: 'black',
      //     textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)', // Adds a subtle shadow for better readability
      //     // Adds a white background with slight transparency for a colorful look
      //     padding: '0.5rem 1rem', // Adds some padding for better spacing
      //     borderRadius: '8px', // Adds rounded corners
      //      // Ensures the background color only covers the text
      //   }}
      // >
      //   Contact Details
      // </h2>
      //     <Carousel className="contact-details-carousel">
      //       {contactDetails.map((detail, index) => (
      //         <Carousel.Item key={index}>
      //           <div className="contact-detail-item">
      //             <h3 className="contact-detail-title">{detail.title}</h3>
      //             {detail.link ? (
      //               <a href={detail.link} target="_blank" rel="noopener noreferrer" className="contact-detail-link">
      //                 {detail.description} &rarr;
      //               </a>
      //             ) : (
      //               <p className="contact-detail-text">{detail.description}</p>
      //             )}
      //           </div>
      //         </Carousel.Item>
      //       ))}
      //     </Carousel>
      //   </Container>
      // </div>

      // import React from 'react';
      // import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
      // import './Home.css';
      // import HeroBanner from './HeroBanner';
      // import { reviewsData } from './reviewsData';
      // import Background1 from '../images2/Background.jpg';
      // import Background2 from '../images2/background11.jpg';
      // import Background3 from '../images2/background19.jpg';
      // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      // import { faStar } from '@fortawesome/free-solid-svg-icons';
      // import google from '../images2/google.jpg';
      
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
      //   { title: 'Phone Number', description: '+918122132314' },
      //   { title: 'Email', description: 'elitedentalcare2023@gmail.com' },
      //   { title: 'Address', description: 'No.23, Veeranam Road, Kelambakkam-603103' },
      //   { title: 'Google Map Location', description: 'Directions', link: 'https://www.google.com/maps/dir//12.7872082,80.2178464/@12.7871649,80.1353651,12z?entry=ttu' },
      // ];

     
      // const Home = () => {
      //   const backgroundImages = [Background1, Background2, Background3];
      
      //   return (
      //     <div className="home-section">

      //     <div className="background-slider-section">
      //     <div className="background-image" style={{ backgroundImage: `url(${Background1})` }}></div>
      //     <div className="background-image" style={{ backgroundImage: `url(${Background2})` }}></div>
      //     <div className="background-image" style={{ backgroundImage: `url(${Background3})` }}></div>
      //   </div>
  
      //   <HeroBanner />            
      //             <div className="services-section">
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
      
      //       <div className="testimonials-section" style={{ padding: '4rem 0', zIndex: 1 }}>
      //         <Container>
      //           <h2 className="text-center mb-4 heading">
      //             <a
      //               href="https://www.google.com/search?client=ms-android-xiaomi-rvo2b&sca_esv=d2f84b67cec4e5c9&cs=0&sxsrf=ADLYWIL-4FP1iolaphXiEYrwuXQjN-BbKg:1721106491580&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7ukYwNW2vUmblgxYR5xFADJs5dOPFdJRsUN1OtAZ8DTGySgof8Lxkybk5NYT17Ds4VgKqZQ%3D&q=Elite+Dental+Care+-+A+Premier+Multispeciality+Dental+Clinic+and+Best+Dentist&kgs=63e8a3a8f670b98e&shem=lsde,sbseo,vslce&source=sh/x/loc/act/m1/2&shbud=9E78AC7F921C2401/1/3/LocalPoiReviews#lrd=0x3a5251e3047c93b1:0x17f89e7ede411525,1,,,"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //               style={{
      //                 textAlign: 'center',
      //                 fontSize: '2rem',
      //                 fontWeight: 'bold',
      //                 color: 'black',
      //                 textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9)',
      //                 padding: '0.5rem 1rem',
      //                 borderRadius: '8px',
      //               }}
      //             >
      //             <div className="background-image" style={{ backgroundImage: `url(${Background1})` }}></div>
      //               Our Patients Speak &rarr;
      //             </a>
      //           </h2>
      //           <Carousel interval={2000} indicators={false} prevLabel="" nextLabel="">
      //             {reviewsData.map((_, index) => {
      //               if (index % 4 === 0) {
      //                 return (
      //                   <Carousel.Item key={index}>
      //                     <Row>
      //                       {reviewsData.slice(index, index + 4).map((review, subIndex) => (
      //                         <Col md={3} key={subIndex}>
      //                           <Card className="testimonial-card">
      //                             <Card.Body>
      //                               <Card.Text>{review.review}</Card.Text>
      //                               <Card.Subtitle className="mb-2 text-muted">{review.author}</Card.Subtitle>
      //                               <div className="testimonial-rating">
      //                                 {[...Array(review.rating)].map((_, i) => (
      //                                   <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
      //                                 ))}
      //                               </div>
      //                               <img src={google} className="google-icon" />
      //                             </Card.Body>
      //                           </Card>
      //                         </Col>
      //                       ))}
      //                     </Row>
      //                   </Carousel.Item>
      //                 );
      //               }
      //               return null;
      //             })}
      //           </Carousel>
      //         </Container>
      //       </div>
      //       <a
      //         href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         className="whatsapp-link"
      //       >
      //         <i className="fab fa-whatsapp whatsapp-icon"></i>
      //       </a>
      //     </div>
      //   );
      // };
      
      // export default Home;
      
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
  { title: 'Online Dentist Booking', description: 'Convenient online booking for your dental appointments.' },
  { title: 'Oral Surgery', description: 'Expert oral surgery services for complex dental issues.' },
  { title: 'Root Canals', description: 'Relieve pain and save your teeth with our root canal treatments.' },
  { title: 'Teeth Reshaping', description: 'Improve the appearance of your teeth with reshaping.' },
  { title: 'Veneers and Crowns', description: 'Achieve a flawless smile with veneers and crowns.' },
  { title: 'X-ray', description: 'Accurate dental x-rays for precise diagnosis.' },
];

const Home = () => {
  return (
    <div className="home-section">
      <div className="background-image"></div> {/* Single background image */}
      <HeroBanner />
      <div className="services-section">
        <Container>
          <h1 className="text-center mb-4" style={{color:'black'}}>Our Services</h1>
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
