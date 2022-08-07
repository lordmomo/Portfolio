import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
          <article className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service_list">
              <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
            </ul>
          </article>
        {/* end of ui/ux */}
         <article className="service">
            <div className="service_head">
              <h3> Web Development</h3>
            </div>
            <ul className="service_list">
              <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
              
            </ul>
          </article>
        {/* end of web development */}
         <article className="service">
            <div className="service_head">
              <h3>Content creation</h3>
            </div>
            <ul className="service_list">
              <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
               <li><HiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo.</p>
              </li>
            </ul>
          </article>
        {/* end of content creation */}
      </div>
    </section>
  )
}

export default Services