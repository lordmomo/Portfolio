import React from 'react'
import './testimonials.css'
import Avtr1 from'../../assets/avatar1.jpg'
import Avtr2 from'../../assets/avatar2.jpg'
import Avtr3 from'../../assets/avatar3.jpg'
import Avtr4 from'../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data =[
  {
    avatar: Avtr1,
    name:"Sujit Kumar",
    review:"ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae tempore unde cupiditate nulla fuga esse sapiente excepturi, corporis quibusdam! Suscipit molliti",
  },
  {
    avatar: Avtr2,
    name:"Anuraj Kunwar",
    review:"olor sit sicing elit. Repellat repudiandae tempore unde cupiditate nulla fuga esse sapiente excepturi, corporis quibusdam! Suscipit molliti",
  },
  {
    avatar: Avtr3,
    name:"Smreeti Gurung",
    review:" adipisicing elit. Repellat repudiandae tempore unde cupiditate nulla fuga esse ipsum dolor sit amet consectetur sapiente excepturi, corporis quibusdam! Suscipit molliti",
  },
  {
    avatar: Avtr4,
    name:"Jay Pandey",
    review:"ipsum dolor sit amet consectetur adit. Repellat repudiandae tempore unde cupiditate nulla fuga esse sapiente excepturi, corporis quibusdam! Suscipit molliti",
  }
]
const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_conatainer"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      >
              {
                data.map(({avatar,name,review},index) =>{
                  return(
                    <SwiperSlide key={index}className="testimonial">
                    <div className="client_avatar">
                    <img src={avatar} alt="avatar one" />
                    </div>
                    <h5>{name}</h5>
                    <small className='client_review'>{review}</small>
                     </SwiperSlide>
                  )
                })
              }   
      </Swiper>
    </section>
  )
}

export default Testimonials