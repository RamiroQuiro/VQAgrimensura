import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import trabajos1 from "../images/trabajos1.jpg";
import trabajos2 from "../images/trabajos2.jpg";
import trabajos3 from "../images/trabajos3.jpg";
import trabajos4 from "../images/trabajos4.jpg";
import trabajos5 from "../images/trabajos5.jpg";
import trabajos6 from "../images/trabajos6.jpg";
import trabajos7 from "../images/trabajos7.jpg";
import "./Carrusel.css";

{
  /*instalacion del modulo Swiper */
}
SwiperCore.use([EffectCoverflow, Pagination]);

let carruselAPI=[
  {
    id:1,
    img:trabajos1,
    description:"• Limpieza de Canal San Pablo"
  },
  {
    id:2,
    img:trabajos2,
    description:"• Encarpetado de Av. Belgrano - Santiago de Estero"
  },
  {
    id:3,
    img:trabajos3,
    description:"• Torres del Rio 2"
  },
  {
    id:4,
    img:trabajos4,
    description:"• Costanera Sur"
  },
  {
    id:5,
    img:trabajos5,
    description:"• Ruta N9"
  },
  {
    id:6,
    img:trabajos6,
    description:"• Mensuras en Campo"
  },
  {
    id:7,
    img:trabajos7,
    description:"• Segmentacion de Lotes"
  },
]

export default function Carrusel() {
  return (
    <section className="section-swiper">
      <h2>Trabajos en donde he participado</h2>
      <div className="swiper-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        
        pagination={true}
        className="mySwiper"
      >
          {
            carruselAPI.map(carrusel=>(
          <SwiperSlide>
            <img src={carrusel.img} id={carrusel.id} />
            <span className="span-swiper">{carrusel.description}</span>
          </SwiperSlide>
            ))
          }
      
      </Swiper>
      </div>
    </section>
  );
}
