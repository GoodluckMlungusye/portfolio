import services from "../repository/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {IMAGE_URL} from "../repository/Constants"

const Services = () => {
  const displaySwiperSlides = services.map((service) => (
    <SwiperSlide key={service.id}>
      <div className="service-box">
        <div className="service-img">
          <img src={`${IMAGE_URL}/${service.image}`}  alt={service.id} />
        </div>
        <div className="service-content">
          <div className="service-content-wrapper">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div id="services" className="service-container">
      <div className="title">
        <h3>
          <span>S</span>ervices
        </h3>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        modules={[EffectCoverflow]}
        className="swiper-container"
      >
        {displaySwiperSlides}
        <div className="scroll-right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Services;
