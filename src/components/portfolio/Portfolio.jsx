import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imageX.png'
import IMG2 from '../../assets/imageY.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Crypt Photo',
    github:'https://github.com/lordmomo/CryptPhoto',
    demo:'https://github.com/lordmomo/CryptPhoto'
  },
  {
    id:2,
    image:IMG2,
    title:'Tenzies',
    github:'https://github.com/lordmomo/Tenzies',
    demo:'https://github.com/lordmomo/Tenzies'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id}className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className="btn " target='_blank'>Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
            </article>
                )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio