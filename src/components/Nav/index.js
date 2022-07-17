import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { Container, SvgIcon, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Nav() {
  return (
    <div className='side-nav'>
     
      <ul>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/project'>projects</Link>
        </li>

        <li>
          <Link to='/contact'>contact</Link>
        </li>

        <li>
          <Link to='/resume'>resume</Link>
        </li>

        <Container>
          <a
            href='https://github.com/cannonel'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='GitHub'>
              <SvgIcon
                alt='github-icon'
                fontSize='large'
                component={GitHubIcon}
              />
            </Tooltip>
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/erika-cannon-54ab58230/'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='LinkedIn'>
              <SvgIcon
                alt='linkedin-icon'
                fontSize='large'
                component={LinkedInIcon}
              />
            </Tooltip>
          </a>
        </Container>
      </ul>
    </div>
  );
}

export default Nav;