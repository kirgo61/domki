import React from "react";
import Slider from "react-slick";
import slidePhoto1 from "./photos/slidePhoto1.png";
import slidePhoto2 from "./photos/slidePhoto2.png";
import slidePhoto3 from "./photos/slidePhoto3.png";
import slidePhoto4 from "./photos/slidePhoto4.jpg";
import slidePhoto5 from "./photos/slidePhoto5.png";
import slidePhoto6 from "./photos/slidePhoto6.png";
import slidePhotoVer1 from "./photos/slidePhotoVer1.png";
import slidePhotoVer2 from "./photos/slidePhotoVer2.png";
import slidePhotoVer3 from "./photos/slidePhotoVer3.png";

const SingleSlide = () => {
  const viewportWidth = window.innerWidth;

  let photoTable = null;
  if (viewportWidth > 1024) {
    photoTable = [
      slidePhoto1,
      slidePhoto2,
      slidePhoto3,
      slidePhoto4,
      slidePhoto5,
      slidePhoto6
    ];
  } else photoTable = [slidePhotoVer1, slidePhotoVer2, slidePhotoVer3];
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 1000,
    draggable: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {photoTable.map(photo => (
          <div>
            <div>
              <img src={photo} className="sliderImg" alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SingleSlide;
