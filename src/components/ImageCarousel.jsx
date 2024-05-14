import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function ImageCarousel() {
  const sliderRef = useRef(null);

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        className="flex justify-center items-center relative top-[-30px] left-[0] h-[70px] w-[120px] transform -translate-y-1/2 z-10 text-white bg-pink-300 bg-opacity-80 px-4 py-2 rounded-xl"
        onClick={onClick}
      >
        <FaArrowLeftLong size={"50px"} />
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        className="flex justify-center items-center relative top-[-95px] left-[62%] h-[70px] w-[180px] transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-80 px-4 py-2 rounded-xl"
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
    arrows: false, // Disable default arrows
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        <div className="relative">
          <img src="images/carousel-1.png" alt="services" />
          <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
        <div className="relative">
          <img src="images/carousel-2.png" alt="services" />
          <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
        <div className="relative">
          <img src="images/carousel-3.png" alt="services" />
          <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
