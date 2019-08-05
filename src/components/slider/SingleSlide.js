import React from "react";
import Slider from "react-slick";
import slidePhoto1 from "./photos/slidePhoto1.png";
import slidePhoto2 from "./photos/slidePhoto2.png";
import slidePhoto3 from "./photos/slidePhoto3.png";

const SingleSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{ overflow: "hidden", width: "100%", height: "100vh" }}>
      <Slider {...settings}>
        <div>
          <div>
            <img
              src={slidePhoto1}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={slidePhoto2}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src={slidePhoto3}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SingleSlide;
