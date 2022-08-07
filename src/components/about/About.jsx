import React from 'react'
import './about.css'
import ME from '../../assets/photo1.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {TbFolderMinus} from 'react-icons/tb'
const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-img">
          <img src={ME} alt="me" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FiAward classNmae="about_icon"/>
            <h5> Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className="about_card">
            <FiUsers classNmae="about_icon"/>
            <h5> Clients</h5>
            <small> 3 Nationally </small>
          </article>
          <article className="about_card">
            <TbFolderMinus classNmae="about_icon"/>
            <h5> Projects</h5>
            <small>5 Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestiae reprehenderit nostrum. Ut nulla adipisci sequi velit itaque accusamus maiores qui, praesentium soluta rerum cum ab vero a quam saepe. Sit facilis nobis esse officia at tempore ea nostrum voluptatem, labore rerum harum consequatur dolor numquam eius officiis temporibus doloremque!
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About