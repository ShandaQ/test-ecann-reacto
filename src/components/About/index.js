import React from 'react';
import profPic from '../../assets/profPic/headshot.jpg'
import './style.css';
import { Container } from '@mui/material';

function About() {
  return (
    <div>

      <Container id='project-card'>
        <h3>My name is Erika Cannon</h3>
        <Container>
        <img src={profPic} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
        </Container>
        <p>
          <ul>
            <li>
              A young professional with a long background in the service industry, specifically restaurant
              and beauty. 12 years experience in said industries has crafted a specialty in working directly
              with customer/client needs, and executing plans and products to guarantee satisfaction.
              With a keen sense of creativity and an artistic eye, moving into the world of web development
              brings hopes of creating aesthically pleasing websites/applications with optimal functionality.

            </li>
          </ul>
        </p>
      </Container>

    
    </div>
  );
}

export default About;