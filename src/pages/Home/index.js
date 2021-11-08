import React from 'react';
import './style.scss';

function Home() {
  return (
    <main>
      <section className='section intro'>
        <div className='intro-photo'>
          <img src='./photo.png' alt='Stephanie Fernandes' />
        </div>
        <div className='intro-description'>
          <h2>
            Hey there! <img src='./wave.png' alt='Hand Wave Emoji' />{' '}
          </h2>
          <p>
            I'm Stephanie, a design-minded <strong>front end developer</strong>{' '}
            💻 always looking forward to learn from other developers and to
            create pixel perfect applications. I'm currently{' '}
            <strong>based in Brazil</strong> 🇧🇷, but I am available to work
            remotely for companies <strong>all over the world</strong> 🚀.
          </p>
        </div>
      </section>
      <section className='section experience'>
        <h2 className='section__title'>Work Experience</h2>
        <div className='jobs'>
          <div className='job'>
            <div className='job__company-time'>
              <p className='job__company'>ACCT</p>
              <p className='job__time'>August 2021 - Present</p>
            </div>
            <p className='job__position'>
              Front End Developer
              <span className='job__location'>
                @ Atibaia, SP, Brazil (Remote)
              </span>
            </p>
          </div>
          <div className='job'>
            <div className='job__company-time'>
              <p className='job__company'>Sambatech</p>
              <p className='job__time'>February 2021 - August 2021</p>
            </div>
            <p className='job__position'>
              Front End Developer
              <span className='job__location'>
                @ Belo Horizonte, MG, Brazil (Remote)
              </span>
            </p>
          </div>
          <div className='job'>
            <div className='job__company-time'>
              <p className='job__company'>Enext</p>
              <p className='job__time'>October 2020 - February 2021</p>
            </div>
            <p className='job__position'>
              Front End Developer
              <span className='job__location'>
                @ São Paulo, SP, Brazil (Remote)
              </span>
            </p>
          </div>
          <div className='job'>
            <div className='job__company-time'>
              <p className='job__company'>KTBYTE</p>
              <p className='job__time'>January 2018 - April 2019</p>
            </div>
            <p className='job__position'>
              Front End Developer
              <span className='job__location'>
                @ Lexington, MA, USA (Remote)
              </span>
            </p>
          </div>
          <div className='job'>
            <div className='job__company-time'>
              <p className='job__company'>Cuponomia</p>
              <p className='job__time'>February 2018 - October 2018</p>
            </div>
            <p className='job__position'>
              Front End Developer
              <span className='job__location'>
                @ São Paulo, SP, Brazil (Remote)
              </span>
            </p>
          </div>
          <div className='job'>
            <div className='job__company-time'>
              <p className='job__company'>Trílogo</p>
              <p className='job__time'>September 2016 - January 2018</p>
            </div>
            <p className='job__position'>
              Front End Developer
              <span className='job__location'>@ Fortaleza, CE, Brazil</span>
            </p>
          </div>
        </div>
        <a
          href='./resume/Stephanie_Fernandes-CV_en.pdf'
          target='_blank'
          className='resume'
        >
          View my Resume
        </a>
      </section>
      <section className='section skills'>
        <h2 className='section__title'>Skills</h2>
        <div className='skills__container'>
          <div className='skills__category'>
            <p className='skill__label'>Languages</p>
            <ul className='skill__list'>
              <li className='skill'>HTML</li>
              <li className='skill'>Javascript ES6+</li>
              <li className='skill'>(S)CSS</li>
              <li className='skill'>Less</li>
            </ul>
          </div>
          <div className='skills__category'>
            <p className='skill__label'>Frameworks/Libraries</p>
            <ul className='skill__list'>
              <li className='skill'>React</li>
              <li className='skill'>JQuery</li>
              <li className='skill'>Styled Components</li>
            </ul>
          </div>
          <div className='skills__category'>
            <p className='skill__label'>Tools</p>
            <ul className='skill__list'>
              <li className='skill'>Git & Github</li>
              <li className='skill'>Chrome Devtools</li>
              <li className='skill'>Figma</li>
              <li className='skill'>Photoshop</li>
            </ul>
          </div>
          <div className='skills__category'>
            <p className='skill__label'>Design</p>
            <ul className='skill__list'>
              <li className='skill'>Sketching</li>
              <li className='skill'>Wireframing</li>
              <li className='skill'>Responsive Web Design</li>
              <li className='skill'>UI Design</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='section education'>
        <h2 className='section__title'>Education</h2>
        <div className='universities'>
          <div className='university'>
            <div className='university__name-time'>
              <p className='university__name'>Universidade de Fortaleza</p>
              <p className='university__time'>August 2010 - June 2017</p>
            </div>
            <p className='university__major'>
              Bachelor of Computer Science
              <span className='university__location'>
                @ Fortaleza, CE, Brazil
              </span>
            </p>
          </div>
          <div className='university'>
            <div className='university__name-time'>
              <p className='university__name'>Monash University</p>
              <p className='university__time'>July 2014 - June 2015</p>
            </div>
            <p className='university__major'>
              Bachelor of Computer Science (Scholarship)
              <span className='university__location'>
                @ Melbourne, VIC, Australia
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className='section language'>
        <h2 className='section__title'>Languages</h2>
        <div className='languages'>
          <div className='language__row'>
            <p className='language__name'>Portuguese</p>
            <p className='language__fluency'>Native</p>
          </div>
          <div className='language__row'>
            <p className='language__name'>English</p>
            <p className='language__fluency'>Fluent</p>
          </div>
          <div className='language__row'>
            <p className='language__name'>Spanish</p>
            <p className='language__fluency'>Basic</p>
          </div>
          <div className='language__row'>
            <p className='language__name'>Korean</p>
            <p className='language__fluency'>Basic</p>
          </div>
        </div>
      </section>
      <section className='section extra'>
        <h2 className='section__title'>Some Extra Tidbits</h2>
        <ul className='tidbits'>
          <li className='tidbit'>
            I co-authored the paper{' '}
            <a
              href='https://ieeexplore.ieee.org/document/8114447'
              target='_blank'
              rel='noopener noreferrer'
            >
              "Interactive Musical Game with a Gesture-Controlled Virtual
              Puppet"
            </a>
            , which was published at SVR 2017 and won{' '}
            <strong>second place</strong> in the Application category.
            <span role='img' aria-label='Trophy Emoji'>
              🏆
            </span>
          </li>
          <li className='tidbit'>
            Back in 2014, I was granted a scholarship by the Brazilian
            government to study full-time at Monash University in{' '}
            <strong>Melbourne, Australia</strong>, where I studied Game
            Development.{' '}
            <span role='img' aria-label='Kangaroo Emoji'>
              🦘
            </span>
          </li>
          <li className='tidbit'>
            At Monash University, I was a{' '}
            <a
              href='https://www.monash.edu/it/future-students/meet-our-students/stephanie-fernandes'
              target='_blank'
              rel='noopener noreferrer'
            >
              volunteer assistant
            </a>{' '}
            at the SensiLab research lab, where I was responsible for the
            research and 3D modelling of the Banteay Srei temple for an{' '}
            <a
              href='https://sensilab.monash.edu/research/virtual-angkor/'
              target='_blank'
              rel='noopener noreferrer'
            >
              educational game based on Angkor Wat
            </a>
            .
            <span role='img' aria-label='Graduation Cap Emoji'>
              🎓
            </span>
          </li>
          <li className='tidbit'>
            I've done the <strong>Camino de Santiago</strong> in 6 days in 2019.
            <span role='img' aria-label='Sweat Emoji'>
              💦
            </span>
          </li>
          <li className='tidbit'>
            I've voluntered at Hostel One in <strong>Porto</strong> for 40 days
            during July/August 2019, making friends with people from{' '}
            <em>all over</em> the world and improving my communication skills!{' '}
            <span role='img' aria-label='World Map Emoji'>
              🗺️
            </span>
          </li>
          <li className='tidbit'>
            I went to Sogang University in <strong>Seoul, South Korea,</strong>{' '}
            for 3 months in 2019, where I learned and studied the Korean
            language as a full-time student :){' '}
            <span role='img' aria-label='South Korea Flag Emoji'>
              🇰🇷
            </span>
          </li>
          <li className='tidbit'>
            My favourite country from all over the world is{' '}
            <strong>Japan</strong>!{' '}
            <span role='img' aria-label='Japan Flag Emoji'>
              🇯🇵
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
