import React, { useState } from "react";
import "./App.css";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";
// import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App(props) {
//   const [categories] = useState([
//     {
//       name: "About",
//       // description:
//       //   "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "Projects", description: "Projects I've developed" },
//     { name: "Contact", ContactForm },
  
//   ]);
  
// const [contactSelected, setContactSelected] = useState(false);
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
 

  return (
    
    <section className="my-5">

      <Header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </Header>
          <main>
            <About></About>
      </main>
    </section>
    
  );
}

export default App;
