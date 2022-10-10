import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Projects from '../pages/Projects/index';
import Sustainable from '../pages/Sustainable projects/index';
import Footer from '../services/footer/index';

export default function Ways() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sustainable' element={<Sustainable />} />
      </Routes>
      <Footer />
    </Router>
  )
}
