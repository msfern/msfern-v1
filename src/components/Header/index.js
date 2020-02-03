import React from 'react';
import { withRouter } from 'react-router';
import './style.css';

class Header extends React.Component {
  
  goToAnotherPage = (event, page) => {
    event.preventDefault();
    this.props.history.push(`/${page}`);
  }
  
  render() {
    const currentLocation = this.props.location.pathname;
    console.log(currentLocation)
    return (
      <header className='header'>
        <nav className='header-top'>
          <h1>stephanie fernandes</h1>
        </nav>
        <nav className='header-bottom'>
          <ul>
            <li><button href='#' onClick={(e) => this.goToAnotherPage(e, '')} className={currentLocation === '/' ? 'active' : ''}>Home</button></li>
            <li><button href='#' onClick={(e) => this.goToAnotherPage(e, 'projects')} className={currentLocation === '/projects' ? 'active' : ''}>Projects</button></li>
          </ul>
          <ul className='social-links'>
            <li><a href='mailto:m.stephanie.fernandes@gmail.com' rel='noopener noreferrer' className='social'><i className="far fa-envelope"></i></a></li>
            <li><a href='https://twitter.com/iztef' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-twitter"></i></a></li>
            <li><a href='https://github.com/msfern' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-github"></i></a></li>
            <li><a href='https://codepen.io/msfern' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-codepen"></i></a></li>
            <li><a href='https://www.linkedin.com/in/stephanie-fernandes-30365233/' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header);