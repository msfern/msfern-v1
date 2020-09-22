import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  function goToAnotherPage(event, page) {
    event.preventDefault();
    navigate(`/${page}/`);
  }

  return (
    <header className='header'>
      <nav className='header-top'>
        <h1>stephanie fernandes</h1>
      </nav>
      <nav className='header-bottom'>
        <ul>
          <li>
            <button
              type='button'
              href='#'
              onClick={(e) => goToAnotherPage(e, '')}
              className={currentPath === '/' ? 'active' : ''}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type='button'
              href='#'
              onClick={(e) => goToAnotherPage(e, 'projects')}
              className={currentPath === '/projects/' ? 'active' : ''}
            >
              Projects
            </button>
          </li>
        </ul>
        <ul className='social-links'>
          <li>
            <a
              href='mailto:msfern.dev@gmail.com'
              rel='noopener noreferrer'
              className='social'
            >
              <i className='far fa-envelope' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/iztef'
              target='_blank'
              rel='noopener noreferrer'
              className='social'
            >
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/msfern'
              target='_blank'
              rel='noopener noreferrer'
              className='social'
            >
              <i className='fab fa-github' />
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/msfern'
              target='_blank'
              rel='noopener noreferrer'
              className='social'
            >
              <i className='fab fa-codepen' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/stephanie-fernandes-30365233/'
              target='_blank'
              rel='noopener noreferrer'
              className='social'
            >
              <i className='fab fa-linkedin' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
