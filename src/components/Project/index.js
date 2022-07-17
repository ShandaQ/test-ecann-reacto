import React from 'react';
import './style.css';
import { Container } from '@mui/material';

// photos
import budget_tracker from '../../assets/projects/budget_tracker.gif'
import group_project_2 from '../../assets/projects/group_project_2.png'
import run_buddy from '../../assets/projects/run_buddy.jpg'
import nightin from '../../assets/projects/nightin.jpg'
import weatherdboard from '../../assets/projects/weatherdboard.jpg'
import codeQuiz from '../../assets/projects/codeQuiz.jpg'

const Project = () => {
  const projects = [
    {
      id: 'budget-tracker',
      name: 'Budget Tracker',
      description:
        'A banking app that tracks a users withdrawals and deposits',
      image: budget_tracker,
      url: 'https://secret-headland-13012.herokuapp.com/'
    },
    {
      id: 'group_project_2',
      name: 'Hisscussions',
      description:
        'A disscussion board application that targets snake enthusiasts that want to share information or links.',
      image: group_project_2,
      url: 'https://pets-r-app.herokuapp.com/'
    },
    {
      id: 'run_buddy',
      name: 'Run Buddy',
      description: 'A website that offers fitness training services.',
      image: run_buddy,
      url: 'https://cannonel.github.io/run-buddy/'
    },
    {
      id: 'weather-dboard',
      name: 'Weather Dashboard',
      description:
        'A weather dashboard application',
      image: weatherdboard,
      url: 'https://cannonel.github.io/weather-dashboard/'
    },
    {
      id: 'night-in',
      name: 'Night-In',
      description:
        'Use this application to generate a random movie suggestion and receipe idea for a perfect night in.',
      image: nightin,
      url: 'https://dangkmemez.github.io/group-project-one/'
    },
    {
      id: 'code-quiz',
      name: 'Code Quiz',
      description:
        'A timed quiz to test coding knowledge. Beat the clock and save your high score! ',
      image: codeQuiz,
      url: 'https://cannonel.github.io/code-quiz/'
    }
  ];

  return (
    <div className='work-page'>
      <h1 id='header'> deployed projects </h1>
      {projects.map((project, i) => (

        <Container id='project-card' key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Container>
            <div class='border'>
              <a href={project.url} target='_blank' rel='noreferrer'>
                <img
                  className='img-thumb'
                  src={project.image}
                  alt={project.name}
                  key={project.id}
                />
              </a>
            </div>
          </Container>
        </Container>
      ))}
    </div>
  );
};

export default Project;
