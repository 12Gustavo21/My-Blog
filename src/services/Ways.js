import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Projects from '../pages/Projects/index';
import Sustainable from '../pages/Sustainable Goals/index';
import Footer from '../services/footer/index';
import Erro from '../services/Error/index';
import ProjectOne from '../pages/Sustainable Goals/ProjectOne/index';
import ProjectTwo from '../pages/Sustainable Goals/ProjectTwo/index';
import ProjectThree from '../pages/Sustainable Goals/ProjectThree/index';
import ProjectFour from '../pages/Sustainable Goals/ProjectFour/index';
import ProjectFive from '../pages/Sustainable Goals/ProjectFive/index';

export default function Ways() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Erro />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sdgs' element={<Sustainable />} />
        <Route path='/afforestation' element={<ProjectOne />} />
        <Route path='/asphalt' element={<ProjectTwo />} />
        <Route path='/education' element={<ProjectThree />} />
        <Route path='/safety' element={<ProjectFour />} />
        <Route path='/animals' element={<ProjectFive />} />
      </Routes>
      <Footer />
    </Router>
  )
}
