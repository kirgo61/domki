import React, { Component } from "react";
import "./App.css";
import "./components/offer/offer.css";
import "./components/attractions/attractions.css";
import "./components/footer/footer.css";
import "./components/gallery/gallery.css";
import "./components/slider/slider.css";
import "./components/header/header.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/index";
import Offer from "./components/offer/index";
import Attractions from "./components/attractions/index";
import Gallery from "./components/gallery/Gallery";
import OfferTitle from "./components/offer/OfferTitle";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Map from "../src/components/utilities/Map";
import Footer from "./components/footer/Footer";
import domek from "./components/utilities/domkiZdjecia1/komanczaKrajobraz3.JPG";
import { Element } from "react-scroll";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="Header">
          <Header />
        </Element>
        <Slider />
        <Element name="About">
          <Offer />
        </Element>
        <Element name="Attractions">
          <Attractions />
        </Element>
        {
          <Parallax className="parallax" y={[0, 0]}>
            <ParallaxBanner
              layers={[
                {
                  image: domek,
                  amount: 1
                }
              ]}
              style={{
                height: "80vh"
              }}
            />
          </Parallax>
        }
        <OfferTitle titleProp={"Galeria"} />
        <Element name="Gallery">
          <Gallery />
        </Element>
        <Element name="Map">
          <Map />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
