// Import Swiper React components
import React from 'react';
// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import './comments.css';
// import dataBase
import commentsData from '../../services/db.json';

export default function Comments() {
  console.log(commentsData);
  return (
    <div className="comments">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {commentsData.map((comment) => (
          <SwiperSlide key={comment.id} className="slide-container">
            <p className="slide-description">{comment.description}</p>
            <img src={comment.imageSrc} alt={comment.slug} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
