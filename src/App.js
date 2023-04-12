import React from 'react';
import { Route, Routes } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Home from './Home';
import ColorSchemesExample from './Navbar';
import Onlinetest from './Onlinetest';
import Gallery from './Gallery';
import Cources from './Cources';
import Sidebar from './Sidebar';


const App = () => {
  return (
    <div>
    <ColorSchemesExample />
    <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route exact path="/cources" element={<Cources />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route path="/onlinetest" element={<Onlinetest />}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
