import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const serviceDetails = {
  'teeth-whitening': { title: 'Teeth Whitening', description: 'Detailed information about Teeth Whitening.' },
  'bonding': { title: 'Bonding', description: 'Detailed information about Bonding.' },
  'checkups': { title: 'Checkups', description: 'Detailed information about Checkups.' },
  'cosmetic-procedures': { title: 'Cosmetic Procedures', description: 'Detailed information about Cosmetic Procedures.' },
  'dental-implants': { title: 'Dental Implants', description: 'Detailed information about Dental Implants.' },
  'dentures-and-bridges': { title: 'Dentures and Bridges', description: 'Detailed information about Dentures and Bridges.' },
  'emergency-care': { title: 'Emergency Care', description: 'Detailed information about Emergency Care.' },
  'extractions': { title: 'Extractions', description: 'Detailed information about Extractions.' },
  'fillings-and-sealants': { title: 'Fillings and Sealants', description: 'Detailed information about Fillings and Sealants.' },
  'laser-dentistry': { title: 'Laser Dentistry', description: 'Detailed information about Laser Dentistry.' },
  'mouth-guards': { title: 'Mouth Guards', description: 'Detailed information about Mouth Guards.' },
  'online-dentist-booking': { title: 'Online Dentist Booking', description: 'Detailed information about Online Dentist Booking.' },
  'oral-surgery': { title: 'Oral Surgery', description: 'Detailed information about Oral Surgery.' },
  'root-canals': { title: 'Root Canals', description: 'Detailed information about Root Canals.' },
  'teeth-reshaping': { title: 'Teeth Reshaping', description: 'Detailed information about Teeth Reshaping.' },
  'veneers-and-crowns': { title: 'Veneers and Crowns', description: 'Detailed information about Veneers and Crowns.' },
  'x-ray': { title: 'X-ray', description: 'Detailed information about X-ray.' },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  return (
    <div className="service-detail-section">
      <Container>
        <h2 className="text-center mb-4">{service.title}</h2>
        <p>{service.description}</p>
      </Container>
    </div>
  );
};

export default ServiceDetail;
