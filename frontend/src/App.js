import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Custom from './Pages/Custom';
import Accessories from './Pages/Accessories';
import Login from './Pages/Login'
import Story from './Pages/About/Our-Story'
import Team from './Pages/About/Team'
import Blog from './Pages/About/Blog'
import './css/Global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/gaming-pcs" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about/our-story" element={<Story />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;