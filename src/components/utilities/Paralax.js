import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import domek from "../utilities/domkiZdjecia1/komanczaKrajobraz.jpg";
import domek2 from "../utilities/domkiZdjecia1/komanczaKrajobraz2.jpg";
const Paralax = props => {
  return (
    <div
      style={
        {
          // margin: "10vh 0"
        }
      }
    >
      <Parallax className="parallax" y={[0, 0]}>
        <ParallaxBanner
          layers={[
            {
              image: domek,
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

export default Paralax;
