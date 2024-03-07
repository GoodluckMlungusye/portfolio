// import {Swiper, SwiperSlide} from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import {EffectiveCoverFLow, Pagination, Navigation} from 'swiper/react';
// import services from "../Data/Services"


// const Services = () => {

//     const displaySwiperSlides = services.map((service) => (
//         <div key={service.id} className="swiper-slide">
//         <div className="service-box">
//           <div className="service-img">
//             <img src={service.image}  alt={service.name}/>
//           </div>
//           <div className="service-content">
//             <div>
//               <h2>{service.name}</h2>
//               <p>{service.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))

//   return (
//     <div id="services">
//     <div className="title">
//       <h3>
//         <span>S</span>ervices
//       </h3>
//     </div>
//     <div className="swiper mySwiper">
//         <div className="swiper-wrapper">
//             {displaySwiperSlides}
//         </div>
//     </div>
//   </div>
//   )
// }

// export default Services



import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectiveCoverFLow, Navigation} from 'swiper/react';
import services from "../Data/Services"


const Services = () => {

    const displaySwiperSlides = services.map((service) => (
        <SwiperSlide key={service.id}>
            <img src={service.image}  alt={service.name}/>
        </SwiperSlide>
    ))

  return (
    <div id="services">
    <div className="title">
      <h3>
        <span>S</span>ervices
      </h3>
    </div>
    <Swiper 
      effect = {'coverflow'}
      grabCursor = {true}
      centeredSlides = {true}
      loop = {true}
      slidesPerView = {"auto"}
      coverflowEffect = {{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
     className="swiper_container">
            {displaySwiperSlides}

    </Swiper>
  </div>
  )
}

export default Services