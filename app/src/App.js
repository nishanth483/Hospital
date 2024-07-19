import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import Gallery from './components/Gallery';
import './App.css'; // Assuming you have a CSS file for global styles

const App = () => {
  return (
    <div className="background-animation">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
