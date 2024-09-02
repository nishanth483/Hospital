// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './Gallery.css';
// // import gallery1 from '../images2/gallery1.jpg';
// import gallery2 from '../images2/gallery2.jpg';
// import gallery3 from '../images2/gallery3.jpg';
// import gallery4 from '../images2/gallery4.jpg';
// import gallery5 from '../images2/gallery5.jpg';
// // import gallery6 from '../images2/gallery6.jpg';
// // import gallery7 from '../images2/gallery7.jpg';
// import gallery8 from '../images2/gallery8.jpg';

// const images = [ gallery2, gallery3, gallery4, gallery5, gallery8];

// const Gallery = () => {
//   return (
//     <Container className="gallery-container">
//       <div className="blur-background"></div>
//       <h2>Our Gallery</h2>
//       <Row className="gallery-grid">
//         {images.map((image, index) => (
//           <Col xs={12} md={6} lg={4} className="gallery-item" key={index}>
//             <img src={image} alt={`Gallery Image ${index + 1}`} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Gallery;



// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import './Gallery.css';
// import gallery2 from '../images2/gallery2.jpg';
// import gallery3 from '../images2/gallery3.jpg';
// import gallery4 from '../images2/gallery4.jpg';
// import gallery5 from '../images2/gallery5.jpg';
// import gallery8 from '../images2/gallery8.jpg';

// const images = [ gallery2, gallery3, gallery4, gallery5, gallery8];

// const Gallery = () => {
//   return (
//     <Container className="gallery-container">
//       <div className="blur-background"></div>
//       <h2>Our Gallery</h2>
//       <Carousel>
//         {images.map((image, index) => (
//           <Carousel.Item key={index}>
//             <div className="gallery-item">
//               <img src={image} alt={`Gallery Image ${index + 1}`} />
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }

// export default Gallery;


// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import './Gallery.css';
// import gallery2 from '../images2/gallery2.jpg';
// import gallery3 from '../images2/gallery3.jpg';
// import gallery4 from '../images2/gallery4.jpg';
// import gallery5 from '../images2/gallery5.jpg';
// import gallery8 from '../images2/gallery8.jpg';

// const images = [ gallery2, gallery3, gallery4, gallery5, gallery8];

// const Gallery = () => {
//   return (
//     <Container className="gallery-container">
//       <div className="blur-background"></div>
//       <h2>Our Gallery</h2>
//       <Carousel indicators={false}>
//         {images.map((image, index) => (
//           <Carousel.Item key={index}>
//             <Row className="justify-content-center">
//               <Col xs={12} lg={6} className="gallery-col">
//                 <div className="gallery-item">
//                   <img src={image} alt={`Gallery Image ${index + 1}`} />
//                 </div>
//               </Col>
//               <Col xs={12} lg={6} className="gallery-col">
//                 <div className="gallery-item">
//                   <img src={images[(index + 1) % images.length]} alt={`Gallery Image ${index + 2}`} />
//                 </div>
//               </Col>
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }

// export default Gallery;


// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import './Gallery.css';
// import gallery2 from '../images2/gallery2.jpg';
// import gallery3 from '../images2/gallery3.jpg';
// import gallery4 from '../images2/gallery4.jpg';
// import gallery5 from '../images2/gallery5.jpg';

// import gallery8 from '../images2/gallery8.jpg';
// import gallery9 from '../images2/gallery9.jpg';
// import gallery10 from '../images2/gallery10.jpg';
// import gallery11 from '../images2/gallery11.jpg';
// import gallery12 from '../images2/gallery12.jpg';
// import gallery13 from '../images2/gallery13.jpg';
// import gallery14 from '../images2/gallery14.jpg';
// import gallery15 from '../images2/gallery15.jpg';
// import gallery17 from '../images2/gallery17.jpg';

// const images = [
//   gallery8,gallery2, gallery3, gallery4, gallery5, 
//  , gallery9, gallery10, gallery11, gallery12, gallery13,
//   gallery14, gallery15, gallery17
// ];



// const Gallery = () => {
//   return (
//     <Container className="gallery-container">
//       <div className="blur-background"></div>
//       <h2>Our Gallery</h2>
//       <Carousel indicators={false}>
//         {images.map((image, index) => (
//           <Carousel.Item key={index}>
//             <Row className="justify-content-center">
//               <Col xs={12} lg={6} className="gallery-col">
//                 <div className="gallery-item">
//                   <img src={image} alt={`Gallery Image ${index + 1}`} />
//                 </div>
//               </Col>
//               <Col xs={12} lg={6} className="gallery-col">
//                 <div className="gallery-item">
//                   <img src={images[(index + 1) % images.length]} alt={`Gallery Image ${index + 2}`} />
//                 </div>
//               </Col>
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }

// export default Gallery;


import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Gallery.css';
import gallery2 from '../images2/gallery2.jpg';
import gallery3 from '../images2/gallery3.jpg';
import gallery4 from '../images2/gallery4.jpg';
import gallery5 from '../images2/gallery5.jpg';
import gallery8 from '../images2/gallery8.jpg';
import gallery9 from '../images2/gallery9.jpg';
import gallery10 from '../images2/gallery10.jpg';
import gallery11 from '../images2/gallery11.jpg';
import gallery12 from '../images2/gallery12.jpg';
import gallery13 from '../images2/gallery13.jpg';
import gallery14 from '../images2/gallery14.jpg';
import gallery15 from '../images2/gallery15.jpg';
import gallery17 from '../images2/gallery17.jpg';

const images = [
  gallery8, gallery2, gallery3, gallery4, gallery5,
  gallery9, gallery10, gallery11, gallery12, gallery13,
  gallery14, gallery15, gallery17
];

const Gallery = () => {
  return (
    <Container className="gallery-container">
      <div className="blur-background"></div>
      <h1 style={{color:'black'}}>Our Gallery</h1>
      <Carousel indicators={false} controls={true} interval={3000}>
        {images.map((image, index) => (
          index % 2 === 0 && (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col xs={12} lg={6} className="gallery-col">
                  <div className="gallery-item">
                    <img src={image} alt={`Gallery Image ${index + 1}`} />
                  </div>
                </Col>
                <Col xs={12} lg={6} className="gallery-col">
                  <div className="gallery-item">
                    <img src={images[index + 1] || images[0]} alt={`Gallery Image ${index + 2}`} />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          )
        ))}
      </Carousel>
      <a href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
    </Container>
  );
}

export default Gallery;
