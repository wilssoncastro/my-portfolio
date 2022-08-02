import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className='about__cards'>


            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 1 year as Full Stack Developer </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> +5 completed  </small>
            </article>

          </div>

        <p>
        I describe myself as passionate about web development,I have experience and knowledge in Javascript, NodeJs, ReactJs, Redux, SQL databases, PHP and SCRUM work methodologies, I am currently in search of a work project that challenges me to continue learning and to which I can add my proactivity and passion
        </p>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>


      </div>
    </section>
  )
}
export default About