// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import components
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Navbar component - visible on all pages */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer component - visible on all pages */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
