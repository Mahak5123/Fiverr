import React from "react";
import './slide.scss';
import Slider from "react-slick";  // default import for react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  // react-slick does not have arrowsScroll, instead it has slidesToScroll
  const settings = {
    slidesToShow: slidesToShow || 1,
    slidesToScroll: arrowsScroll || 1,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true, // enables arrows
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
