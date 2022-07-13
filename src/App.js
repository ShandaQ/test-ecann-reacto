import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "About Me",
      // description:
      //   "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Projects", description: "Projects I've developed" },
    { name: "Contact" },
  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <section className="my-5">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About></About>
      </main>
    </section>
  );
}

export default App;
