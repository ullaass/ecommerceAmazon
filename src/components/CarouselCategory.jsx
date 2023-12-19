import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className='bg-white m-3'>
    <diV className="text-xl font-semibold p-3 ">Shop By Category</diV>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}>

        <SwiperSlide>
          <img src={'../images/category_0.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_1.jpg'} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={'../images/category_2.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_3.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_4.jpg'} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'../images/category_5.jpg'} />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default CarouselCategory