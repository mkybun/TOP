import Nav from './components/Nav';
import Home from './components/Home';
import Events from './components/Events';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="menu" element={<Menu />} />
        <Route exact path="events" element={<Events />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
