import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaHome, FaCode, FaPalette, FaWeibo } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Services = () => {
  return (
    <div className="bg-[#FDF8F7] py-16 md:py-32">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-gray-600">I Provide a Wide Range of Digital Services</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-auto"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12 shadow-2xl transform hover:scale-105 transition duration-300">
            <FaWeibo className="text-5xl text-blue-500 mb-4" />
            <h1 className="text-xl font-bold mb-2">Web Developer</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12 shadow-2xl transform hover:scale-105 transition duration-300">
            <FaCode className="text-5xl text-blue-500 mb-4" />
            <h1 className="text-xl font-bold mb-2">Web Design</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12 shadow-2xl transform hover:scale-105 transition duration-300">
            <FaPalette className="text-5xl text-blue-500 mb-4" />
            <h1 className="text-xl font-bold mb-2">UX Design</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nam.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
