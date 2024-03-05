import services from "../Data/Services"


const Services = () => {

    const displaySwiperSlides = services.map((service) => (
        <div key={service.id} className="swiper-slide">
        <div className="service-box">
          <div className="service-img">
            <img src={service.image}  alt={service.name}/>
          </div>
          <div className="service-content">
            <div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))

  return (
    <div id="services">
    <div className="title">
      <h3>
        <span>S</span>ervices
      </h3>
    </div>
    <div className="swiper mySwiper">
        <div className="swiper-wrapper">
            {displaySwiperSlides}
        </div>
    </div>
  </div>
  )
}

export default Services