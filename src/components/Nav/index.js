import React, { useState} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import Contact from './components/Contact';

 

function Nav() {

  const [categories] = useState([
    {
      name: "About",
    },
    { name: "Projects", description: "Projects I've developed" },
    { name: "Contact"},
  
  ]);
  
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
          <a data-testid="about" onClick={() => setContactSelected(false)}>
              Erika Cannon
            </a>
          </li> */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;