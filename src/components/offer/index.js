import React from "react";
import OfferTitle from "./OfferTitle";
import OfferAbout from "./OfferAbout";
import Paralax from "../utilities/Paralax";
import OfferItself from "./OfferItself";
import domek2 from "../utilities/domkiZdjecia1/komanczaKrajobraz.jpg";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
const Offer = () => {
  return (
    <div>
      <OfferTitle titleProp="Witamy na naszej stronie!" />
      <OfferAbout />
      <Parallax className="parallax" y={[0, 0]}>
        <ParallaxBanner
          layers={[
            {
              image: domek2,
              amount: 0.3
            },
            {
              image: domek2,
              amount: 0.3
            }
          ]}
          style={{
            height: "80vh"
          }}
        />
      </Parallax>
      <OfferTitle titleProp="Nasza oferta" />
      <OfferItself />
      <Parallax className="parallax" y={[0, 0]}>
        <ParallaxBanner
          layers={[
            {
              image: domek2,
              amount: 0.3
            },
            {
              image: domek2,
              amount: 0.3
            }
          ]}
          style={{
            height: "80vh"
          }}
        />
      </Parallax>
    </div>
  );
};

export default Offer;
