import React from 'react';
import './Gallery.css';
import elitedentalcare1 from '../images2/elitedentalcare1.jpg';
import elitedentalcare2 from '../images2/elitedentalcare2.jpg';
import elitedentalcare3 from '../images2/elitedentalcare3.jpg';
import elitedentalcare4 from '../images2/elitedentalcare4.jpg';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="blur-background"></div>
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={elitedentalcare1} alt="Gallery Image 1" />
        </div>
        <div className="gallery-item">
          <img src={elitedentalcare2} alt="Gallery Image 2" />
        </div>
        <div className="gallery-item">
          <img src={elitedentalcare3} alt="Gallery Image 3" />
        </div>
        <div className="gallery-item">
          <img src={elitedentalcare4} alt="Gallery Image 4" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
