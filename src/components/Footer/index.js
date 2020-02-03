import React from 'react';
import { withRouter } from 'react-router';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className='social-links'>
          <li><a href='mailto:m.stephanie.fernandes@gmail.com' rel='noopener noreferrer' className='social'><i className="far fa-envelope"></i></a></li>
          <li><a href='https://twitter.com/iztef' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-twitter"></i></a></li>
          <li><a href='https://github.com/msfern' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-github"></i></a></li>
          <li><a href='https://codepen.io/msfern' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-codepen"></i></a></li>
          <li><a href='https://www.linkedin.com/in/stephanie-fernandes-30365233/' target='_blank' rel='noopener noreferrer' className='social'><i className="fab fa-linkedin"></i></a></li>
        </ul>
        <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" className="svg-inline--fa fa-code fa-w-20 code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg> made with <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> by stephanie fernandes</p>
    </footer>
    )
  }
}

export default withRouter(Footer);