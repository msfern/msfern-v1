import React from 'react';
import Project from '../../components/Project/index';
import './style.scss';

function Projects() {
  const projects = {
    evoxNews: {
      name: 'News Portal',
      image: './news.png',
      description: 'A News portal application.',
      techs: ['React', 'Fetch API', 'SCSS'],
      github: 'https://github.com/msfern/evox-news',
      live: '',
    },
    freelator: {
      name: 'Freelator',
      image: './freelator.png',
      description:
        'A simple Freelance project calculator made with vanilla Javascript.',
      techs: ['HTML', 'SCSS', 'Javascript'],
      github: 'https://github.com/msfern/freelator',
      live: 'https://msfern.github.io/freelator/',
    },
    githubOrgs: {
      name: 'Github Organizations',
      image: './orgs.png',
      description:
        'An application that displays the Github information of organizations.',
      techs: ['React', 'React Router', 'SCSS'],
      github: 'https://github.com/msfern/github-orgs',
      live: 'https://github-organization-search.netlify.app/',
    },
    customerFilter: {
      name: 'Customer Filter',
      image: './customers.png',
      description: 'Application to filter provided customers by their region.',
      techs: ['React', 'Axios', 'React Router'],
      github: 'https://github.com/msfern/juntossomosmais-challenge',
      live: '',
    },
    office365: {
      name: 'Office365 Email',
      image: './office365.png',
      description: "A component based on Office365's email application.",
      techs: ['React', 'Axios'],
      github: 'https://github.com/msfern/encontact-challenge',
      live: 'https://msfern.github.io/encontact-challenge/',
    },
    emojo: {
      name: 'Emojo',
      image: './emojo.png',
      description:
        'An Emoji search application made with the goal to practice React and API calls.',
      techs: ['React', 'Axios', 'SCSS'],
      github: 'https://github.com/msfern/emojo',
      live: 'https://emojo.netlify.com/',
    },
  };

  return (
    <main>
      <p className='projects-desc'>
        Here you can check some of the stuff I have built so far. Still in
        progress! :)
      </p>
      <section className='project-list'>
        {Object.keys(projects).map((project) => (
          <Project key={project} details={projects[project]} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
