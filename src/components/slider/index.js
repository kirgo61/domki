import React from "react";
import SingleSlide from "./SingleSlide";
const Slider = () => {
  return (
    <div>
      <SingleSlide />
      <div className="logo-wrapper">
        <h2 className="logo-wrapper-text" style={{ textAlign: "left" }}>
          Domki
        </h2>
        <h2 className="logo-wrapper-text" style={{ textAlign: "center" }}>
          Nad
        </h2>
        <h3 className="logo-wrapper-text" style={{ textAlign: "right" }}>
          Rzeczką
        </h3>
      </div>
    </div>
  );
};

export default Slider;
