import services from "../Data/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const Services = () => {
  const displaySwiperSlides = services.map((service) => (
    <SwiperSlide key={service.id}>
      <div className="service-box">
        <div className="service-img">
          <img src={service.image} alt={service.id}/>
        </div>
        <div className="service-content">
          <div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div id="services">
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
      >
        {displaySwiperSlides}
      </Swiper>
    </div>
  );
};

export default Services;
