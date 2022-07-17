import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// components
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import Project from "./components/Project";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    
      <Nav />
      {/* <Header></Header> */}
      <Routes>
        
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer></Footer> */}
    </div>
  );
}
export default App;
