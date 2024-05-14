import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function ImageCarousel() {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="flex justify-center items-center relative top-[-40px] mt-[20px] h-[70px] w-[120px] transform -translate-y-1/2 z-10 text-white bg-pink-300 bg-opacity-80 px-4 py-2 rounded-xl"
        onClick={onClick}
      >
        <FaArrowLeftLong size={"50px"} />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="flex justify-center items-center relative top-[-110px] left-[42%] h-[70px] w-[180px] transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-80 px-4 py-2 rounded-xl"
        onClick={onClick}
      >
        <FaArrowRightLong size={"50px"} />
      </button>
    );
  };

  var settings = {
    autoplay: true,
    autoplayDelay: 500,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img src="images/carousel-1.png" alt="services" />
          <CustomPrevArrow />
          <CustomNextArrow />
        </div>
        <div className="relative">
          <img src="images/carousel-2.png" alt="services" />
          <CustomPrevArrow />
          <CustomNextArrow />
        </div>
        <div className="relative">
          <img src="images/carousel-3.png" alt="services" />
          <CustomPrevArrow />
          <CustomNextArrow />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
