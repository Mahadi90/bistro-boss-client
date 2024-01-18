import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../shared/sectionTitle/SectionTitle";

const SliderSection = () => {
  return (
    <div className="my-10 mx-2">
        <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        heading={'ORDER ONLINE'}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="text-2xl uppercase text-center text-white -mt-12">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <p className="text-2xl uppercase text-center text-white -mt-12">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <p className="text-2xl uppercase text-center text-white -mt-12">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <p className="text-2xl uppercase text-center text-white -mt-12">Dessert</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <p className="text-2xl uppercase text-center absolute bottom-4 left-28 text-white">Salad</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSection;
