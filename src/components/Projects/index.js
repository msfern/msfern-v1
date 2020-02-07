import React from 'react';
import Project from '../Project/index';
import './style.css';

class Projects extends React.Component {
  render() {
    const projects = {
      emojo: {
        name: 'Emojo',
        image: './emojo.png',
        description: 'An Emoji search application made with the goal to practice React and API calls.',
        techs: ['React', 'Axios', 'SCSS'],
        github: 'https://github.com/msfern/emojo',
        live: 'https://emojo.netlify.com/'
      },
      // crustylab: {
      //   name: 'CrustyLab',
      //   image: './img.png',
      //   description: 'A pizza creating application, where the user can manage ingredients, recipes and stock.',
      //   techs: ['React', 'Axios', 'Express', 'Firebase', 'SCSS'],
      //   github: '',
      //   live: ''
      // },
    }

    return (
      <main>
        <p className='projects-desc'>Here you can check some of the stuff I have built so far. Still in progress! :)</p>
        <section className='project-list'>
        { Object.keys(projects).map((project) => (
          <Project key={project} details={projects[project]} />
        ))}
        </section>
      </main>
    )
  }
}

export default Projects;