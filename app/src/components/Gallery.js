import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';
import gallery1 from '../images2/gallery1.jpg';
import gallery2 from '../images2/gallery2.jpg';
import gallery3 from '../images2/gallery3.jpg';
import gallery4 from '../images2/gallery4.jpg';
import gallery5 from '../images2/gallery5.jpg';
import gallery6 from '../images2/gallery6.jpg';
import gallery7 from '../images2/gallery7.jpg';
import gallery8 from '../images2/gallery8.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const Gallery = () => {
  return (
    <Container className="gallery-container">
      <div className="blur-background"></div>
      <h2>Our Gallery</h2>
      <Row className="gallery-grid">
        {images.map((image, index) => (
          <Col xs={12} md={6} className="gallery-item" key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
