// // import React, { useState } from 'react';
// // import { Container, Form, Button, Card } from 'react-bootstrap';
// // import axios from 'axios';
// // import './Contact.css';

// // const contactSectionStyle = {
// //   backgroundImage: 'url(/images/Background.jpg)', /* Use the same background image */
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// //   backgroundRepeat: 'no-repeat',
// //   position: 'relative',
// //   zIndex: 0,
// //   padding: '4rem 0',
// // };

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: '',
// //     toEmail: '', // Set the default recipient email here
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     try {
// //       await axios.post('http://localhost:5000/send', formData);
// //       alert('Message sent successfully');
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //       alert('Failed to send message');
// //     }
// //   };

// //   return (
// //     <div style={contactSectionStyle}>
// //     {/* here i want add a container row , divide into four columns, first column contains name, second colum contains address, third column contains phonenumner*/}
// //       <Container className="contact-container">
// //         <Card style={{ background: 'transparent', border: 'none' }}>
// //           <Card.Body>
// //             <h1 style={{color:'black'}}>Contact Us</h1>
// //             <Form onSubmit={handleSubmit} className="form">
// //               <Form.Group controlId="formName">
// //                 <Form.Label>Name</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Enter your name"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formEmail">
// //                 <Form.Label>Email</Form.Label>
// //                 <Form.Control
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>
// //               <Form.Group controlId="formMessage">
// //                 <Form.Label>Message</Form.Label>
// //                 <Form.Control
// //                   as="textarea"
// //                   rows={3}
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>
// //               <Button variant="primary" type="submit">
// //                 Submit
// //               </Button>
// //             </Form>
// //           </Card.Body>
// //         </Card>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Contact;



// import React, { useState } from 'react';
// import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
// import './Contact.css';

// const contactSectionStyle = {
//   backgroundImage: 'url(/images/Background.jpg)', /* Use the same background image */
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   position: 'relative',
//   zIndex: 0,
//   padding: '4rem 0',
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     toEmail: 'nishanth1208199574@gmail.com', // Set the default recipient email here
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       await axios.post('https://hospitalbackend-gules.vercel.app/send', formData);
//       alert('Message sent successfully');
//       console.log(formData);
//       console.log('sucessfully sent');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message');
//     }
//   };

//   return (
//     <div style={contactSectionStyle}>
//       <Container className="contact-container">
//         <Card style={{ background: 'transparent', border: 'none' }}>
//           <Card.Body>
//             <h1 style={{color:'black'}}>Contact Us</h1>
            
//             <Form onSubmit={handleSubmit} className="form">
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formEmail">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formMessage">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//       <a href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
//       <i className="fab fa-whatsapp whatsapp-icon"></i>
//     </a>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Contact.css';

const contactSectionStyle = {
  backgroundImage: 'url(/images/Background.jpg)', /* Use the same background image */
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  zIndex: 0,
  padding: '4rem 0',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // New phone field
    message: '',
    toEmail: 'elitedentalcare2023@gmail.com', // Set the default recipient email here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://hospitalbackend-gules.vercel.app/send', formData);
      alert('Message sent successfully');
      console.log(formData);
      console.log('successfully sent');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div style={contactSectionStyle}>
      <Container className="contact-container">
        <Card style={{ background: 'transparent', border: 'none' }}>
          <Card.Body>
            <h1 style={{color:'black'}}>Contact Us</h1>
            
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]*" // Ensures only numbers can be entered
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <a href="https://api.whatsapp.com/send/?phone=918122132314&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default Contact;



