import React from "react";
import OfferTitle from "./OfferTitle";
import OfferAbout from "./OfferAbout";
import OfferItself from "./OfferItself";
import domek2 from "../utilities/domkiZdjecia1/komanczaKrajobraz.JPG";
import domek1 from "../utilities/domkiZdjecia1/komanczaKrajobraz2.JPG";
import { Element } from "react-scroll";
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
              image: domek1,
              amount: 0.5
            }
          ]}
          style={{
            height: "80vh"
          }}
        />
      </Parallax>
      <Element name="Offer">
        <OfferTitle titleProp="Nasza oferta" />
        <OfferItself />
      </Element>
      <Parallax className="parallax" y={[0, 0]}>
        <ParallaxBanner
          layers={[
            {
              image: domek2,
              amount: 0.5
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
