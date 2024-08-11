// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './BackgroundSlider.css';

// const BackgroundSlider = ({ images, interval = 5000 }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [images.length, interval]);

//   return (
//     <div className="background-slider">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`background-slide ${index === currentImageIndex ? 'active' : ''}`}
//           style={{
//             backgroundImage: `url(${image})`,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// BackgroundSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   interval: PropTypes.number,
// };

// export default BackgroundSlider;



// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './BackgroundSlider.css';

// const BackgroundSlider = ({ images, interval = 5000 }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [images.length, interval]);

//   return (
//     <div className="background-slider">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`background-slide ${index === currentImageIndex ? 'active' : ''}`}
//           style={{
//             backgroundImage: `url(${image})`,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// BackgroundSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   interval: PropTypes.number,
// };

// export default BackgroundSlider;


// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './BackgroundSlider.css';

// const BackgroundSlider = ({ images, interval = 5000 }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [images.length, interval]);

//   return (
//     <div className="background-slider">
//       {images.map((image, index) => {
//         let className = 'background-slide';
//         if (index === currentImageIndex) {
//           className += ' active';
//         } else if (index === (currentImageIndex - 1 + images.length) % images.length) {
//           className += ' previous';
//         } else {
//           className += ' next';
//         }

//         return (
//           <div
//             key={index}
//             className={className}
//             style={{
//               backgroundImage: `url(${image})`,
//             }}
//           ></div>
//         );
//       })}
//     </div>
//   );
// };

// BackgroundSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   interval: PropTypes.number,
// };

// export default BackgroundSlider;


// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './BackgroundSlider.css';

// const BackgroundSlider = ({ images, interval = 5000 }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [images.length, interval]);

//   return (
//     <div className="background-slider">
//       {images.map((image, index) => {
//         let className = 'background-slide';
//         if (index === currentImageIndex) {
//           className += ' active';
//         } else if (index === (currentImageIndex - 1 + images.length) % images.length) {
//           className += ' previous';
//         } else if (index === (currentImageIndex + 1) % images.length) {
//           className += ' next';
//         }

//         return (
//           <div
//             key={index}
//             className={className}
//             style={{
//               backgroundImage: `url(${image})`,
//             }}
//           ></div>
//         );
//       })}
//     </div>
//   );
// };

// BackgroundSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   interval: PropTypes.number,
// };

// export default BackgroundSlider;


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


// import React from 'react';
// import PropTypes from 'prop-types';
// import Slider from 'react-slick';
// import './BackgroundSlider.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const BackgroundSlider = ({ images, interval = 5000 }) => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: interval,
//     arrows: false,
//     fade: true,
//     pauseOnHover: false,
//   };

//   return (
//     <div className="background-slider">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="background-slide" style={{ backgroundImage: `url(${image})` }}></div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// BackgroundSlider.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   interval: PropTypes.number,
// };

// export default BackgroundSlider;

