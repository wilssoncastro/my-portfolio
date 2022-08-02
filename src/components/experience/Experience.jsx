import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      
            <h2> What Skills I Have</h2>
            <h2> My Experience</h2>


      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>

           
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>

              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>


        </div>

        <div className="experience__Backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experienced</small>

              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>Sequelize</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />

              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience