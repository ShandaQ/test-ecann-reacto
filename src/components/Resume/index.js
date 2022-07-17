import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <div>

      <Container id='project-card'>
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