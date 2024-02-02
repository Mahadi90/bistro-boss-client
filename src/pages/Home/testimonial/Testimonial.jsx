import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);

  console.log(ratings);

  return (
    <div>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {ratings.map((rating) => (
          <SwiperSlide
          className="px-20 text-center my-20 space-y-2"
          key={rating._id}
          >
            <div>
            <Rating className="mx-auto mb-4" style={{ maxWidth: 180,}} value={rating.rating} readOnly />
            <p>{rating.details}</p>
            <h3 className="text-xl text-yellow-500">{rating.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
