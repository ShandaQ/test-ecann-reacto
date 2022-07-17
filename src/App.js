import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// components
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import Work from "./components/Work";
function App() {
  return (
    <div className="App">
      {" "}
      <SideNav />{" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/portfolio" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/work" element={<Work />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>{" "}
    </div>
  );
}
export default App;
