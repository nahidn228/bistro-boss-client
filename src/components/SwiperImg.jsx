import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../src/assets/home/slide1.jpg";
import slide2 from "../../src/assets/home/slide2.jpg";
import slide3 from "../../src/assets/home/slide3.jpg";
import slide4 from "../../src/assets/home/slide4.jpg";
import slide5 from "../../src/assets/home/slide5.jpg";
import SectionTitle from "../Shared/SectionTitle";

const SwiperImg = () => {
  return (
    <div className="p-10">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-base md:text-2xl font-semibold uppercase text-white absolute left-1/3 bottom-10">
            SALAD
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-base md:text-2xl font-semibold uppercase text-white absolute left-1/3 bottom-10">
            PIZAA
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-base md:text-2xl font-semibold uppercase text-white absolute left-1/3 bottom-10">
            SOUP
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-base md:text-2xl font-semibold uppercase text-white absolute left-1/3 bottom-10">
            PASTRY
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-base md:text-2xl font-semibold uppercase text-white absolute left-1/3 bottom-10">
            SALAD
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImg;
