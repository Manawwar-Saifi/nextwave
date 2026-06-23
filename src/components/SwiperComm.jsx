import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComm = ({ text1, text2, text3, slides, space = 10, loop = true, delay = 1500 }) => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={space}
          slidesPerView={slides}
          pagination={{
            clickable: true,
          }}
          loop={loop}
          autoplay={{
            delay: { delay },
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={true} modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>{text1}</SwiperSlide>
          <SwiperSlide>{text2}</SwiperSlide>
          <SwiperSlide>{text3}</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SwiperComm;
