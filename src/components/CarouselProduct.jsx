import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className='bg-white m-3'>
    <div className='text-xl font-semibold p-3'> Best seller</div>
        <Swiper
            modules={[Navigation]}
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
        >
        {
            Array.from({length:9}, (_, i)=>
            <SwiperSlide key={i}>
                <img src={`../images/product_${i}_small.jpg`} />
            </SwiperSlide>)
        }
        </Swiper>
    </div>
  )
}

export default CarouselProduct