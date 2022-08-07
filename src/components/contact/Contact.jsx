import React, { useRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {SiViber} from 'react-icons/si'


import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jll87za', 'template_v5jpa8m', form.current, 'hAPffDw6Vzt4RW6TB')
    e.target.reset();
     
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me </h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>sashankshrestha7@gmail.com</h5>
            <a href="mailto:sashankshrestha7@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Sashank Shrestha</h5>
            <a href="https://m.me/sashank.shrestha" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <SiViber className="contact_option-icon"/>
            <h4>Viber</h4>
            <h5>984123</h5>
            <a href="https://api.viber.com/send?phone+977986" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} submit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  cols="20" rows="7" placeholder="Your Message" required/>
          <button typr="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact