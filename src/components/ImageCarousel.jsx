import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarousel(props) {
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
        <div>
          <img src="images/logo.png" alt="services" />
        </div>
        <div>
          <img src="images/mobile-bg.png" alt="services" />
        </div>
        <div>
          <img src="images/nav-logo.png" alt="services" />
        </div>
        <div>
          <img src="images/user-profile-pic.png" alt="services" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
