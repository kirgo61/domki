import React from "react";
import Slider from "react-slick";

import photo1 from "../../../src/components/utilities/domkiZdjecia1/1.JPG";
import photo2 from "../utilities/domkiZdjecia1/2.JPG";
import photo3 from "../utilities/domkiZdjecia1/3.JPG";
import photo4 from "../utilities/domkiZdjecia1/4.JPG";
import photo5 from "../utilities/domkiZdjecia1/5.JPG";
import photo6 from "../utilities/domkiZdjecia1/6.JPG";
import photo7 from "../utilities/domkiZdjecia1/7.JPG";
import photo8 from "../utilities/domkiZdjecia1/8.JPG";
import photo9 from "../utilities/domkiZdjecia1/9.JPG";

import photo11 from "../utilities/domkiZdjecia1/11.JPG";

import photo13 from "../utilities/domkiZdjecia1/13.JPG";
import photo14 from "../utilities/domkiZdjecia1/14.JPG";
import photo15 from "../utilities/domkiZdjecia1/15.JPG";
import photo16 from "../utilities/domkiZdjecia1/16.JPG";

const Gallery = () => {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo11,
    photo13,
    photo14,
    photo15,
    photo16
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 1000,
    draggable: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div
      style={{
        overflow: "hidden",
        width: "80vw",
        height: "70vh",
        margin: "auto"
      }}
    >
      <Slider {...settings}>
        {photos.map(photo => (
          <div style={{ width: "90%", height: "80%" }}>
            <div>
              <img
                src={photo}
                style={{ width: "80vw", height: "70vh" }}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
