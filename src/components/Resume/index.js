import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <div>
      <h1>howdy!</h1>

      <Container id='project-card'>
        <p>Welcome!</p>
        <div>
          <a key='resume' target='_blank' rel='noreferrer' href={resume}>
            view my resume
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Resume;