import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
const Portfolio = () => {
  const porfolioItems = [{
    id: 1,
    image: IMG1,
    title: "Henry Games",
    github: "https://github.com/wilssoncastro/HenryGames-PG",
    demo: "https://henry-games-pg.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Zone Games",
    github: "https://github.com/wilssoncastro/Zone-Games-App",
    demo: "https://video-games-api.vercel.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Gif App",
    github: "https://github.com/wilssoncastro/Gif-App",
    demo: "https://gif-app-rouge.vercel.app/"
  }]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>

        {
          porfolioItems.map(({ id, image, title, github, demo })=>{
        return(
        <article key={id}className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={image} alt="PROJECT 1" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>
        )}
        )
        }

       
      </div>
    </section>
  )
}

export default Portfolio