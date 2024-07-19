import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  { id: 'teeth-whitening', title: 'Teeth Whitening', shortDescription: 'Brighten your smile with our professional teeth whitening services.', longDescription: 'Teeth whitening is a procedure that lightens teeth and helps to remove stains and discoloration. It is one of the most popular cosmetic dental procedures because it can greatly improve how your teeth look. Most dentists perform teeth whitening.', image: '/images/teeth whitening.jpg' },
  { id: 'bonding', title: 'Bonding', shortDescription: 'Repair chipped or cracked teeth with our bonding treatments.', longDescription: 'Dental bonding is a procedure in which a tooth-colored resin material (a durable plastic material) is applied and hardened with a special light, which ultimately "bonds" the material to the tooth to improve a person\'s smile.', image: '/images/bonding.jpg' },
  { id: 'checkups', title: 'Checkups', shortDescription: 'Regular dental checkups to maintain your oral health.', longDescription: 'Regular dental checkups are crucial for maintaining good oral health. During a checkup, the dentist or dental hygienist will clean your teeth and check for cavities and gum disease. Regular checkups help prevent the onset of oral health issues.', image: '/images/checkups.jpg' },
  { id: 'cosmetic-procedures', title: 'Cosmetic Procedures', shortDescription: 'Enhance your smile with our range of cosmetic procedures.', longDescription: 'Cosmetic dental procedures are treatments aimed at improving the appearance of your teeth, gums, and smile. They include teeth whitening, bonding, veneers, and more. These procedures can boost your confidence by giving you a brighter, more attractive smile.', image: '/images/cosmetic procedures.jpg' },
  { id: 'dental-implants', title: 'Dental Implants', shortDescription: 'Replace missing teeth with durable dental implants.', longDescription: 'Dental implants are replacement tooth roots. Implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth. They improve both the appearance and function of your teeth.', image: '/images/dental implant.jpg' },
  { id: 'dentures-and-bridges', title: 'Dentures and Bridges', shortDescription: 'Restore your smile with our custom dentures and bridges.', longDescription: 'Dentures are removable replacements for missing teeth and surrounding tissues. Bridges are used to replace one or more missing teeth by anchoring to neighboring teeth or dental implants. Both options help restore your smile and improve chewing.', image: '/images/dentures and bridges.jpg' },
  { id: 'emergency-care', title: 'Emergency Care', shortDescription: 'Immediate dental care for emergencies.', longDescription: 'Dental emergency care involves immediate treatment for unexpected dental problems such as severe pain, injury to the mouth, or a knocked-out tooth. Prompt care can alleviate pain and prevent further damage.', image: '/images/emergency care.jpg' },
  { id: 'extractions', title: 'Extractions', shortDescription: 'Safe and painless tooth extractions.', longDescription: 'Tooth extraction is the removal of a tooth from its socket in the bone. It\'s performed for a variety of reasons, including severe decay, infection, or overcrowding. Extractions are often necessary to maintain or improve oral health.', image: '/images/tooth extractions.jpg' },
  { id: 'fillings-and-sealants', title: 'Fillings and Sealants', shortDescription: 'Prevent cavities with our fillings and sealants.', longDescription: 'Dental fillings are used to treat cavities and restore tooth structure. Sealants are thin, protective coatings applied to the chewing surfaces of back teeth to prevent cavities. Both treatments help maintain dental health.', image: '/images/fillings and sealants.jpg' },
  { id: 'laser-dentistry', title: 'Laser Dentistry', shortDescription: 'Advanced laser treatments for various dental issues.', longDescription: 'Laser dentistry uses lasers to treat a variety of dental conditions. It offers a more comfortable treatment option for many dental procedures involving hard or soft tissue compared to drills and other non-laser tools.', image: '/images/laser dentistry.jpg' },
  { id: 'mouth-guards', title: 'Mouth Guards', shortDescription: 'Custom-fit mouth guards for sports and sleep.', longDescription: 'Mouth guards are protective devices for the mouth that cover the teeth and gums to prevent injury to the teeth, gums, lips, and jaw. They are commonly used in contact sports and to prevent teeth grinding during sleep.', image: '/images/mouth guard.jpg' },
  { id: 'oral-surgery', title: 'Oral Surgery', shortDescription: 'Expert oral surgery services for complex dental issues.', longDescription: 'Oral surgery refers to surgical procedures performed in or around the mouth and jaw. Common types include extractions, dental implants, and corrective jaw surgery. These procedures address complex dental issues and improve oral health.', image: '/images/oral surgery.jpg' },
  { id: 'root-canals', title: 'Root Canals', shortDescription: 'Relieve pain and save your teeth with our root canal treatments.', longDescription: 'A root canal is a treatment used to repair and save a tooth that is badly decayed or infected. The procedure involves removing the damaged area of the tooth, cleaning and disinfecting it, and then filling and sealing it.', image: '/images/root canal.jpg' },
  { id: 'teeth-reshaping', title: 'Teeth Reshaping', shortDescription: 'Improve the appearance of your teeth with reshaping.', longDescription: 'Teeth reshaping, or contouring, is a cosmetic dental procedure that involves removing small amounts of enamel to change the shape, length, or surface of one or more teeth. It is used to correct minor imperfections.', image: '/images/tooth reshaping.jpg' },
  { id: 'veneers-and-crowns', title: 'Veneers and Crowns', shortDescription: 'Achieve a flawless smile with veneers and crowns.', longDescription: 'Veneers are thin, custom-made shells designed to cover the front surface of teeth to improve appearance. Crowns are caps placed over teeth to restore shape, size, and strength. Both enhance the appearance and function of teeth.', image: '/images/veneers and crowns.jpg' },
  { id: 'x-ray', title: 'X-ray', shortDescription: 'Accurate dental x-rays for precise diagnosis.', longDescription: 'Dental x-rays are images of your teeth that your dentist uses to evaluate your oral health. These x-rays are used with low levels of radiation to capture images of the interior of your teeth and gums, identifying problems like cavities, tooth decay, and impacted teeth.', image: '/images/x ray.jpg' },
];

const servicesSectionStyle = {
  backgroundImage: 'url(/images/Background.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  zIndex: 0,
 
};

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isPopupHovered, setIsPopupHovered] = useState(false);

  const handleMouseEnter = (service) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    if (!isPopupHovered) {
      setHoveredService(null);
    }
  };

  const handlePopupMouseEnter = () => {
    setIsPopupHovered(true);
  };

  const handlePopupMouseLeave = () => {
    setIsPopupHovered(false);
    setHoveredService(null);
  };

  return (
    <div className="services-section" style={servicesSectionStyle}>
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card
                className="mb-4 service-card"
                onMouseEnter={() => handleMouseEnter(service)}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.shortDescription}</Card.Text>
                  <Link to={`/service/${service.id}`}>Learn More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {hoveredService && (
        <div
          className="popup"
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
        >
          <img src={hoveredService.image} alt={hoveredService.title} className="popup-image" />
          <h3>{hoveredService.title}</h3>
          <p>{hoveredService.longDescription}</p>
        </div>
      )}
      <a href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
    </div>
  );
};

export default Services;
