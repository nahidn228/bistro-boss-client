import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col justify-center items-center mx-24 my-10 space-y-4">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p className="text-2xl md:text-7xl text-black font-bold py-8">
                <FaQuoteLeft />
              </p>
              <p>{item.details}</p>
              <h3 className="text-2xl text-orange-500">{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
