

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BackgroundSlider.css';

const BackgroundSlider = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length, interval]);

  return (
    <div className="background-slider">
      {images.map((image, index) => {
        let className = 'background-slide';
        if (index === currentImageIndex) {
          className += ' active';
        } else if (index === (currentImageIndex - 1 + images.length) % images.length) {
          className += ' previous';
        } else if (index === (currentImageIndex + 1) % images.length) {
          className += ' next';
        }

        return (
          <div
            key={index}
            className={className}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

BackgroundSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default BackgroundSlider;

