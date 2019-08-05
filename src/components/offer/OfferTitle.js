import React from "react";
import Fade from "react-reveal/Fade";
const OfferTitle = props => {
  return (
    <div>
      <Fade top>
        <h1 className="offerTitle">{props.titleProp}</h1>
      </Fade>
    </div>
  );
};

export default OfferTitle;
