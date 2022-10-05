import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Header from '../components/header/index';
import About from '../pages/About/index';
import Projects from '../pages/Projects/index';
import Sustainable from '../pages/Sustainable projects/index'

export default function Routess() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Sustainable' element={<Sustainable />} />
      </Routes>
    </Router>
  )
}
